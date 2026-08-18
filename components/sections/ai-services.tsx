"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { aiServices } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";

/** Scroll length of the pinned stage, as a fraction of viewport height. */
const STAGE_VH = 240;
/** Share of each beat's slice spent crossfading rather than holding still. */
const FADE = 0.14;

export function AiServices() {
  const items = aiServices.items;
  const beats = aiServices.beats;

  /**
   * Server-renders "static": video visible, all beats stacked as ordinary
   * prose, nothing pinned. The scrubbed stage only engages once the client
   * confirms a wide viewport and no reduced-motion preference.
   */
  const [mode, setMode] = useState<"static" | "pinned">("static");

  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railRef = useRef<HTMLSpanElement>(null);

  /**
   * The clip is the heaviest asset on the site. The section sits only ~1,400px
   * down, so proximity alone fires immediately and the video races the hero
   * for bandwidth. Waiting for the load event first lets the fonts, hero image
   * and JS finish, then fetches during idle — still far enough ahead of the
   * reader that it is buffered before they arrive.
   */
  useEffect(() => {
    const el = trackRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    let io: IntersectionObserver | null = null;
    const begin = () => {
      io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          /* Chrome begins buffering as soon as a src attribute exists,
             whatever `preload` says — so the src is withheld until here
             rather than merely hinted at. */
          video.src = aiServices.video.src;
          video.preload = "auto";
          video.load();
          io?.disconnect();
        },
        { rootMargin: "150% 0px" },
      );
      io.observe(el);
    };

    const afterLoad = () => {
      if ("requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void })
          .requestIdleCallback(begin, { timeout: 2000 });
      } else {
        setTimeout(begin, 400);
      }
    };

    if (document.readyState === "complete") afterLoad();
    else window.addEventListener("load", afterLoad, { once: true });

    return () => {
      io?.disconnect();
      window.removeEventListener("load", afterLoad);
    };
  }, []);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setMode(wide.matches && !reduced.matches ? "pinned" : "static");
    decide();
    wide.addEventListener("change", decide);
    reduced.addEventListener("change", decide);
    return () => {
      wide.removeEventListener("change", decide);
      reduced.removeEventListener("change", decide);
    };
  }, []);

  useEffect(() => {
    if (mode !== "pinned") return;
    let cancelled = false;
    let revert: (() => void) | null = null;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapMod, stMod]) => {
      const { gsap } = gsapMod;
      const { ScrollTrigger } = stMod;
      if (cancelled || !trackRef.current || !stageRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const video = videoRef.current;
      const panels = beatRefs.current.filter(Boolean) as HTMLDivElement[];
      const n = beats.length;

      let unprime: (() => void) | null = null;

      const ctx = gsap.context(() => {
        gsap.set(panels.slice(1), { autoAlpha: 0, y: 24 });

        let progress = 0;

        /**
         * Paints the whole stage for a given progress. Separate from onUpdate
         * because the stage also has to be painted when nothing has scrolled:
         * on build, on refresh, and when the clip finally decodes.
         */
        const render = (p: number) => {
          progress = p;

          // the clip's playhead is the scroll position
          if (video && video.readyState >= 1 && video.duration) {
            video.currentTime = Math.min(p * video.duration, video.duration - 0.001);
          }

          if (railRef.current) railRef.current.style.transform = `scaleX(${p})`;

          /**
           * Each beat owns a slice and holds still through most of it,
           * crossfading only in the FADE margins. Dwell is the point — the
           * previous build left the reader inside a permanent dissolve.
           */
          panels.forEach((panel, i) => {
            const start = i / n;
            const end = (i + 1) / n;
            const fade = (end - start) * FADE;
            let o = 0;
            if (p >= start - fade && p <= end + fade) {
              if (p < start) o = (p - (start - fade)) / fade;
              else if (p > end) o = 1 - (p - end) / fade;
              else o = 1;
            }
            o = Math.max(0, Math.min(1, o));
            gsap.set(panel, { autoAlpha: o, y: (1 - o) * 24 });
            if (o > 0.5) panel.removeAttribute("inert");
            else panel.setAttribute("inert", "");
          });
        };

        const st = ScrollTrigger.create({
          trigger: trackRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stageRef.current,
          pinSpacing: false,
          scrub: 0.4,
          onUpdate: (self) => render(self.progress),
          /* A reload restores the scroll position, but onUpdate does not fire
             until the reader moves. Painting on every refresh keeps the stage
             honest about where the page already is. */
          onRefresh: (self) => render(self.progress),
        });

        render(st.progress);

        /**
         * The clip is fetched long after the stage is built (see the loader
         * above), so until it has decoded a frame the element is still showing
         * its poster — at a scroll position that has nothing to do with it.
         * Seek it as soon as there is a frame to seek to.
         *
         * The muted play/pause is the prime: Safari and iOS will not render a
         * seeked frame until the element has decoded at least once. It has to
         * happen here rather than at import time, because back then the clip
         * had no src yet and the call rejected on every browser. The catch is
         * still required — autoplay rejection is expected and harmless — and
         * the seek runs either way, since play() leaves the playhead adrift.
         */
        if (video) {
          const prime = () => {
            video
              .play()
              .then(() => video.pause())
              .catch(() => {})
              .finally(() => render(progress));
          };
          if (video.readyState >= 2) prime();
          else video.addEventListener("loadeddata", prime, { once: true });
          unprime = () => video.removeEventListener("loadeddata", prime);
        }
      }, trackRef);

      revert = () => {
        unprime?.();
        ctx.revert();
      };
    });

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [mode, beats.length]);

  return (
    <section id="ai-services" data-mode={mode} className="bg-canvas">
      <div ref={trackRef} className="ai-track" style={{ "--stage-vh": `${STAGE_VH}vh` } as React.CSSProperties}>
        <div ref={stageRef} className="ai-stage flex items-center overflow-clip">
          <div className="wrap grid w-full items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            {/* ---- copy beats ---- */}
            <div className="relative order-2 lg:order-1 lg:min-h-[26rem]">
              <p className="eyebrow mb-7 text-accent">{aiServices.eyebrow}</p>

              <div className="ai-beats relative">
                {beats.map((beat, i) => (
                  <div
                    key={beat.title}
                    ref={(el) => { beatRefs.current[i] = el; }}
                    className="ai-beat"
                  >
                    <h2 className="max-w-[15ch] text-balance text-[clamp(2.2rem,3.9vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink">
                      {i === 0 ? <SplitWords text={beat.title} /> : beat.title}
                    </h2>
                    <p className="mt-6 max-w-lg text-[1.05rem] leading-7 text-ink-muted">{beat.body}</p>
                  </div>
                ))}
              </div>

              <div className="ai-rail mt-10 h-px w-full bg-line">
                <span ref={railRef} className="block h-px origin-left bg-ink" style={{ transform: "scaleX(0)" }} />
              </div>
            </div>

            {/* ---- the clip ---- */}
            <div className="order-1 lg:order-2 lg:scale-[1.12]">
              <video
                ref={videoRef}
                poster={aiServices.video.poster}
                muted
                playsInline
                preload="metadata"
                aria-label={aiServices.video.alt}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---- the nine, quietly ---- */}
      <div className="wrap pb-24 md:pb-32">
        <div className="grid gap-x-14 gap-y-12 border-t border-line pt-12 md:grid-cols-3">
          {aiServices.groupOrder.map((group) => (
            <div key={group} className="reveal">
              <p className="eyebrow text-ink-muted">{group}</p>
              <ul className="mt-5">
                {items
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <li key={s.title}>
                      <a
                        href={s.href}
                        className="group flex items-baseline justify-between gap-4 border-b border-line py-4 text-[1.02rem] leading-snug text-ink transition-colors hover:text-accent"
                      >
                        {s.title}
                        <ArrowUpRight
                          size={15}
                          aria-hidden
                          className="shrink-0 translate-y-0.5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0 group-hover:text-accent"
                        />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

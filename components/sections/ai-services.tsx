"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { aiServices } from "@/lib/content";
import { stages, servicesByStage } from "@/lib/services";
import { SplitWords } from "@/components/ui/split-words";

/** Scroll length of the pinned stage, as a fraction of viewport height. */
const STAGE_VH = 240;
/** Share of each beat's slice spent crossfading rather than holding still. */
const FADE = 0.14;

export function AiServices() {
  const beats = aiServices.beats;

  /**
   * Server-renders "static": artwork visible, all beats stacked as ordinary
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
   * and JS finish, then fetches during idle, still far enough ahead of the
   * reader that it is buffered before they arrive.
   *
   * Inert while the stage shows a still: the effect bails on the first line.
   */
  useEffect(() => {
    if (aiServices.media.kind !== "video") return;
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
          video.src = aiServices.media.src;
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
           * crossfading only in the FADE margins. Dwell is the point: an
           * earlier build left the reader inside a permanent dissolve.
           *
           * The crossfade is centred on the boundary between two slices, and
           * that matters. The previous version ramped a beat in over the
           * window before its slice while the outgoing beat was still at full
           * opacity, then ramped the outgoing one down over the window after.
           * The two ramps did not overlap, so at the boundary itself both
           * beats sat at opacity 1 and the headings printed on top of each
           * other. Sharing one window centred on the boundary means each is at
           * half opacity there, which is what a dissolve is.
           */
          panels.forEach((panel, i) => {
            const start = i / n;
            const end = (i + 1) / n;
            const half = (end - start) * FADE;
            const first = i === 0;
            const last = i === n - 1;

            let o: number;
            if (!first && p < start - half) o = 0;
            else if (!last && p > end + half) o = 0;
            else if (!first && p < start + half) o = (p - (start - half)) / (2 * half);
            else if (!last && p > end - half) o = 1 - (p - (end - half)) / (2 * half);
            else o = 1;

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
    <section id="ai-services" data-mode={mode} className="border-t border-line bg-canvas">
      <div ref={trackRef} className="ai-track" style={{ "--stage-vh": `${STAGE_VH}vh` } as React.CSSProperties}>
        <div ref={stageRef} className="ai-stage flex items-center overflow-clip">
          <div className="wrap grid w-full items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            {/* ---- copy beats ---- */}
            <div className="relative order-2 lg:order-1 lg:min-h-[26rem]">
              <p className="eyebrow mb-7 text-accent-ink">{aiServices.eyebrow}</p>

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

            {/* ---- the artwork: a still today, a scrubbed clip when one exists ---- */}
            <div className="order-1 lg:order-2 lg:scale-[1.12]">
              {aiServices.media.kind === "video" ? (
                <video
                  ref={videoRef}
                  poster={aiServices.media.poster}
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={aiServices.media.alt}
                  className="w-full"
                />
              ) : (
                <Image
                  src={aiServices.media.src}
                  alt={aiServices.media.alt}
                  width={1720}
                  height={969}
                  sizes="(max-width: 1024px) 90vw, 55vw"
                  className="h-auto w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/*
        The catalogue, by stage.

        Five columns, one per stage, which is what makes it symmetrical: the
        earlier three-column version had to pack five stages into three, so one
        column carried five services and the others three, and it stopped
        short. Five equal columns of two, three, three, two and one read as a
        table rather than as a column that ran out.

        The stage summaries are deliberately not here. They were what made the
        previous version tall, and this block's job is visibility of the
        services themselves — the summaries belong on /services, where there
        is room to argue.

        Read from lib/services.ts so the home page cannot drift from the
        catalogue it links to.
      */}
      <div className="wrap pb-24 md:pb-32">
        <div className="reveal-group grid gap-x-8 gap-y-10 grid-cols-2 border-t border-line pt-10 md:grid-cols-3 lg:grid-cols-5">
          {stages.map((stage, i) => (
            <div key={stage.slug} className="reveal">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2.5 text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
                {stage.name}
              </h3>
              <ul className="mt-4 flex flex-col">
                {servicesByStage(stage.slug).map((svc) => (
                  <li key={svc.slug}>
                    <a
                      href={`/services/${svc.slug}`}
                      className="group flex items-baseline gap-1.5 border-t border-line py-2.5 text-[0.94rem] leading-snug text-ink-muted transition-colors hover:text-accent-ink"
                    >
                      <span>{svc.title}</span>
                      <ArrowUpRight
                        size={13}
                        aria-hidden
                        className="mt-0.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
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

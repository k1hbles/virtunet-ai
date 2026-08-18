"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { aiServices } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";

/** Scroll length of the pinned stage, as a fraction of viewport height. */
const STAGE_VH = 300;
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
   * The clip is 3MB — the heaviest thing on the page. Hold it off the initial
   * load and fetch it only once the section is within a couple of viewports,
   * which is far enough ahead that it is buffered before anyone reaches it.
   */
  useEffect(() => {
    const el = trackRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        video.preload = "auto";
        video.load();
        io.disconnect();
      },
      { rootMargin: "200% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
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

      /**
       * Safari and iOS will not render a seeked frame until the element has
       * decoded at least once, so prime it with a muted play/pause. The catch
       * is required: autoplay rejection is expected and harmless here.
       */
      if (video) {
        video.play().then(() => video.pause()).catch(() => {});
      }

      const ctx = gsap.context(() => {
        gsap.set(panels.slice(1), { autoAlpha: 0, y: 24 });

        ScrollTrigger.create({
          trigger: trackRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stageRef.current,
          pinSpacing: false,
          scrub: 0.4,
          onUpdate: (self) => {
            const p = self.progress;

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
          },
        });
      }, trackRef);

      revert = () => ctx.revert();
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

              <div className="relative lg:absolute lg:inset-x-0 lg:top-12">
                {beats.map((beat, i) => (
                  <div
                    key={beat.title}
                    ref={(el) => { beatRefs.current[i] = el; }}
                    className="ai-beat lg:absolute lg:inset-x-0 lg:top-0"
                  >
                    <h2 className="max-w-[15ch] text-balance text-[clamp(2.2rem,3.9vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink">
                      {i === 0 ? <SplitWords text={beat.title} /> : beat.title}
                    </h2>
                    <p className="mt-6 max-w-lg text-[1.05rem] leading-7 text-ink-muted">{beat.body}</p>
                  </div>
                ))}
              </div>

              <div className="ai-rail mt-10 hidden h-px w-full bg-line lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:block">
                <span ref={railRef} className="block h-px origin-left bg-ink" style={{ transform: "scaleX(0)" }} />
              </div>
            </div>

            {/* ---- the clip ---- */}
            <div className="order-1 lg:order-2 lg:scale-[1.12]">
              <video
                ref={videoRef}
                src={aiServices.video.src}
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

      {/* ---- the nine, scannable ---- */}
      <div className="wrap pb-24 md:pb-32">
        <div className="reveal-group grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <a
              key={s.title}
              href={s.href}
              className={[
                "group flex min-h-[17rem] flex-col justify-between border-b border-line py-9 transition-colors hover:bg-surface md:px-8",
                i % 2 === 1 ? "md:border-l" : "",
                i % 3 === 0 ? "lg:border-l-0" : "lg:border-l",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                  {s.kicker}
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </div>
              <div>
                <h3 className="text-balance text-[1.7rem] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-[0.95rem] leading-6 text-ink-muted">{s.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { aiServices } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";

/** Scroll length of the pinned opening, as a fraction of viewport height. */
const OPEN_VH = 160;

export function AiServices() {
  const items = aiServices.items;

  /**
   * Server-renders as "static". The pin only engages once the client confirms
   * a wide viewport and no reduced-motion preference, so no-JS, narrow and
   * reduced-motion visitors get the same content unpinned rather than a
   * half-built stage.
   */
  const [mode, setMode] = useState<"static" | "pinned">("static");

  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

      const ctx = gsap.context(() => {
        const video = videoRef.current;

        ScrollTrigger.create({
          trigger: trackRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stageRef.current,
          pinSpacing: false,
          scrub: 0.5,
          onUpdate: (self) => {
            /**
             * The clip is never played — its playhead is the scroll position.
             * Guarded on readyState so seeking before metadata lands can't
             * throw, and on duration because a still-loading video reports 0.
             */
            if (video && video.readyState >= 1 && video.duration) {
              video.currentTime = self.progress * video.duration;
            }
          },
        });

        // the backdrop opens up as the stage is entered, then settles
        if (backdropRef.current) {
          gsap.fromTo(
            backdropRef.current,
            { scale: 1.12, opacity: 0.5 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: trackRef.current,
                start: "top bottom",
                end: "top top",
                scrub: 0.6,
              },
            },
          );
        }
      }, trackRef);

      revert = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [mode]);

  return (
    <section id="ai-services" data-mode={mode} className="bg-canvas">
      {/* ---------- cinematic opening ---------- */}
      <div ref={trackRef} className="ai-open" style={{ "--open-vh": `${OPEN_VH}vh` } as React.CSSProperties}>
        <div ref={stageRef} className="ai-stage relative flex items-center overflow-clip">
          <div ref={backdropRef} className="pointer-events-none absolute inset-0">
            {aiServices.video ? (
              <video
                ref={videoRef}
                src={aiServices.video.src}
                poster={aiServices.video.poster}
                muted
                playsInline
                preload="auto"
                aria-hidden
                className="size-full object-cover"
              />
            ) : (
              /* stands in for the clip, and remains the permanent fallback
                 for mobile, reduced motion and any load failure */
              <div
                className="size-full"
                style={{
                  background:
                    "radial-gradient(46% 42% at 50% 52%, oklch(61% 0.235 260 / 0.20), transparent 68%)," +
                    "radial-gradient(30% 28% at 68% 38%, oklch(72% 0.19 151 / 0.12), transparent 70%)," +
                    "radial-gradient(26% 24% at 32% 64%, oklch(84% 0.18 91 / 0.09), transparent 72%)",
                }}
              />
            )}
          </div>

          {/* keeps the type off the artwork */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(58% 48% at 50% 50%, oklch(0% 0 0 / 0.55), transparent 76%)," +
                "linear-gradient(to bottom, oklch(0% 0 0) 0%, transparent 22%, transparent 78%, oklch(0% 0 0) 100%)",
            }}
          />

          <div className="wrap relative z-10">
            <p className="eyebrow text-accent">{aiServices.eyebrow}</p>
            <h2 className="mt-6 max-w-[16ch] text-balance text-[clamp(2.8rem,6.4vw,6rem)] font-medium leading-[0.96] tracking-[-0.045em] text-ink">
              <SplitWords text={aiServices.title} />
            </h2>
            <p className="reveal mt-8 max-w-2xl text-lg leading-8 text-ink-muted">
              {aiServices.intro}
            </p>
          </div>
        </div>
      </div>

      {/* ---------- the nine, scannable ---------- */}
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

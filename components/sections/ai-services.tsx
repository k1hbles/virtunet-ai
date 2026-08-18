"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { aiServices } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";

/** How much scroll each panel is given, as a fraction of viewport height. */
const PANEL_VH = 70;

export function AiServices() {
  const items = aiServices.items;
  const n = items.length;

  /**
   * Server-renders as "grid". The sequence only takes over once the client
   * confirms a wide viewport and no reduced-motion preference, so no-JS,
   * small-screen and reduced-motion visitors all get the plain grid and
   * never see a half-built pinned stage.
   */
  const [mode, setMode] = useState<"grid" | "sequence">("grid");

  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setMode(wide.matches && !reduced.matches ? "sequence" : "grid");
    decide();
    wide.addEventListener("change", decide);
    reduced.addEventListener("change", decide);
    return () => {
      wide.removeEventListener("change", decide);
      reduced.removeEventListener("change", decide);
    };
  }, []);

  useEffect(() => {
    if (mode !== "sequence") return;
    let cancelled = false;
    let revert: (() => void) | null = null;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapMod, stMod]) => {
      const { gsap } = gsapMod;
      const { ScrollTrigger } = stMod;
      if (cancelled || !trackRef.current || !stageRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
      if (panels.length !== n) return;

      /**
       * The counter, rail and `inert` state are written straight to the DOM
       * rather than through React state — this runs on every scrub frame, and
       * re-rendering nine panels at 60fps would be the one thing that makes
       * this feel cheap.
       */
      const paint = (progress: number) => {
        const active = Math.round(progress * (n - 1));
        if (counterRef.current) {
          counterRef.current.textContent = String(active + 1).padStart(2, "0");
        }
        if (railRef.current) {
          railRef.current.style.transform = `scaleX(${(active + 1) / n})`;
        }
        panels.forEach((p, i) => {
          if (i === active) p.removeAttribute("inert");
          else p.setAttribute("inert", "");
        });
      };

      const ctx = gsap.context(() => {
        gsap.set(panels, { autoAlpha: 0, y: 28 });
        gsap.set(panels[0], { autoAlpha: 1, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: stageRef.current,
            pinSpacing: false,
            scrub: 0.6,
            /**
             * `inertia: false` matters: with it on, ScrollTrigger projects
             * momentum past the release point and a single wheel tick can
             * skip several panels. Off, each gesture settles on the nearest
             * panel instead of being thrown to the end.
             */
            snap: {
              snapTo: 1 / (n - 1),
              duration: { min: 0.15, max: 0.4 },
              delay: 0.06,
              inertia: false,
              ease: "power2.inOut",
            },
            onUpdate: (self) => paint(self.progress),
            onRefresh: (self) => paint(self.progress),
          },
        });

        /**
         * Plain `to` tweens off the gsap.set baseline above, deliberately —
         * `fromTo` inside a scrubbed timeline applies its from-state at
         * creation rather than at its position on the timeline, which leaves
         * the panels showing the wrong slide for a given scroll offset.
         */
        /**
         * Asymmetric handoff, not a crossfade. A symmetric fade leaves both
         * panels at partial opacity through the middle of every transition,
         * and because this is scrubbed the reader sits inside that state —
         * two headlines overlapping. The outgoing panel clears by 45% of the
         * step, the incoming one starts there.
         */
        for (let i = 1; i < n; i++) {
          tl.to(panels[i - 1], { autoAlpha: 0, y: -34, duration: 0.45, ease: "power1.in" }, i - 1)
            .to(panels[i], { autoAlpha: 1, y: 0, duration: 0.55, ease: "power1.out" }, i - 1 + 0.45);
        }

        paint(0);
      }, trackRef);

      revert = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [mode, n]);

  return (
    <section id="ai-services" data-mode={mode} className="bg-canvas">
      <div className="wrap pt-24 md:pt-36">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="reveal eyebrow text-accent">{aiServices.eyebrow}</p>
            <h2 className="drift section-title mt-5 max-w-2xl">
              <SplitWords text={aiServices.title} />
            </h2>
          </div>
          <p className="reveal max-w-2xl text-lg leading-8 text-ink-muted lg:justify-self-end">
            {aiServices.intro}
          </p>
        </div>
      </div>

      {/* ---------- pinned sequence ---------- */}
      <div
        ref={trackRef}
        className="ai-sequence hidden"
        style={{ height: `${n * PANEL_VH}vh` }}
      >
        <div ref={stageRef} className="flex h-screen items-center">
          <div className="wrap w-full">
            <div className="flex items-baseline justify-between border-b border-line pb-5">
              <span className="eyebrow text-ink-muted">{aiServices.eyebrow}</span>
              <span className="font-mono text-sm tabular-nums text-ink-muted">
                <span ref={counterRef} className="text-ink">01</span>
                <span className="mx-1.5 opacity-40">/</span>
                {String(n).padStart(2, "0")}
              </span>
            </div>

            <div className="relative mt-10 min-h-[38vh]">
              {items.map((s, i) => (
                <div
                  key={s.title}
                  ref={(el) => { panelRefs.current[i] = el; }}
                  className="absolute inset-0"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                    {s.kicker}
                  </p>
                  <h3 className="mt-6 max-w-[18ch] text-balance text-[clamp(2.6rem,5.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted">{s.body}</p>
                  <a
                    href={s.href}
                    className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    Explore this service
                    <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 h-px w-full bg-line">
              <span
                ref={railRef}
                className="block h-px origin-left bg-ink transition-none"
                style={{ transform: "scaleX(0.111)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- grid fallback ---------- */}
      <div className="ai-grid wrap pb-24 md:pb-36">
        <div className="reveal-group grid md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <a
              key={s.title}
              href={s.href}
              className={[
                "group flex min-h-64 flex-col justify-between border-b border-line py-8 transition-colors hover:bg-surface md:px-7",
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
                  className="text-ink-muted transition-colors group-hover:text-accent"
                />
              </div>
              <div>
                <h3 className="text-balance text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-ink-muted">{s.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

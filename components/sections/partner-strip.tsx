"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { partners } from "@/lib/content";

export function PartnerStrip() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let teardown: (() => void) | null = null;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapMod, stMod]) => {
      const { gsap } = gsapMod;
      const { ScrollTrigger } = stMod;
      if (cancelled || !railRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      /**
       * The rail lags fractionally behind the scroll and settles when it
       * stops — enough to register as alive, not enough to read as a gimmick.
       * Drift only, no skew: skewing vendor logos distorts trademarks.
       */
      const drift = gsap.quickTo(railRef.current, "x", { duration: 0.7, ease: "power3" });
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          drift(gsap.utils.clamp(-26, 26, -self.getVelocity() / 90));
        },
        onScrubComplete: () => drift(0),
      });
      const settle = setInterval(() => drift(0), 400);

      teardown = () => {
        clearInterval(settle);
        st.kill();
        gsap.set(railRef.current, { x: 0 });
      };
    });

    return () => {
      cancelled = true;
      teardown?.();
    };
  }, []);

  return (
    <section className="border-y border-line bg-canvas py-12">
      <div className="wrap overflow-clip">
        <p className="reveal text-center text-[11px] font-medium uppercase tracking-[0.3em] text-ink-muted">
          Platforms and silicon we build on
        </p>
        {/*
          One height drives the whole row, so the logos scale together and each
          mark's own `scale` stays a fixed proportion of it. The marks are white
          artwork already, so nothing here recolours them.
        */}
        <div
          ref={railRef}
          className="reveal-group mt-9 flex items-center gap-10 overflow-x-auto pb-2 md:justify-between md:gap-6 md:overflow-visible"
          style={{ ["--logo-h" as string]: "clamp(2rem, 3.2vw, 2.75rem)" }}
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex shrink-0 items-center justify-center"
              title={`${p.name} — ${p.tier}`}
            >
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={Math.round(120 * p.aspect)}
                height={120}
                className="w-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
                style={{ height: `calc(var(--logo-h) * ${p.scale})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

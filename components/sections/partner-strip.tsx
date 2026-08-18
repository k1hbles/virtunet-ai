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
    <section className="border-y border-line bg-canvas py-10">
      <div className="wrap overflow-clip">
        <p className="reveal text-center text-[11px] font-medium uppercase tracking-[0.3em] text-ink-muted">
          Strategic technology partnerships
        </p>
        <div
          ref={railRef}
          className="reveal-group mt-8 flex items-center gap-12 overflow-x-auto pb-2 md:justify-between md:overflow-visible"
        >
          {partners.map((p) => (
            <div key={p.name} className="flex min-w-24 items-center justify-center" title={p.name}>
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={96}
                height={32}
                className="h-7 max-w-24 object-contain opacity-60 grayscale transition-opacity hover:opacity-100 md:h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

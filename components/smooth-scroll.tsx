"use client";

import { useEffect } from "react";

/**
 * Smooth scrolling, and the single scroll source the whole page shares.
 *
 * Lenis interpolates the scroll position; ScrollTrigger is driven from the
 * same rAF tick so pinned sections and Lenis never disagree about where the
 * page is. Everything is dynamically imported, so the libraries stay out of
 * the initial bundle.
 *
 * Skipped entirely under prefers-reduced-motion. `?smooth=0` disables it for
 * comparison; the CSS scroll-timeline motion continues to work either way,
 * because Lenis still advances the native scroll position.
 */

type LenisLike = {
  raf: (time: number) => void;
  destroy: () => void;
  on: (event: "scroll", handler: () => void) => void;
};

export function SmoothScroll() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("smooth") === "0") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let teardown: (() => void) | null = null;

    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([lenisMod, gsapMod, stMod]) => {
      if (cancelled) return;

      const Lenis = lenisMod.default;
      const { gsap } = gsapMod;
      const { ScrollTrigger } = stMod;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ duration: 1.15, smoothWheel: true }) as unknown as LenisLike;
      lenis.on("scroll", ScrollTrigger.update);

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      document.documentElement.dataset.smooth = "on";

      teardown = () => {
        gsap.ticker.remove(tick);
        gsap.ticker.lagSmoothing(500, 33);
        lenis.destroy();
        delete document.documentElement.dataset.smooth;
      };
    });

    return () => {
      cancelled = true;
      teardown?.();
    };
  }, []);

  return null;
}

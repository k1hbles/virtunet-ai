"use client";

import { useEffect } from "react";

/**
 * Opt-in smooth scrolling, for comparing the native feel against an
 * interpolated one. Off unless the URL carries `?smooth=1`, and the library
 * is dynamically imported, so a normal visit downloads none of it.
 *
 * Reads the query string directly rather than via useSearchParams, which
 * would opt this page out of static prerendering.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("smooth") !== "1") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let instance: { raf: (time: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      instance = new Lenis({ duration: 1.15, smoothWheel: true });
      const loop = (time: number) => {
        instance?.raf(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
      document.documentElement.dataset.smooth = "on";
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      instance?.destroy();
      delete document.documentElement.dataset.smooth;
    };
  }, []);

  return null;
}

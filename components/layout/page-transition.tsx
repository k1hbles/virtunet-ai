"use client";

import { usePathname } from "next/navigation";

/**
 * The route-change entrance.
 *
 * Navigating with the App Router swaps the page content in place, which by
 * default appears instantly and reads as a hard cut. Keying this wrapper on
 * the pathname forces a remount, which restarts the CSS animation below it —
 * so each page settles in rather than snapping in.
 *
 * The motion itself is one keyframe in globals.css and no JavaScript, so the
 * pages underneath stay server components. `children` is passed through
 * untouched and is never serialised across the boundary.
 *
 * The home page is the exception. Its hero already opens with a 1.6s scale
 * from 1.04 and three staggered rises, and the remount restarts all of that,
 * so a second entrance would run on top of the first — the two `scale(1.04)`
 * transforms compounding into a zoom neither was designed for. The hero keeps
 * its own choreography and this wrapper stays out of the way.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const heroOwnsTheEntrance = pathname === "/";

  return (
    <div key={pathname} className={heroOwnsTheEntrance ? undefined : "page-transition"}>
      {children}
    </div>
  );
}

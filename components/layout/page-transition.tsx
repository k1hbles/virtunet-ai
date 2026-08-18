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
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}

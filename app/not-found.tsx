import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { routes } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";
import { SplitWords } from "@/components/ui/split-words";

export const metadata = { title: "Page not found" };

/** Where someone who mistyped, or followed an old link, most likely wanted. */
const suggestions = [
  { label: "AI services", href: routes.services },
  { label: "Insights", href: routes.insights },
  { label: "About Virtu", href: routes.about },
];

export default function NotFound() {
  return (
    <section className="relative overflow-clip bg-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 60% at 26% 0%, oklch(61% 0.235 260 / 0.13), transparent 70%)",
        }}
      />
      <div className="wrap relative z-10 grid min-h-[70svh] content-center py-32">
        <p className="eyebrow text-accent-ink">Error 404</p>
        <h1 className="mt-6 max-w-[16ch] text-balance text-[clamp(2.6rem,5.6vw,4.6rem)] font-medium leading-[1.0] tracking-[-0.045em] text-ink">
          <SplitWords text="That page isn't here." />
        </h1>
        <p className="reveal mt-7 max-w-xl text-[1.1rem] leading-8 text-ink-muted">
          It may have moved, or the link may be out of date. Everything we publish is reachable from
          the pages below.
        </p>

        <div className="reveal mt-10">
          <PillButton href={routes.home}>Back to the home page</PillButton>
        </div>

        <ul className="reveal-group mt-14 grid max-w-3xl border-t border-line sm:grid-cols-2">
          {suggestions.map((s, i) => (
            <li key={s.label}>
              <Link
                href={s.href}
                className={[
                  "group flex items-baseline justify-between gap-4 border-b border-line py-4 text-[1.02rem] text-ink transition-colors hover:text-accent-ink",
                  i % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6",
                ].join(" ")}
              >
                {s.label}
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="shrink-0 translate-y-0.5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent-ink"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

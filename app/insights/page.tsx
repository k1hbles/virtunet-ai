import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/page/cta-band";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Straight thinking on AI that works — governance, cost discipline, security and sustainable IT for Australian organisations.",
  alternates: { canonical: "/insights" },
};

/** Cycles the three accents so a list of six does not read as one block. */
const RULE = ["bg-accent", "bg-accent-warm", "bg-accent-green"];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Straight thinking on AI that works."
        lead="Written for the people who have to sign off on it — boards, risk teams and the executives holding the budget."
      />

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <div className="reveal-group grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
            {articles.map((post, i) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className={[
                  "group flex min-h-[18rem] flex-col justify-between border-b border-line py-9 transition-colors hover:bg-surface md:px-7",
                  i % 2 === 1 ? "md:border-l" : "",
                  i % 3 === 0 ? "lg:border-l-0" : "lg:border-l",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`h-1 w-14 rounded-full ${RULE[i % 3]}`} />
                  <ArrowUpRight
                    size={17}
                    aria-hidden
                    className="shrink-0 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                    {post.category}
                  </p>
                  <h2 className="mt-4 text-balance text-[1.3rem] font-medium leading-[1.24] tracking-[-0.025em] text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-6 text-ink-muted">{post.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to talk any of this through?" />
    </>
  );
}

import type { Metadata } from "next";
import { insights } from "@/lib/company";
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
            {insights.map((post, i) => (
              <article
                key={post.slug}
                className={[
                  "flex min-h-[18rem] flex-col justify-between border-b border-line py-9 md:px-7",
                  i % 2 === 1 ? "md:border-l" : "",
                  i % 3 === 0 ? "lg:border-l-0" : "lg:border-l",
                ].join(" ")}
              >
                <div className={`h-1 w-14 rounded-full ${RULE[i % 3]}`} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                    {post.category}
                  </p>
                  <h2 className="mt-4 text-balance text-[1.3rem] font-medium leading-[1.24] tracking-[-0.025em] text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-6 text-ink-muted">{post.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mt-10 max-w-2xl text-[0.95rem] leading-6 text-ink-muted">
            Full articles are being migrated. Ask us for any of these directly in the meantime.
          </p>
        </div>
      </section>

      <CtaBand title="Want to talk any of this through?" />
    </>
  );
}

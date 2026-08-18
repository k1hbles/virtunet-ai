import type { Metadata } from "next";
import { outcomes } from "@/lib/company";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/page/cta-band";

export const metadata: Metadata = {
  title: "Client outcomes",
  description:
    "Anonymised engagements: the challenge, the approach, and what actually changed. Identities are withheld by design.",
  alternates: { canonical: "/client-outcomes" },
};

export default function ClientOutcomesPage() {
  return (
    <>
      <PageHero
        eyebrow="Client outcomes"
        title="What the work actually changed."
        lead="Anonymised by agreement. Most of our work is confidential and identities are withheld by design — as conversations progress we can arrange a direct referral."
      />

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <div className="reveal-group grid border-t border-line md:grid-cols-2">
            {outcomes.map((o, i) => (
              <article
                key={o.slug}
                className={[
                  "flex min-h-[17rem] flex-col justify-between border-b border-line py-9 md:px-8",
                  i % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-[3px] border border-line px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-muted">
                    {o.sector}
                  </span>
                  <span className="rounded-[3px] border border-line px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-muted">
                    {o.service}
                  </span>
                </div>
                <div className="mt-8">
                  <h2 className="text-balance text-[1.4rem] font-medium leading-[1.2] tracking-[-0.028em] text-ink">
                    {o.title}
                  </h2>
                  <p className="mt-6 flex items-baseline gap-3">
                    <span className="text-[1.9rem] font-medium leading-none tracking-[-0.03em] text-accent tabular-nums">
                      {o.figure}
                    </span>
                    <span className="text-[0.9rem] leading-5 text-ink-muted">{o.figureNote}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mt-10 max-w-2xl text-[0.95rem] leading-6 text-ink-muted">
            Full write-ups for each engagement are in progress.
          </p>
        </div>
      </section>

      <CtaBand title="Want the detail on one of these?" />
    </>
  );
}

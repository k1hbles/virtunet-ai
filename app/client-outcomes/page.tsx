import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { outcomeList } from "@/lib/outcomes";
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
            {outcomeList.map((o, i) => (
              <Link
                key={o.slug}
                href={`/client-outcomes/${o.slug}`}
                className={[
                  "group flex min-h-[18rem] flex-col justify-between border-b border-line py-9 transition-colors hover:bg-surface md:px-8",
                  i % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-[3px] border border-line px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-muted">
                    {o.sector}
                  </span>
                  <ArrowUpRight
                    size={17}
                    aria-hidden
                    className="shrink-0 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="text-balance text-[1.4rem] font-medium leading-[1.2] tracking-[-0.028em] text-ink">
                    {o.title}
                  </h2>
                  <p className="mt-6 flex items-baseline gap-3">
                    <span className="text-[1.9rem] font-medium leading-none tracking-[-0.03em] text-accent tabular-nums">
                      {o.glance[0].figure}
                    </span>
                    <span className="max-w-[16rem] text-[0.9rem] leading-5 text-ink-muted">
                      {o.glance[0].note}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want the detail on one of these?" />
    </>
  );
}

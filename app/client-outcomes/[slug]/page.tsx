import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { outcomeList, getOutcome } from "@/lib/outcomes";
import { PageHero } from "@/components/page/page-hero";
import { SectionHead } from "@/components/page/section-head";
import { CtaBand } from "@/components/page/cta-band";

export function generateStaticParams() {
  return outcomeList.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const o = getOutcome(slug);
  if (!o) return {};
  return {
    title: o.title,
    description: o.summary,
    alternates: { canonical: `/client-outcomes/${o.slug}` },
  };
}

export default async function OutcomePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const o = getOutcome(slug);
  if (!o) notFound();

  const meta = [
    { label: "Industry", value: o.sector },
    { label: "Engagement", value: o.engagement },
    { label: "Delivery", value: o.delivery },
  ];

  return (
    <>
      <PageHero eyebrow="Client outcome" title={o.title} lead={o.summary} />

      {/* results first — the reason anyone opened the page */}
      <section className="border-b border-line bg-canvas">
        <div className="wrap py-14 md:py-16">
          <div className="reveal-group grid border-t border-line md:grid-cols-3">
            {o.glance.map((g, i) => (
              <div
                key={g.figure}
                className={["border-b border-line py-9 md:px-8", i > 0 ? "md:border-l" : ""].join(" ")}
              >
                <p className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-medium leading-none tracking-[-0.035em] text-accent tabular-nums">
                  {g.figure}
                </p>
                <p className="mt-4 max-w-xs text-[0.95rem] leading-6 text-ink-muted">{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-x-12 gap-y-4 py-10 sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.label} className="reveal">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                {m.label}
              </p>
              <p className="mt-2 text-[0.98rem] leading-6 text-ink">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
          <p className="reveal eyebrow text-ink-muted lg:pt-2">The challenge</p>
          <div className="max-w-3xl">
            {o.challenge.map((para, i) => (
              <p key={i} className={`reveal text-[1.15rem] leading-8 text-ink-muted ${i ? "mt-6" : ""}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead eyebrow="Approach" title="What we did." />
          <ol className="reveal-group mt-12 grid border-t border-line">
            {o.approach.map((a, i) => (
              <li key={a} className="flex items-start gap-6 border-b border-line py-6">
                <span className="mt-1 font-mono text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="max-w-3xl text-[1.02rem] leading-7 text-ink">{a}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead eyebrow="Outcome" title="What changed." />
          <ul className="reveal-group mt-12 grid border-t border-line md:grid-cols-2">
            {o.result.map((r, i) => (
              <li
                key={r}
                className={[
                  "border-b border-line py-7 text-[1.02rem] leading-7 text-ink md:px-8",
                  i % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                {r}
              </li>
            ))}
          </ul>
          <div className="reveal mt-10 flex flex-wrap gap-2">
            {o.tags.map((t) => (
              <span
                key={t}
                className="rounded-[3px] border border-line px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="reveal mt-10 max-w-2xl text-[0.92rem] leading-6 text-ink-muted">
            Anonymised by design. We do not publish client identities without permission, and can
            arrange a direct referral as conversations progress.
          </p>
        </div>
      </section>

      <CtaBand title="Facing something similar?" />
    </>
  );
}

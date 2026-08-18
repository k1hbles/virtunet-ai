import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { industryList, getIndustry } from "@/lib/industries";
import { getService } from "@/lib/services";
import { PageHero } from "@/components/page/page-hero";
import { SectionHead } from "@/components/page/section-head";
import { CtaBand } from "@/components/page/cta-band";

export function generateStaticParams() {
  return industryList.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.summary,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const services = industry.services.map(getService).filter(Boolean);

  return (
    <>
      <PageHero eyebrow="Industries" title={industry.title} lead={industry.summary} />

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
          <p className="reveal eyebrow text-ink-muted lg:pt-2">The context</p>
          <div className="max-w-3xl">
            {industry.intro.map((para, i) => (
              <p key={i} className={`reveal text-[1.15rem] leading-8 text-ink-muted ${i ? "mt-6" : ""}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead eyebrow="Where it earns its place" title={`How AI is used in ${industry.name.toLowerCase()}.`} />
          <div className="reveal-group mt-12 grid border-t border-line md:grid-cols-2">
            {industry.useCases.map((u, i) => (
              <div
                key={u.name}
                className={[
                  "border-b border-line py-8 md:px-8",
                  i % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                <h3 className="text-[1.25rem] font-medium tracking-[-0.02em] text-ink">{u.name}</h3>
                <p className="mt-3 max-w-md text-[0.98rem] leading-6 text-ink-muted">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead
            eyebrow="Constraints"
            title="What shapes every decision here."
            lead="The capability rarely changes between sectors. These do."
          />
          <div className="reveal-group mt-12 grid border-t border-line md:grid-cols-3">
            {industry.realities.map((r, i) => (
              <div
                key={r.name}
                className={[
                  "border-b border-line py-8 md:px-7",
                  i > 0 ? "md:border-l" : "",
                ].join(" ")}
              >
                <h3 className="text-[1.1rem] font-medium tracking-[-0.02em] text-ink">{r.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-6 text-ink-muted">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {services.length > 0 && (
        <section className="border-b border-line bg-canvas">
          <div className="wrap py-16 md:py-20">
            <p className="reveal eyebrow text-ink-muted">Services that fit</p>
            <div className="reveal-group mt-8 grid border-t border-line md:grid-cols-3">
              {services.map((s, i) => (
                <Link
                  key={s!.slug}
                  href={`/services/${s!.slug}`}
                  className={[
                    "group flex min-h-[12rem] flex-col justify-between border-b border-line py-8 transition-colors hover:bg-surface md:px-7",
                    i > 0 ? "md:border-l" : "",
                  ].join(" ")}
                >
                  <ArrowUpRight
                    size={17}
                    aria-hidden
                    className="self-end text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                  <div>
                    <h3 className="text-[1.2rem] font-medium tracking-[-0.025em] text-ink">{s!.title}</h3>
                    <p className="mt-3 text-[0.92rem] leading-6 text-ink-muted">{s!.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`Talk to us about ${industry.name.toLowerCase()}.`} />
    </>
  );
}

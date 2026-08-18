import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { services, getService, getStage, stages, servicesByStage } from "@/lib/services";
import { PageHero } from "@/components/page/page-hero";
import { SectionHead } from "@/components/page/section-head";
import { CtaBand } from "@/components/page/cta-band";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const stage = getStage(service.stage);
  /* the rest of this stage, so a reader can move sideways without going back */
  const siblings = servicesByStage(service.stage).filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.kicker}
        title={service.title}
        lead={service.summary}
        meta={
          stage && (
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 text-sm text-ink-muted transition-colors hover:border-ink-muted hover:text-ink"
            >
              <span className="font-mono tabular-nums text-ink">
                {String(stage.index).padStart(2, "0")}
              </span>
              <span className="opacity-40">/</span>
              <span>{String(stages.length).padStart(2, "0")}</span>
              <span className="ml-1">{stage.name}</span>
              <ArrowUpRight size={14} aria-hidden className="opacity-50 transition group-hover:opacity-100" />
            </Link>
          )
        }
      />

      {/* the problem */}
      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
          <p className="reveal eyebrow text-ink-muted lg:pt-2">The problem</p>
          <div className="max-w-3xl">
            {service.intro.map((para, i) => (
              <p
                key={i}
                className={`reveal text-[1.15rem] leading-8 text-ink-muted ${i ? "mt-6" : ""}`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* what you are left holding */}
      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead eyebrow="Outcomes" title="What you walk away with." />
          <ul className="reveal-group mt-12 grid border-t border-line md:grid-cols-2">
            {service.outcomes.map((o, i) => (
              <li
                key={o}
                className={[
                  "flex items-start gap-4 border-b border-line py-7 md:px-8",
                  i % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                <Check size={17} aria-hidden className="mt-1 shrink-0 text-accent" />
                <span className="text-[1.02rem] leading-7 text-ink">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* the engagement */}
      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead eyebrow="How it runs" title="Four moves, in order." />
          <ol className="reveal-group mt-12 grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <li
                key={step.name}
                className={[
                  "border-b border-line py-8 md:px-7",
                  i % 2 === 1 ? "md:border-l" : "",
                  i % 4 === 0 ? "lg:border-l-0" : "lg:border-l",
                ].join(" ")}
              >
                <span className="font-mono text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.25rem] font-medium tracking-[-0.02em] text-ink">
                  {step.name}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-6 text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* artefacts, where there are any */}
      {service.deliverables && (
        <section className="border-b border-line bg-canvas">
          <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
            <p className="reveal eyebrow text-ink-muted lg:pt-2">You receive</p>
            <ul className="reveal-group grid gap-x-12 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="border-b border-line py-4 text-[1rem] leading-7 text-ink"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* sideways, not back */}
      {siblings.length > 0 && stage && (
        <section className="border-b border-line bg-canvas">
          <div className="wrap py-16 md:py-20">
            <p className="reveal eyebrow text-ink-muted">Also in {stage.name}</p>
            <div className="reveal-group mt-8 grid border-t border-line md:grid-cols-2">
              {siblings.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={[
                    "group flex items-baseline justify-between gap-6 border-b border-line py-6 transition-colors hover:text-accent md:px-7",
                    i % 2 === 1 ? "md:border-l" : "",
                  ].join(" ")}
                >
                  <span className="text-[1.1rem] text-ink transition-colors group-hover:text-accent">
                    {s.title}
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="shrink-0 translate-y-1 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Ready to start here?" />
    </>
  );
}

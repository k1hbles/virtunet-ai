import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/lib/company";
import { PageHero } from "@/components/page/page-hero";
import { SectionHead } from "@/components/page/section-head";
import { CtaBand } from "@/components/page/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "An Australian technology partner since 2008, having helped more than 5,000 organisations. The AI practice stands on that record rather than replacing it.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Eighteen years of delivery, not a pivot to AI."
        lead={company.positioning}
      />

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
          <p className="reveal eyebrow text-ink-muted lg:pt-2">The record</p>
          <div className="max-w-3xl">
            {company.story.map((para, i) => (
              <p key={i} className={`reveal text-[1.15rem] leading-8 text-ink-muted ${i ? "mt-6" : ""}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-10 py-16 md:py-20 md:grid-cols-2 md:gap-16">
          <div className="reveal">
            <p className="eyebrow text-ink-muted">Vision</p>
            <p className="mt-5 text-[1.3rem] leading-9 text-ink">{company.vision}</p>
          </div>
          <div className="reveal">
            <p className="eyebrow text-ink-muted">Purpose</p>
            <p className="mt-5 text-[1.3rem] leading-9 text-ink">{company.purpose}</p>
          </div>
        </div>
      </section>

      {/* A real quotation from a named person, reproduced exactly. */}
      <section className="border-b border-line bg-surface">
        <div className="wrap py-16 md:py-24">
          <figure className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-12">
            <Image
              src={company.leader.photo}
              alt={`${company.leader.name}, ${company.leader.role} of Virtu`}
              width={112}
              height={112}
              className="size-24 rounded-full object-cover md:size-28"
            />
            <div>
              <blockquote className="max-w-3xl text-balance text-[clamp(1.4rem,2.8vw,2.1rem)] font-medium leading-[1.28] tracking-[-0.03em] text-ink">
                &ldquo;{company.leader.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 text-[0.98rem] text-ink-muted">
                <span className="text-ink">{company.leader.name}</span>
                <span className="mx-2 opacity-40">·</span>
                {company.leader.role}
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
          <p className="reveal eyebrow text-ink-muted lg:pt-2">The promise</p>
          <div className="max-w-3xl">
            {company.track.map((t, i) => (
              <p key={i} className={`reveal text-[1.15rem] leading-8 text-ink-muted ${i ? "mt-6" : ""}`}>
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead
            eyebrow="Why organisations choose us"
            title="Six things that tend to decide it."
          />
          <div className="reveal-group mt-12 grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
            {company.differentiators.map((d, i) => (
              <div
                key={d.title}
                className={[
                  "border-b border-line py-8 md:px-7",
                  i % 2 === 1 ? "md:border-l" : "",
                  i % 3 === 0 ? "lg:border-l-0" : "lg:border-l",
                ].join(" ")}
              >
                <h3 className="text-[1.2rem] font-medium tracking-[-0.025em] text-ink">{d.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-6 text-ink-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead
            eyebrow="What to expect"
            title="What working together actually involves."
          />
          <ul className="reveal-group mt-12 grid border-t border-line md:grid-cols-2">
            {company.expect.map((e, i) => (
              <li
                key={e}
                className={[
                  "border-b border-line py-6 text-[1.02rem] leading-7 text-ink md:px-8",
                  i % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead
            eyebrow="How we work"
            title="Four things we will not trade away."
          />
          <div className="reveal-group mt-12 grid border-t border-line md:grid-cols-2">
            {company.principles.map((p, i) => (
              <div
                key={p.title}
                className={[
                  "border-b border-line py-9 md:px-8",
                  i % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                <h3 className="text-[1.35rem] font-medium tracking-[-0.025em] text-ink">{p.title}</h3>
                <p className="mt-4 max-w-md text-[1rem] leading-7 text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
          <div className="lg:pt-2">
            <p className="reveal eyebrow text-ink-muted">Recognition</p>
            <p className="reveal mt-4 max-w-xs text-[0.95rem] leading-6 text-ink-muted">
              Third-party, and checkable.
            </p>
          </div>
          <ul className="reveal-group grid gap-x-12 sm:grid-cols-2">
            {company.recognition.map((r) => (
              <li key={r} className="border-b border-line py-4 text-[1rem] leading-7 text-ink">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead
            eyebrow="Responsible AI"
            title="Ethics is a design choice, not an afterthought."
            lead="Aligned to Australia's AI Ethics Principles, and informed by ISO/IEC 42001 and the NIST AI Risk Management Framework — tailored to your size, sector and risk appetite rather than bolted on."
          />
          <ul className="reveal-group mt-12 grid border-t border-line md:grid-cols-2">
            {company.responsibleAi.map((r, i) => (
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
          <Link
            href="/responsible-ai"
            className="group reveal mt-10 inline-flex items-center gap-2 text-[1rem] font-medium text-ink transition-colors hover:text-accent"
          >
            The full Responsible AI position
            <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

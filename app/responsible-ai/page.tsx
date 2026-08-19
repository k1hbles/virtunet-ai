import type { Metadata } from "next";
import { company } from "@/lib/company";
import { PageHero } from "@/components/page/page-hero";
import { SectionHead } from "@/components/page/section-head";
import { CtaBand } from "@/components/page/cta-band";
import { TextLink } from "@/components/ui/pill-button";

export const metadata: Metadata = {
  title: "Responsible AI",
  description:
    "Aligned to Australia's AI Ethics Principles and informed by ISO/IEC 42001 and the NIST AI Risk Management Framework, applied to the decisions your organisation actually makes.",
  alternates: { canonical: "/responsible-ai" },
};

/**
 * The eight principles are Australia's AI Ethics Principles. The framework is
 * public and named; what each one means in practice is written for this site.
 */
const principles = [
  {
    name: "Wellbeing and sustainability",
    body: "AI should benefit people, society and the environment. We weigh the human and sustainability impact of a solution, not only the efficiency gain.",
  },
  {
    name: "Human-centred values",
    body: "AI supports your people; it does not replace their judgement. We design for meaningful human oversight throughout.",
  },
  {
    name: "Fairness",
    body: "We identify and reduce bias in data and models, so AI-assisted decisions do not quietly disadvantage individuals or groups.",
  },
  {
    name: "Privacy and security",
    body: "As a cybersecurity-led firm we protect data and uphold privacy obligations, guarding against leakage, misuse and shadow AI by design.",
  },
  {
    name: "Reliability and safety",
    body: "Systems should do what they are meant to, safely. We test, monitor and put guardrails around models so they hold up outside a demo.",
  },
  {
    name: "Transparency and explainability",
    body: "People affected by a decision should be able to learn that AI was involved, and on what basis the decision was reached.",
  },
  {
    name: "Contestability",
    body: "Where an outcome materially affects someone, there is a defined path to challenge it and reach a person with the authority to change it.",
  },
  {
    name: "Accountability",
    body: "A named person is answerable for each system. AI does not absorb responsibility. It concentrates it.",
  },
];

export default function ResponsibleAiPage() {
  return (
    <>
      <PageHero
        eyebrow="Responsible AI"
        title="Ethics is a design choice, not an afterthought."
        lead="AI creates real value, but only when it is used safely, fairly and transparently. We help organisations adopt it in line with recognised ethical principles, so innovation does not come at the cost of trust."
      />

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
          <p className="reveal eyebrow text-ink-muted lg:pt-2">The position</p>
          <div className="max-w-3xl">
            <p className="reveal text-[1.15rem] leading-8 text-ink-muted">
              Shadow AI, data leakage, biased outputs and unclear accountability are board-level
              risks now, not hypotheticals. As a cybersecurity-led firm we have always held that
              technology should be adopted responsibly; AI raises the stakes rather than changing
              the principle.
            </p>
            <p className="reveal mt-6 text-[1.15rem] leading-8 text-ink-muted">
              Our approach aligns to Australia&apos;s AI Ethics Principles and is informed by
              ISO/IEC 42001 and the NIST AI Risk Management Framework. We tailor those to your size,
              sector and risk appetite rather than bolting a generic framework onto an organisation
              it was never written for.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead
            eyebrow="The framework"
            title="Eight principles, applied to real decisions."
          />
          <div className="reveal-group mt-12 grid border-t border-line md:grid-cols-2">
            {principles.map((p, i) => (
              <div
                key={p.name}
                className={[
                  "border-b border-line py-8 md:px-8",
                  i % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                <span className="font-mono text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-[1.25rem] font-medium tracking-[-0.025em] text-ink">
                  {p.name}
                </h2>
                <p className="mt-3 max-w-md text-[0.98rem] leading-6 text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <SectionHead eyebrow="In practice" title="What this actually looks like." />
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
          {/*
            This page states the position; the service is how it gets applied.
            Without this the page is a dead end — a reader who agrees with it
            has nowhere to go except the contact form.
          */}
          <div className="reveal mt-12">
            <TextLink href="/services/ai-ethics">
              How this is delivered: Responsible AI &amp; Ethics
            </TextLink>
          </div>
        </div>
      </section>

      <CtaBand title="Adopt AI with a clear conscience." />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page/page-hero";
import { ReadinessCheck } from "@/components/tools/readiness-check";

export const metadata: Metadata = {
  title: "AI Readiness Check",
  description:
    "Ten questions across five dimensions, and an instant read on how ready your organisation actually is, with the gaps worth closing first. Free, about two minutes.",
  alternates: { canonical: "/tools/ai-readiness-check" },
};

export default function ReadinessCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="See where you actually stand."
        lead="Ten questions you can answer from what you already know, not from how you feel about it. You get the score and the breakdown immediately, with no email required and nothing sent anywhere."
      />

      <section className="border-b border-line bg-canvas">
        <div className="wrap max-w-4xl py-16 md:py-24">
          <ReadinessCheck />
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-8 py-14 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <h2 className="text-[1.4rem] font-medium tracking-[-0.03em] text-ink">
              Need the evidence-based version?
            </h2>
            <p className="mt-3 max-w-xl text-[1rem] leading-7 text-ink-muted">
              This is a self-assessment, and self-assessments are generous. The full readiness
              assessment scores the same dimensions against interviews, platform review and your
              actual data, then costs the remediation.
            </p>
          </div>
          <Link
            href="/services/ai-readiness-assessment"
            className="group inline-flex items-center gap-2 justify-self-start text-[1rem] font-medium text-ink transition-colors hover:text-accent md:justify-self-end"
          >
            AI Readiness Assessment
            <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}

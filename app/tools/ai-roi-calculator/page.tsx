import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page/page-hero";
import { RoiCalculator } from "@/components/tools/roi-calculator";

export const metadata: Metadata = {
  title: "AI ROI Calculator",
  description:
    "Estimate the hours AI could hand back to your teams each year, and what that capacity is worth — with every assumption shown, so you can argue with the arithmetic.",
  alternates: { canonical: "/tools/ai-roi-calculator" },
};

export default function RoiCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="What would the time be worth?"
        lead="An estimate of the hours AI could return to your teams each year. Every assumption is shown, because a number produced by hidden assumptions is worse than no number at all."
      />

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <RoiCalculator />
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-8 py-14 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <h2 className="text-[1.4rem] font-medium tracking-[-0.03em] text-ink">
              Want a real business case?
            </h2>
            <p className="mt-3 max-w-xl text-[1rem] leading-7 text-ink-muted">
              This is a sketch on the back of an envelope. A strategy day produces a costed business
              case against your actual workflows, sequenced and ready to take to a board.
            </p>
          </div>
          <Link
            href="/services/ai-strategy-day"
            className="group inline-flex items-center gap-2 justify-self-start text-[1rem] font-medium text-ink transition-colors hover:text-accent md:justify-self-end"
          >
            AI Strategy Day
            <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stages, servicesByStage } from "@/lib/services";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/page/cta-band";

export const metadata: Metadata = {
  title: "AI services",
  description:
    "Eleven services across one delivery model: orient, govern, build, adopt and run. Start at any stage, stop after any stage.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="AI services"
        title="One journey. Start where you are."
        lead="Every service is a stage on the same path, not an item in a catalogue. Most organisations begin at orient, and governance runs alongside everything that follows."
      />

      {stages.map((stage) => {
        const list = servicesByStage(stage.slug);
        return (
          <section key={stage.slug} className="border-b border-line bg-canvas">
            <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="reveal font-mono text-sm tabular-nums text-ink-muted">
                  <span className="text-ink">{String(stage.index).padStart(2, "0")}</span>
                  <span className="mx-1.5 opacity-40">/</span>
                  {String(stages.length).padStart(2, "0")}
                </p>
                <h2 className="drift mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-[1.06] tracking-[-0.04em] text-ink">
                  {stage.name}
                </h2>
                <p className="reveal mt-4 max-w-sm text-[1rem] leading-7 text-ink-muted">
                  {stage.summary}
                </p>
              </div>

              <div className="reveal-group grid border-t border-line sm:grid-cols-2">
                {list.map((s, i) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className={[
                      "group flex min-h-[15rem] flex-col justify-between border-b border-line py-8 transition-colors hover:bg-surface sm:px-7",
                      i % 2 === 1 ? "sm:border-l" : "",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                        {s.kicker}
                      </span>
                      <ArrowUpRight
                        size={17}
                        aria-hidden
                        className="text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      />
                    </div>
                    <div>
                      <h3 className="text-balance text-[1.45rem] font-medium leading-[1.16] tracking-[-0.03em] text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-[0.95rem] leading-6 text-ink-muted">
                        {s.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industryList } from "@/lib/industries";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/page/cta-band";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI adapted to how your sector is actually regulated: corporate, government, education, healthcare, enterprise and not-for-profit.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built around how your sector is actually regulated."
        lead="The technology rarely changes. What changes is the data you hold, the obligations you carry, and how much room you have to be wrong."
      />

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-16 md:py-24">
          <div className="reveal-group grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
            {industryList.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className={[
                  "group flex min-h-[14rem] flex-col justify-between border-b border-line py-8 transition-colors hover:bg-surface md:px-7",
                  i % 2 === 1 ? "md:border-l" : "",
                  i % 3 === 0 ? "lg:border-l-0" : "lg:border-l",
                ].join(" ")}
              >
                <ArrowUpRight
                  size={17}
                  aria-hidden
                  className="self-end text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
                <div>
                  <h2 className="text-[1.5rem] font-medium tracking-[-0.03em] text-ink">{ind.name}</h2>
                  <p className="mt-3 max-w-sm text-[0.95rem] leading-6 text-ink-muted">{ind.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Which of these is you?" />
    </>
  );
}

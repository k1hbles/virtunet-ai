import type { Metadata } from "next";
import { industries } from "@/lib/company";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/page/cta-band";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI adapted to how your sector is actually regulated — corporate, government, education, healthcare, enterprise and not-for-profit.",
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
            {industries.map((ind, i) => (
              <div
                key={ind.slug}
                className={[
                  "flex min-h-[13rem] flex-col justify-between border-b border-line py-8 md:px-7",
                  i % 2 === 1 ? "md:border-l" : "",
                  i % 3 === 0 ? "lg:border-l-0" : "lg:border-l",
                ].join(" ")}
              >
                <h2 className="text-[1.5rem] font-medium tracking-[-0.03em] text-ink">{ind.name}</h2>
                <p className="mt-4 max-w-sm text-[0.98rem] leading-6 text-ink-muted">{ind.body}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 max-w-2xl text-[0.95rem] leading-6 text-ink-muted">
            Sector detail pages are in progress. In the meantime, tell us which one you are in and we
            will send the relevant material directly.
          </p>
        </div>
      </section>

      <CtaBand title="Which of these is you?" />
    </>
  );
}

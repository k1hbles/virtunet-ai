import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page/page-hero";
import { SectionHead } from "@/components/page/section-head";
import { CtaBand } from "@/components/page/cta-band";
import {
  partnerCategories,
  partnersByCategory,
  partners,
  strategicPartners,
} from "@/lib/partnerships";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "More than a hundred vendor partnerships across computing, data centre, networking, security, cloud and education — and the sustainability commitments behind the strategic ones.",
  alternates: { canonical: "/partnerships" },
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Vendor neutral, and deep where it counts."
        lead="Advice is only independent if it is not tied to one vendor's roadmap. Virtu holds accreditations across more than a hundred vendors, which is what makes it possible to recommend what fits your goals rather than what is convenient to sell."
        meta={
          <dl className="flex flex-wrap gap-x-14 gap-y-6">
            {[
              [String(partners.length), "vendor partnerships"],
              [String(partnerCategories.length), "solution areas"],
              [String(strategicPartners.length), "strategic partnerships"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="text-[2rem] font-medium tracking-[-0.03em] text-ink">{n}</dt>
                <dd className="mt-1 text-sm text-ink-muted">{label}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* ---- strategic partnerships, with the tier and the commitment ---- */}
      <section className="border-b border-line bg-canvas py-24 md:py-32">
        <div className="wrap">
          <SectionHead
            eyebrow="Strategic partnerships"
            title="The partnerships we are accredited in."
            lead="Each of these carries a named tier and a published sustainability commitment. Both are the vendor's own words, kept as stated."
          />
          <ul className="reveal-group mt-16 grid gap-px overflow-clip rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {strategicPartners.map((p) => (
              <li key={p.slug} className="reveal flex flex-col gap-5 bg-canvas p-7">
                <div className="flex h-14 w-fit items-center justify-center rounded-lg bg-white px-5 py-3">
                  <Image
                    src={`/partners/${p.slug}.webp`}
                    alt={`${p.name} logo`}
                    width={240}
                    height={120}
                    loading="lazy"
                    className="h-auto max-h-9 w-auto max-w-[150px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[1.05rem] font-medium text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-accent">{p.tier}</p>
                </div>
                <p className="text-[0.95rem] leading-6 text-ink-muted">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- the full roster ---- */}
      <section className="bg-canvas py-24 md:py-32">
        <div className="wrap">
          <SectionHead
            eyebrow="The full roster"
            title="Every vendor, by what it is for."
            lead="Grouped the way the work is scoped rather than alphabetically, so the list answers a question about a project instead of testing your memory of a brand name."
          />

          <div className="mt-16 flex flex-col gap-20">
            {partnerCategories.map((cat) => {
              const list = partnersByCategory(cat.slug);
              return (
                <div key={cat.slug} id={cat.slug} className="scroll-mt-28">
                  <div className="flex flex-col gap-3 border-b border-line pb-6 md:flex-row md:items-baseline md:justify-between md:gap-10">
                    <h3 className="reveal text-[1.6rem] font-medium tracking-[-0.03em] text-ink">
                      {cat.name}
                    </h3>
                    <p className="reveal max-w-xl text-[0.95rem] leading-6 text-ink-muted md:text-right">
                      {cat.blurb}
                    </p>
                  </div>
                  <ul className="reveal-group mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {list.map((p) => (
                      <li
                        key={p.slug}
                        className="reveal flex h-24 items-center justify-center rounded-xl bg-white px-5 py-4"
                        title={p.name}
                      >
                        <Image
                          src={`/partners/${p.slug}.webp`}
                          alt={`${p.name} logo`}
                          width={240}
                          height={120}
                          loading="lazy"
                          className="h-auto max-h-12 w-auto max-w-full object-contain"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which of these fits?" />
    </>
  );
}

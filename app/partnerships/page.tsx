import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page/page-hero";
import { SectionHead } from "@/components/page/section-head";
import { CtaBand } from "@/components/page/cta-band";
import {
  partnerCategories,
  partnersByCategory,
  partners,
  tieredPartners,
} from "@/lib/partnerships";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "The platforms, silicon, data infrastructure and security tooling Virtu builds AI on, and the accreditations behind them.",
  alternates: { canonical: "/partnerships" },
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Vendor neutral, and accredited where it counts."
        lead="Advice is only independent if it is not tied to one vendor's roadmap. These are the platforms models run on, the silicon inference executes on, and the tooling that has to hold once an agent can act."
        meta={
          <dl className="flex flex-wrap gap-x-14 gap-y-6">
            {[
              [String(partners.length), "AI-relevant partnerships"],
              [String(partnerCategories.length), "layers of the stack"],
              [String(tieredPartners.length), "with a stated tier"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="text-[2rem] font-medium tracking-[-0.03em] text-ink">{n}</dt>
                <dd className="mt-1 text-sm text-ink-muted">{label}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="bg-canvas py-24 md:py-32">
        <div className="wrap">
          <SectionHead
            eyebrow="By layer"
            title="Grouped by what they do, not by who sells them."
            lead="virtu.net publishes partnerships with more than a hundred vendors. These are the ones an AI programme actually touches. The rest are that business, not this one."
          />

          <div className="mt-16 flex flex-col gap-20">
            {partnerCategories.map((cat) => (
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
                  {partnersByCategory(cat.slug).map((p) => (
                    <li key={p.slug} className="reveal">
                      <div
                        className="flex h-24 items-center justify-center rounded-xl bg-white px-5 py-4"
                        title={p.tier ? `${p.name} — ${p.tier}` : p.name}
                      >
                        <Image
                          src={`/partners/${p.slug}.webp`}
                          alt={`${p.name} logo`}
                          width={240}
                          height={120}
                          loading="lazy"
                          className="h-auto max-h-12 w-auto max-w-full object-contain"
                        />
                      </div>
                      {/* the tier is the substantive bit, so it is shown rather
                          than hidden in a title attribute nobody hovers */}
                      {p.tier && (
                        <p className="mt-2.5 text-center text-xs text-ink-muted">{p.tier}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/*
            Said out loud rather than quietly omitted. A reader who has just
            been told this practice deploys Claude Code and Codex will look for
            those names here, and not finding them without explanation is worse
            than the absence itself.
          */}
          <p className="reveal mt-20 max-w-3xl border-t border-line pt-8 text-[0.95rem] leading-7 text-ink-muted">
            This list covers the vendors Virtu holds accreditations with. Where we deploy a model or
            a tool without a formal partnership behind it, which is most of the frontier, we say
            so, and we recommend on fit rather than on the relationship.
          </p>
        </div>
      </section>

      <CtaBand title="Not sure which of these fits?" />
    </>
  );
}

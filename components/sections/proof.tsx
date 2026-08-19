import { company } from "@/lib/company";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";

/**
 * The credibility band, sitting where the partner strip used to.
 *
 * Removing the strip left nothing between the hero and the services sequence,
 * and this is the one claim a new AI practice usually cannot make: the
 * delivery record predates the category. Every figure here is verified and
 * comes from lib/company.ts — nothing is estimated, and the recognitions are
 * reproduced as published rather than summarised.
 */
export function Proof() {
  /*
   * The third figure is deliberately not "18 years" — that is the same fact
   * as 2008 stated twice, and a panel of three should carry three claims.
   * The response time is the more distinctive one, and it is Virtu's own
   * published commitment rather than a category platitude.
   */
  const figures = [
    { value: String(company.since), label: "Australian technology delivery since" },
    { value: company.organisationsHelped, label: "organisations, schools and agencies helped" },
    { value: "10 min", label: "response time, with urgent work hand-delivered out of hours" },
  ];

  return (
    <section className="border-y border-line bg-canvas py-20 md:py-28">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow text-ink-muted">Why Virtu</p>
            <h2 className="drift mt-6 text-balance text-[clamp(1.9rem,3.2vw,2.9rem)] font-medium leading-[1.06] tracking-[-0.035em] text-ink">
              <SplitWords text="An AI practice standing on eighteen years of delivery." />
            </h2>
            <p className="reveal mt-7 max-w-md text-lg leading-8 text-ink-muted">
              Most firms in this category started with AI. Virtu started with the organisations that
              cannot afford for technology to fail: schools, agencies and enterprises. The same
              habits came with it. Security first, vendor neutral, and measured against outcomes
              rather than activity.
            </p>
            <div className="reveal mt-8">
              <TextLink href="/about">The full story</TextLink>
            </div>
          </div>

          <div className="reveal-group">
            <dl className="grid gap-px overflow-clip rounded-2xl border border-line bg-line sm:grid-cols-3">
              {figures.map((f) => (
                <div key={f.label} className="reveal bg-canvas p-7">
                  <dt className="text-[2.4rem] font-medium leading-none tracking-[-0.04em] text-ink">
                    {f.value}
                  </dt>
                  <dd className="mt-3 text-sm leading-6 text-ink-muted">{f.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="reveal-group mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {company.recognition.map((r) => (
                <li key={r} className="reveal text-sm leading-6 text-ink-muted">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

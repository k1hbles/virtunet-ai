import { company } from "@/lib/company";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";

/**
 * The proof section.
 *
 * It used to be credentials: a founding year, a client count and a row of
 * awards. All true, and all things any established firm can say. What it
 * could not say was that Virtu had done the thing it sells.
 *
 * It can now. Virtu rebuilt its own operations AI-native, and that is better
 * evidence than a case study: it is first-hand, it is recent, and it carries
 * no confidentiality problem because the client is Virtu. The credentials
 * stay, demoted to a single line, because eighteen years of delivery is the
 * reason to believe the rest.
 *
 * The section closes outward rather than on us. The story is only worth
 * telling because it is the reader's problem too, so it ends on the gap every
 * established business is now facing, and on who this is for.
 *
 * The pull quote is the one about the distance between an idea and a working
 * product collapsing, rather than the one about treating Virtu as a client.
 * It carries the same evidence and reads as the journey it was.
 */
export function Proof() {
  const { firstClient } = company;

  return (
    <section className="border-t border-line bg-canvas py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <p className="eyebrow text-accent">Proof</p>
            <h2 className="drift section-title mt-6 text-balance">
              <SplitWords text={firstClient.claim} />
            </h2>
            <blockquote className="reveal mt-8 max-w-lg border-l border-line pl-6 text-[1.08rem] leading-8 text-ink">
              &ldquo;{firstClient.directed}&rdquo;
              <footer className="mt-4 text-sm not-italic text-ink-muted">
                {company.leader.name}, {company.leader.role}
              </footer>
            </blockquote>
          </div>

          <div className="reveal-group flex flex-col gap-10">
            <dl className="grid gap-px overflow-clip rounded-2xl border border-line bg-line sm:grid-cols-3">
              {firstClient.facts.map((f) => (
                <div key={f.label} className="reveal bg-canvas p-6">
                  <dt className="text-[1.9rem] font-medium leading-none tracking-[-0.035em] text-ink">
                    {f.value}
                  </dt>
                  <dd className="mt-3 text-sm leading-6 text-ink-muted">{f.label}</dd>
                </div>
              ))}
            </dl>

            <div className="reveal">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                What it runs
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {firstClient.built.map((b) => (
                  <li
                    key={b}
                    className="relative pl-6 text-[1.02rem] leading-7 text-ink before:absolute before:left-0 before:top-[0.85em] before:h-px before:w-3 before:bg-ink-muted"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-ink-muted">
                {firstClient.outcome}
              </p>
              <div className="mt-7">
                <TextLink href="/about">How we did it</TextLink>
              </div>
            </div>
          </div>
        </div>

        {/* the turn outward: the story is only worth telling because it is
            the reader's problem too */}
        <p className="reveal mt-16 max-w-4xl border-t border-line pt-10 text-[1.3rem] leading-9 text-ink">
          {firstClient.forWhom}
        </p>

        {/* the older credentials, kept but demoted: they are the reason to
            believe the story above, not the story itself */}
        <p className="reveal mt-12 border-t border-line pt-7 text-sm leading-7 text-ink-muted">
          Australian technology delivery since {company.since}. {company.organisationsHelped}{" "}
          organisations, schools and agencies. {company.recognition[0]}.
        </p>
      </div>
    </section>
  );
}

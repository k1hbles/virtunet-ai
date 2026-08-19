import { crawlWalkRun } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";

/**
 * The three stages, each shown with what it needs and what breaks.
 *
 * The pairing is the argument. Naming the failure mode alongside the stage is
 * what separates this from a generic maturity ladder, and it is the part a
 * buyer who has already had a stalled pilot will recognise.
 */
export function CrawlWalkRun() {
  return (
    <section className="border-y border-line bg-canvas py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">{crawlWalkRun.eyebrow}</p>
          <h2 className="drift section-title mt-6 text-balance">
            <SplitWords text={crawlWalkRun.title} />
          </h2>
          <p className="reveal mt-7 max-w-2xl text-lg leading-8 text-ink-muted">
            {crawlWalkRun.intro}
          </p>
        </div>

        <ol className="reveal-group mt-16 grid gap-px overflow-clip rounded-2xl border border-line bg-line md:grid-cols-3">
          {crawlWalkRun.stages.map((s, i) => (
            <li key={s.name} className="reveal flex flex-col gap-7 bg-canvas p-8 md:p-9">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.7rem] font-medium tracking-[-0.03em] text-ink">{s.name}</h3>
              </div>

              <p className="text-[1.02rem] leading-7 text-ink">{s.shape}</p>

              <div className="mt-auto flex flex-col gap-5 border-t border-line pt-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                    What it needs
                  </p>
                  <p className="mt-2.5 text-[0.97rem] leading-6 text-ink-muted">{s.needs}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                    What breaks
                  </p>
                  <p className="mt-2.5 text-[0.97rem] leading-6 text-ink-muted">{s.breaks}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-[1.02rem] leading-7 text-ink-muted">{crawlWalkRun.footnote}</p>
          <TextLink href={crawlWalkRun.cta.href}>{crawlWalkRun.cta.label}</TextLink>
        </div>
      </div>
    </section>
  );
}

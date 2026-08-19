import { crawlWalkRun } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";
import { ReachDiagram } from "@/components/sections/reach-diagram";

/**
 * Three stages, as hairline-divided columns rather than cards.
 *
 * The card treatment was the fourth box pattern on this page, and boxes make
 * three sequential things look like three parallel products. Dividing the
 * columns with a single rule does the same separating job with none of the
 * weight, which is the device the reference interfaces use for exactly this.
 *
 * Each column reads: a monospace stage marker, the diagram, the name, the
 * result, and what unlocks it. The diagram sits above the name so the three
 * of them line up across the row and can be compared at a glance, which is
 * the whole argument of the section.
 */
export function CrawlWalkRun() {
  return (
    <section className="border-y border-line bg-canvas py-20 md:py-28">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-accent">{crawlWalkRun.eyebrow}</p>
            <h2 className="drift section-title mt-6 text-balance">
              <SplitWords text={crawlWalkRun.title} />
            </h2>
          </div>
          <p className="reveal max-w-xl text-[1.05rem] leading-7 text-ink-muted lg:pb-2">
            {crawlWalkRun.intro}
          </p>
        </div>

        <ol className="reveal-group mt-16 grid border-t border-line md:grid-cols-3">
          {crawlWalkRun.stages.map((stage, i) => (
            <li
              key={stage.name}
              className={[
                "reveal flex flex-col gap-7 py-10 md:py-12",
                i === 0 ? "md:pr-10" : "md:px-10",
                i > 0 ? "border-t border-line md:border-l md:border-t-0" : "",
                i === 2 ? "md:pr-0" : "",
              ].join(" ")}
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">
                Stage {String(i + 1).padStart(2, "0")}
              </p>

              <ReachDiagram reach={stage.reach} />

              <div>
                <h3 className="text-[1.5rem] font-medium tracking-[-0.03em] text-ink">
                  {stage.name}
                </h3>
                <p className="mt-4 text-[1rem] leading-7 text-ink-muted">{stage.line}</p>
              </div>

              <p className="mt-auto border-t border-line pt-5 text-[0.9rem] leading-6 text-ink-muted">
                <span className="text-ink-muted/60">Unlocked by </span>
                {stage.unlocks}
              </p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12 flex flex-col gap-5 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-[0.97rem] leading-7 text-ink-muted">
            {crawlWalkRun.footnote}
          </p>
          <TextLink href={crawlWalkRun.cta.href}>{crawlWalkRun.cta.label}</TextLink>
        </div>
      </div>
    </section>
  );
}

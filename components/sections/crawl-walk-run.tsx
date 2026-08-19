import { Fragment } from "react";
import { crawlWalkRun } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";

/**
 * The three stages, each shown with what it needs and what breaks.
 *
 * The schematic above each stage is the point of the section. Crawl, walk and
 * run are otherwise three paragraphs that all sound reasonable; drawing what
 * the AI is connected to at each one makes the escalation visible, and makes
 * the risk that comes with it obvious without having to assert it.
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
          {crawlWalkRun.stages.map((stage, i) => (
            <li key={stage.name} className="reveal flex flex-col gap-7 bg-canvas p-7 md:p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.7rem] font-medium tracking-[-0.03em] text-ink">
                  {stage.name}
                </h3>
              </div>

              {/* what the AI is actually wired to at this stage */}
              <div>
                <div className="flex items-center">
                  {stage.flow.map((node, n) => (
                    <Fragment key={node.label}>
                      {n > 0 && <span className="stage-line" data-state={node.state} aria-hidden />}
                      <span className="stage-node" data-state={node.state}>
                        {node.label}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <p className="mt-3.5 text-xs leading-5 text-ink-muted">{stage.note}</p>
              </div>

              <p className="text-[1.02rem] leading-7 text-ink">{stage.shape}</p>

              <div className="mt-auto flex flex-col gap-5 border-t border-line pt-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                    What it needs
                  </p>
                  <p className="mt-2.5 text-[0.97rem] leading-6 text-ink-muted">{stage.needs}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                    What breaks
                  </p>
                  <p className="mt-2.5 text-[0.97rem] leading-6 text-ink-muted">{stage.breaks}</p>
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

import { Fragment } from "react";
import { crawlWalkRun } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";

/**
 * Three compact rows: the stage, what it is, and what it is wired to.
 *
 * Earlier versions carried four fields per stage and ran to three thousand
 * pixels. The stages are a way in to the readiness check, not a whitepaper —
 * one line each is enough to make the progression land, and the detail lives
 * in the check itself.
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

        <ol className="reveal-group mt-14 border-t border-line md:mt-16">
          {crawlWalkRun.stages.map((stage, i) => (
            <li
              key={stage.name}
              className="reveal grid gap-6 border-b border-line py-8 md:grid-cols-[7rem_minmax(0,1fr)_minmax(0,21rem)] md:items-center md:gap-10 md:py-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.45rem] font-medium tracking-[-0.03em] text-ink">
                  {stage.name}
                </h3>
              </div>

              <p className="max-w-xl text-[1rem] leading-7 text-ink-muted">{stage.line}</p>

              {/* what the AI is wired to, at the size of a diagram rather than
                  a feature: it should be read at a glance across the three
                  rows, not studied one row at a time */}
              <div className="track pb-6">
                <div className="flex items-center">
                  {stage.flow.map((node, n) => (
                    <Fragment key={node.label}>
                      {n > 0 && <span className="track-seg" data-state={node.state} aria-hidden />}
                      <span className="relative flex-none">
                        <span className="track-dot block" data-state={node.state} aria-hidden />
                        <span
                          className={[
                            "track-label absolute top-[calc(100%+0.6rem)]",
                            n === 0
                              ? "left-0"
                              : n === stage.flow.length - 1
                                ? "right-0"
                                : "left-1/2 -translate-x-1/2",
                          ].join(" ")}
                          data-state={node.state}
                        >
                          {node.label}
                        </span>
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-9 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-[0.97rem] leading-7 text-ink-muted">
            {crawlWalkRun.footnote}
          </p>
          <TextLink href={crawlWalkRun.cta.href}>{crawlWalkRun.cta.label}</TextLink>
        </div>
      </div>
    </section>
  );
}

import { Fragment } from "react";
import { crawlWalkRun } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";

/**
 * Three cards, each reading top to bottom: the stage, what the AI is wired
 * to, and what that means.
 *
 * The previous version laid each stage out horizontally, name and copy and
 * track side by side, which made a stage something you read across rather
 * than an object you take in at once. Stacking inside the card puts the track
 * directly under the name it belongs to, and the three tracks still line up
 * across the row, so the escalation is read left to right while each stage is
 * read downward.
 *
 * These are cards with a surface and a border rather than the seamless gap-px
 * grid used by the partnership tiles, so the two do not read as the same
 * component doing different jobs.
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

        <ol className="reveal-group mt-14 grid gap-4 md:mt-16 md:grid-cols-3">
          {crawlWalkRun.stages.map((stage, i) => (
            <li
              key={stage.name}
              className="reveal flex flex-col rounded-2xl border border-line bg-surface p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.5rem] font-medium tracking-[-0.03em] text-ink">
                  {stage.name}
                </h3>
              </div>

              {/* the track sits directly under the name it belongs to */}
              <div className="track mt-8 pb-6">
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

              <p className="mt-6 border-t border-line pt-6 text-[0.98rem] leading-7 text-ink">
                {stage.line}
              </p>
              {/* the control, framed as what the result depends on rather than
                  as a restriction placed on it */}
              <p className="mt-4 text-[0.9rem] leading-6 text-ink-muted">
                <span className="text-ink-muted/70">Unlocked by </span>
                {stage.unlocks}
              </p>
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

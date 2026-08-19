import { Fragment } from "react";
import { crawlWalkRun } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";

/**
 * The three stages, as three full-width rows rather than three columns.
 *
 * Columns put the stages side by side, which reads as parallel options; these
 * are sequential, and a reader moves down them the way an organisation moves
 * through them. The row also gives the copy a wider measure, so the same
 * content stops feeling like six stacked blocks in a narrow card.
 *
 * The track is the dominant element on purpose. Every row's track is the same
 * width, so where the solid line gives way to the dashed one lands further
 * right each time, and the escalation is readable without the words.
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

        <ol className="reveal-group mt-16 border-t border-line">
          {crawlWalkRun.stages.map((stage, i) => (
            <li
              key={stage.name}
              className="reveal grid gap-10 border-b border-line py-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-14"
            >
              {/* the stage itself */}
              <div>
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[clamp(2rem,3.4vw,2.9rem)] font-medium leading-none tracking-[-0.04em] text-ink">
                    {stage.name}
                  </h3>
                </div>
                <p className="mt-6 max-w-md text-[1.08rem] leading-7 text-ink">{stage.shape}</p>
                <p className="mt-4 text-sm leading-6 text-ink-muted">{stage.note}</p>
              </div>

              <div className="flex flex-col gap-10">
                {/* what the AI is wired to at this stage */}
                <div className="track pb-7">
                  <div className="flex items-center">
                    {stage.flow.map((node, n) => (
                      <Fragment key={node.label}>
                        {n > 0 && (
                          <span className="track-seg" data-state={node.state} aria-hidden />
                        )}
                        {/* the label is anchored to its own dot rather than
                            distributed across the row, so it stays under the
                            stop it names; the end labels align inward so they
                            do not hang off the track */}
                        <span className="relative flex-none">
                          <span className="track-dot block" data-state={node.state} aria-hidden />
                          <span
                            className={[
                              "track-label absolute top-[calc(100%+0.85rem)]",
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

                <dl className="grid gap-8 border-t border-line pt-7 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                      What it needs
                    </dt>
                    <dd className="mt-3 text-[0.97rem] leading-6 text-ink">{stage.needs}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                      What breaks
                    </dt>
                    <dd className="mt-3 text-[0.97rem] leading-6 text-ink-muted">{stage.breaks}</dd>
                  </div>
                </dl>
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

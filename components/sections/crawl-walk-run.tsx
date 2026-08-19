import { Fragment } from "react";
import { crawlWalkRun } from "@/lib/content";
import { SplitWords } from "@/components/ui/split-words";
import { TextLink } from "@/components/ui/pill-button";

/**
 * The staged model, hung off a vertical spine.
 *
 * Two previous attempts put the stages in a grid and then in full-width rows,
 * and both packed the section tightly. The problem was density rather than
 * arrangement: three stages, six fields each, in one screen. This version
 * gives every stage its own generous block on a spine running down the page,
 * so the reader descends through them at the pace the model describes.
 *
 * The section opens on MIT's finding rather than on an assertion of our own.
 * The staged model is common industry practice and is not attributed; the
 * statistic is MIT's and is attributed precisely.
 */
export function CrawlWalkRun() {
  const { stat } = crawlWalkRun;

  return (
    <section className="border-y border-line bg-canvas py-28 md:py-40">
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">{crawlWalkRun.eyebrow}</p>
          <h2 className="drift section-title mt-7 text-balance">
            <SplitWords text={crawlWalkRun.title} />
          </h2>
          <p className="reveal mt-8 max-w-2xl text-lg leading-8 text-ink-muted">
            {crawlWalkRun.intro}
          </p>
        </div>

        {/* the finding itself, set as evidence rather than as decoration */}
        <figure className="reveal mt-20 flex flex-col gap-7 border-t border-line pt-10 md:flex-row md:items-baseline md:gap-16">
          <span className="text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.05em] text-ink">
            {stat.value}
          </span>
          <div className="max-w-md">
            <p className="text-[1.15rem] leading-8 text-ink">{stat.claim}</p>
            <figcaption className="mt-4 text-sm leading-6 text-ink-muted">{stat.source}</figcaption>
          </div>
        </figure>

        <p className="reveal mt-24 max-w-2xl text-lg leading-8 text-ink-muted md:mt-32">
          {crawlWalkRun.lead}
        </p>

        {/* the spine: one line down the page, a stop for each stage */}
        <ol className="reveal-group mt-16 border-l border-line pl-8 md:mt-20 md:pl-16">
          {crawlWalkRun.stages.map((stage, i) => (
            <li key={stage.name} className="reveal relative py-14 md:py-20">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+3.5px)] top-[4.4rem] size-[7px] rounded-full bg-ink shadow-[0_0_0_5px_var(--color-canvas)] md:-left-[calc(4rem+3.5px)] md:top-[6.1rem]"
              />

              <div className="flex items-baseline gap-6">
                <span className="font-mono text-sm text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[clamp(2.4rem,4.6vw,4rem)] font-medium leading-none tracking-[-0.045em] text-ink">
                  {stage.name}
                </h3>
              </div>

              <p className="mt-8 max-w-xl text-[1.2rem] leading-8 text-ink">{stage.shape}</p>

              {/* what the AI is wired to at this stage */}
              <div className="track mt-14 max-w-2xl pb-8">
                <div className="flex items-center">
                  {stage.flow.map((node, n) => (
                    <Fragment key={node.label}>
                      {n > 0 && <span className="track-seg" data-state={node.state} aria-hidden />}
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

              <dl className="mt-14 grid max-w-3xl gap-10 sm:grid-cols-2 sm:gap-14">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                    What it needs
                  </dt>
                  <dd className="mt-4 text-[1rem] leading-7 text-ink">{stage.needs}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                    What breaks
                  </dt>
                  <dd className="mt-4 text-[1rem] leading-7 text-ink-muted">{stage.breaks}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>

        <div className="reveal mt-16 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-[1.02rem] leading-7 text-ink-muted">{crawlWalkRun.footnote}</p>
          <TextLink href={crawlWalkRun.cta.href}>{crawlWalkRun.cta.label}</TextLink>
        </div>
      </div>
    </section>
  );
}

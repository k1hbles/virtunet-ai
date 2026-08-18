import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/content";

const RULE: Record<string, string> = {
  accent: "bg-accent",
  warm: "bg-accent-warm",
  green: "bg-accent-green",
};

export function Insights() {
  return (
    <section className="border-t border-line bg-canvas py-24 md:py-32">
      <div className="wrap">
        <div className="flex items-end justify-between gap-6">
          <h2 className="drift text-balance text-4xl font-medium tracking-[-0.04em] text-ink md:text-6xl">
            {insights.title}
          </h2>
          <a
            href={insights.cta.href}
            className="reveal hidden items-center gap-2 text-sm text-ink transition-colors hover:text-accent md:inline-flex"
          >
            {insights.cta.label}
            <ArrowRight size={15} aria-hidden />
          </a>
        </div>

        <div className="reveal-group mt-12 grid gap-4 md:grid-cols-3">
          {insights.items.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group flex min-h-80 flex-col justify-between rounded-xl border border-line bg-surface p-7 transition-colors hover:border-ink-muted/60"
            >
              <div className={`rule-wipe h-1 w-14 rounded-full ${RULE[post.rule]}`} />
              <div>
                <h3 className="text-balance text-2xl font-medium leading-tight tracking-[-0.025em] text-ink">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink-muted">{post.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-ink">
                  Read insight
                  <ArrowRight size={15} aria-hidden />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

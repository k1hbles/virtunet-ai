import { ArrowUpRight } from "lucide-react";
import { aiServices } from "@/lib/content";

export function AiServices() {
  return (
    <section id="ai-services" className="bg-canvas py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="reveal eyebrow text-accent">{aiServices.eyebrow}</p>
            <h2 className="drift section-title mt-5 max-w-2xl">{aiServices.title}</h2>
          </div>
          <p className="reveal max-w-2xl text-lg leading-8 text-ink-muted lg:justify-self-end">
            {aiServices.intro}
          </p>
        </div>

        <div className="reveal-group grid md:grid-cols-2 lg:grid-cols-3">
          {aiServices.items.map((s, i) => (
            <a
              key={s.title}
              href={s.href}
              className={[
                "group flex min-h-64 flex-col justify-between border-b border-line py-8 transition-colors hover:bg-surface md:px-7",
                // vertical rules between columns, but never on a row's first cell
                i % 2 === 1 ? "md:border-l" : "",
                i % 3 === 0 ? "lg:border-l-0" : "lg:border-l",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                  {s.kicker}
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="text-ink-muted transition-colors group-hover:text-accent"
                />
              </div>
              <div>
                <h3 className="text-balance text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-ink-muted">{s.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

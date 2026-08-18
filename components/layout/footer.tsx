import { footer, site } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-28">
        <h2 className="drift max-w-4xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-ink md:text-7xl">
          {footer.cta.title}
        </h2>
        <PillButton href={footer.cta.href}>{footer.cta.label}</PillButton>
      </div>

      <div className="border-t border-line">
        <div className="reveal-group wrap grid gap-12 py-12 md:grid-cols-[1fr_auto_auto]">
          <div>
            <div className="text-2xl font-semibold tracking-[0.2em] text-ink">
              {site.name.toUpperCase()}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-muted">{site.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading} className="min-w-40">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                {col.heading}
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm text-ink transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="wrap flex flex-col gap-3 border-t border-line py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>{site.closing}</span>
        </div>
      </div>
    </footer>
  );
}

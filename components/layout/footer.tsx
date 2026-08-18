import { footer, site } from "@/lib/content";
import { SmartLink } from "@/components/ui/smart-link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div>
        <div className="reveal-group wrap grid gap-12 py-12 md:grid-cols-[1fr_auto_auto]">
          <div>
            <Logo height={30} />
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-muted">{site.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading} className="min-w-40">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                {col.heading}
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <SmartLink
                    key={l.label}
                    href={l.href}
                    className="text-sm text-ink transition-colors hover:text-accent"
                  >
                    {l.label}
                  </SmartLink>
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

import { footer, legal, routes, site } from "@/lib/content";
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
            {/*
              The sibling signpost. This site is AI services only; hardware,
              procurement and licensing are a different business under the same
              name. Rather than leave a visitor looking for those to conclude
              Virtu does not do them, say where they live — once, here, instead
              of linking into virtu.net from the body of the site.
            */}
            <p className="mt-6 max-w-sm text-sm leading-6 text-ink-muted">
              Looking for hardware, procurement or licensing?{" "}
              <SmartLink
                href={routes.virtuNet}
                className="text-ink underline underline-offset-4 transition-colors hover:text-accent"
              >
                That is virtu.net
              </SmartLink>
              .
            </p>
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

        {/*
          The closing statement, set at the size of a statement.

          It was six words in the corner of the legal bar, which is where a
          company line goes to be ignored. Sized to the width of the page it
          becomes the last thing a reader sees, which is the job it was written
          for. It is removed from the legal bar below rather than repeated.

          Sized in vw so it meets both edges at any width, which is the whole
          effect, but clamped: unclamped it ran to four lines and became a wall
          rather than a closing line. Clipped, because type this size will
          otherwise push the page sideways on narrow screens.
        */}
        <div className="wrap overflow-clip pb-10 pt-4 md:pb-14">
          <p className="reveal text-[clamp(2rem,7vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-ink">
            {site.closing.replace(/\.$/, "")}
          </p>
        </div>

        {/* The legal identity belongs here, not the trading name alone: the
            entity is Virtunet Pty Ltd and the ABN is what identifies it. The
            privacy policy has to be reachable from every page, because the
            site collects personal information through the contact form and
            both tools. */}
        <div className="wrap flex flex-col gap-3 border-t border-line py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {legal.entity}. All rights reserved. ABN {legal.abn}.
          </span>
          <SmartLink href="/privacy-policy" className="transition-colors hover:text-accent">
            Privacy Policy
          </SmartLink>
        </div>
      </div>
    </footer>
  );
}

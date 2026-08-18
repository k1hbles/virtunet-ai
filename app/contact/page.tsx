import type { Metadata } from "next";
import { company } from "@/lib/company";
import { PageHero } from "@/components/page/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to an Australian AI strategist about strategy, Microsoft Copilot, automation and governance. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

const { contact } = company;

export default function ContactPage() {
  const channels = [
    { label: "Call", primary: contact.phone, secondary: contact.phoneDirect },
    { label: "Email", primary: contact.email, secondary: contact.sales },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what is not working."
        lead={`${contact.responseTime} No obligation, and no sales pressure — if AI is the wrong answer for your problem, we would rather say so.`}
      />

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid border-t border-line py-0 md:grid-cols-2">
          {channels.map(({ label, primary, secondary }, i) => (
            <div
              key={label}
              className={[
                "border-b border-line py-12 md:px-10",
                i % 2 === 1 ? "md:border-l" : "",
              ].join(" ")}
            >
              <p className="eyebrow text-ink-muted">{label}</p>
              <a
                href={primary.href}
                className="mt-6 block text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium tracking-[-0.03em] text-ink transition-colors hover:text-accent"
              >
                {primary.label}
              </a>
              <p className="mt-1.5 text-[0.9rem] text-ink-muted">{primary.note}</p>
              <a
                href={secondary.href}
                className="mt-6 block text-[1.05rem] text-ink-muted transition-colors hover:text-accent"
              >
                {secondary.label}
              </a>
              <p className="mt-1 text-[0.9rem] text-ink-muted opacity-70">{secondary.note}</p>
            </div>
          ))}

          <div className="border-b border-line py-12 md:px-10">
            <p className="eyebrow text-ink-muted">Visit</p>
            <address className="mt-6 not-italic text-[1.15rem] leading-8 text-ink">
              {contact.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <a
              href={contact.address.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-[0.95rem] text-ink-muted underline underline-offset-4 transition-colors hover:text-accent"
            >
              Get directions
            </a>
          </div>

          <div className="border-b border-line py-12 md:border-l md:px-10">
            <p className="eyebrow text-ink-muted">Hours</p>
            <p className="mt-6 text-[1.15rem] leading-8 text-ink">{contact.hours}</p>
            <p className="mt-5 text-[0.95rem] leading-6 text-ink-muted">{contact.responseTime}</p>
          </div>
        </div>
      </section>
    </>
  );
}

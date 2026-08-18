import type { Metadata } from "next";
import { company } from "@/lib/company";
import { SplitWords } from "@/components/ui/split-words";
import { ContactForm } from "@/components/tools/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to an Australian AI strategist about strategy, Microsoft Copilot, automation and governance. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

const { contact } = company;

export default function ContactPage() {
  const details = [
    { label: "Call", primary: contact.phone, secondary: contact.phoneDirect },
    { label: "Email", primary: contact.email, secondary: contact.sales },
  ];

  return (
    <>
      {/* Deliberately barer than the other page heroes: on the one page where
          the reader has already decided to make contact, the form should be
          the next thing they meet, not another paragraph. */}
      <section className="relative overflow-clip border-b border-line bg-canvas">
        <div
          aria-hidden
          className="hero-wash pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(46% 62% at 18% 0%, oklch(61% 0.235 260 / 0.14), transparent 72%)",
          }}
        />
        <div className="wrap relative z-10 pb-20 pt-40 md:pb-28 md:pt-48">
          <p className="eyebrow text-ink-muted">Contact</p>
          <h1 className="mt-7 text-[clamp(3.4rem,10vw,8rem)] font-medium leading-[0.92] tracking-[-0.05em] text-ink">
            <SplitWords text="Let's talk." />
          </h1>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div className="reveal">
            <ContactForm />
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            {details.map(({ label, primary, secondary }) => (
              <div key={label} className="reveal border-b border-line pb-8 pt-8 first:pt-0">
                <p className="eyebrow text-ink-muted">{label}</p>
                <a
                  href={primary.href}
                  className="mt-5 block text-[1.35rem] font-medium tracking-[-0.025em] text-ink transition-colors hover:text-accent"
                >
                  {primary.label}
                </a>
                <p className="mt-1 text-[0.88rem] text-ink-muted">{primary.note}</p>
                <a
                  href={secondary.href}
                  className="mt-4 block text-[1rem] text-ink-muted transition-colors hover:text-accent"
                >
                  {secondary.label}
                </a>
                <p className="mt-1 text-[0.88rem] text-ink-muted opacity-70">{secondary.note}</p>
              </div>
            ))}

            <div className="reveal border-b border-line py-8">
              <p className="eyebrow text-ink-muted">Visit</p>
              <address className="mt-5 not-italic text-[1.02rem] leading-7 text-ink">
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
                className="mt-4 inline-block text-[0.92rem] text-ink-muted underline underline-offset-4 transition-colors hover:text-accent"
              >
                Get directions
              </a>
            </div>

            <div className="reveal py-8">
              <p className="eyebrow text-ink-muted">Hours</p>
              <p className="mt-5 text-[1.02rem] leading-7 text-ink">{contact.hours}</p>
              <p className="mt-3 text-[0.92rem] leading-6 text-ink-muted">{contact.responseTime}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

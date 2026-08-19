import type { Metadata } from "next";
import { company } from "@/lib/company";
import { PageHero } from "@/components/page/page-hero";
import { privacyIntro, privacySections, PRIVACY_SOURCE } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Virtu collects, holds, uses and discloses personal information, in line with the Privacy Act 1988 (Cth).",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Virtu values and respects the privacy of the people we deal with, and is committed to complying with the Privacy Act 1988 (Cth)."
      />

      <section className="bg-canvas py-20 md:py-28">
        <div className="wrap">
          <div className="max-w-3xl">
            {privacyIntro.map((para) => (
              <p key={para} className="reveal mb-6 text-[1.05rem] leading-8 text-ink-muted">
                {para}
              </p>
            ))}

            {privacySections.map((s) => (
              <section key={s.heading} className="mt-14">
                <h2 className="reveal text-[1.4rem] font-medium tracking-[-0.02em] text-ink">
                  {s.heading}
                </h2>
                {s.body?.map((para) => (
                  <p key={para} className="reveal mt-5 text-[1.05rem] leading-8 text-ink-muted">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="reveal mt-5 flex flex-col gap-2.5">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="relative pl-6 text-[1.05rem] leading-7 text-ink-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-ink-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.after?.map((para) => (
                  <p key={para} className="reveal mt-5 text-[1.05rem] leading-8 text-ink-muted">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* Contact details come from the company record rather than being
                repeated here, so a change of address or number cannot leave a
                stale version sitting in the policy. */}
            <section className="mt-14">
              <h2 className="reveal text-[1.4rem] font-medium tracking-[-0.02em] text-ink">
                How to contact us
              </h2>
              <p className="reveal mt-5 text-[1.05rem] leading-8 text-ink-muted">
                If you have a question or concern in relation to our handling of your personal
                information or this Policy, you can contact us for assistance as follows:
              </p>
              <dl className="reveal mt-6 flex flex-col gap-4 border-l border-line pl-6 text-[1.05rem] leading-7">
                <div>
                  <dt className="text-ink-muted">Email</dt>
                  <dd>
                    <a href={company.contact.email.href} className="text-ink underline underline-offset-4 hover:text-accent-ink">
                      {company.contact.email.label}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Contact number</dt>
                  <dd>
                    <a href={company.contact.phone.href} className="text-ink underline underline-offset-4 hover:text-accent-ink">
                      {company.contact.phone.label}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Post</dt>
                  <dd className="text-ink">
                    Attention: Virtu Privacy Officer
                    <br />
                    {company.contact.address.lines.join(", ")}
                  </dd>
                </div>
              </dl>
            </section>

            <p className="reveal mt-16 border-t border-line pt-8 text-sm leading-6 text-ink-muted">
              This policy is reproduced from Virtu&rsquo;s published privacy policy. The canonical
              version is at{" "}
              <a
                href={PRIVACY_SOURCE}
                className="text-ink underline underline-offset-4 hover:text-accent-ink"
                rel="noreferrer"
              >
                virtu.net/privacy-policy
              </a>
              , and takes precedence if the two ever differ.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

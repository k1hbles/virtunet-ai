"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const inquiryTypes = [
  "AI strategy or readiness",
  "Microsoft Copilot",
  "AI governance or security",
  "Automation or agents",
  "Devices and workplace",
  "Something else",
];

const field =
  "mt-3 w-full border-b border-line bg-transparent pb-2.5 text-[1.05rem] text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-accent";
const label = "text-[0.8rem] uppercase tracking-[0.16em] text-ink-muted";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          organisation: form.get("organisation"),
          inquiryType: form.get("inquiryType"),
          message: form.get("message"),
          consent: form.get("consent") === "on",
          website: form.get("website"),
          startedAt: startedAt.current,
          tool: "contact",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("We could not reach the server. Please call or email us directly.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 md:p-12">
        <p className="text-[1.4rem] font-medium tracking-[-0.02em] text-ink">Thank you. That&apos;s with us.</p>
        <p className="mt-4 max-w-md text-[1.02rem] leading-7 text-ink-muted">
          We reply within one business day. If it is urgent, the phone number on this page is
          answered during business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-7 md:p-12">
      {/* honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label>
          Leave blank
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <label className="block">
          <span className={label}>Full name *</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Organisation</span>
          <input
            name="organisation"
            autoComplete="organization"
            placeholder="Company or agency"
            className={field}
          />
        </label>
      </div>

      <label className="mt-8 block md:mt-10">
        <span className={label}>Email address *</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@organisation.com.au"
          className={field}
        />
      </label>

      <label className="mt-8 block md:mt-10">
        <span className={label}>What is it about?</span>
        <select name="inquiryType" defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>
            Select…
          </option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t} className="bg-canvas text-ink">
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-8 block md:mt-10">
        <span className={label}>Message *</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us what is not working, and we will tell you honestly whether AI is the right answer for it."
          className={`${field} resize-y`}
        />
      </label>

      <label className="mt-9 flex max-w-2xl items-start gap-3">
        <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-[oklch(61%_0.235_260)]" />
        <span className="text-[0.92rem] leading-6 text-ink-muted">
          I agree that Virtu may use these details to respond to my enquiry.
        </span>
      </label>

      {error && (
        <p role="alert" className="mt-6 text-[0.95rem] leading-6 text-accent-warm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
        <ArrowRight size={17} aria-hidden />
      </button>
    </form>
  );
}

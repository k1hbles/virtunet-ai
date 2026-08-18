"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Optional email capture, shown *after* the result.
 *
 * Nothing here gates the answer — by the time this renders the reader already
 * has their full result. It exists to send them a copy, which is a different
 * bargain from making them pay for the thing they came for.
 */
export function LeadForm({ tool, summary }: { tool: "readiness" | "roi"; summary: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef<number>(0);

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
          consent: form.get("consent") === "on",
          website: form.get("website"),
          startedAt: startedAt.current,
          tool,
          summary,
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
      setError("We could not reach the server. Please contact us directly.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-t border-line pt-10">
        <p className="text-[1.1rem] leading-8 text-ink">
          Sent. We will be in touch within one business day — and there is no obligation attached to
          this.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border-t border-line pt-10">
      <h3 className="text-[1.3rem] font-medium tracking-[-0.025em] text-ink">
        Want this sent to you?
      </h3>
      <p className="mt-3 max-w-xl text-[0.98rem] leading-6 text-ink-muted">
        Optional. Your result is already on screen and yours to keep — this only sends a copy and
        lets us follow up if you want us to.
      </p>

      {/* honeypot: visually hidden, not display:none, so bots still fill it */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label>
          Leave blank
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.85rem] uppercase tracking-[0.14em] text-ink-muted">Your name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-[1.05rem] text-ink outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-[0.85rem] uppercase tracking-[0.14em] text-ink-muted">Work email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-[1.05rem] text-ink outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[0.85rem] uppercase tracking-[0.14em] text-ink-muted">
            Organisation <span className="normal-case tracking-normal opacity-60">(optional)</span>
          </span>
          <input
            name="organisation"
            autoComplete="organization"
            className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-[1.05rem] text-ink outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>

      <label className="mt-7 flex max-w-2xl items-start gap-3">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 size-4 shrink-0 accent-[oklch(61%_0.235_260)]"
        />
        <span className="text-[0.92rem] leading-6 text-ink-muted">
          I agree that Virtu may use these details to send me this result and follow up about it.
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
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-platinum px-7 py-3.5 text-base font-medium text-canvas transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Email me this"}
        <ArrowRight size={17} aria-hidden />
      </button>
    </form>
  );
}

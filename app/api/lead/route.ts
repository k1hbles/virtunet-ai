import { NextResponse } from "next/server";

/**
 * Lead capture for the two tools.
 *
 * The result is always shown client-side whether or not this succeeds — the
 * reader is never gated on a form, and a mail outage must not cost them their
 * answer. This endpoint only ever sends a copy.
 *
 * Requires RESEND_API_KEY and LEAD_INBOX. Without them it returns 503 rather
 * than pretending to have sent anything, so a misconfigured deploy is
 * obvious rather than silently losing enquiries.
 */

export const runtime = "nodejs";

/** Faster than this and it is not a person filling in a form. */
const MIN_SUBMIT_MS = 2500;

type Payload = {
  name?: string;
  email?: string;
  organisation?: string;
  consent?: boolean;
  /** Honeypot — must stay empty. */
  website?: string;
  /** Client timestamp when the form was rendered. */
  startedAt?: number;
  tool?: string;
  summary?: string;
  /** General enquiries from the contact page. */
  inquiryType?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  // Honeypot and timing checks run before anything else, and both return the
  // same shape as success so a bot learns nothing from the response.
  if (body.website) return NextResponse.json({ ok: true });
  if (typeof body.startedAt === "number" && Date.now() - body.startedAt < MIN_SUBMIT_MS) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Name and work email are required." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "That email address does not look right." }, { status: 400 });
  }
  if (!body.consent) {
    return NextResponse.json(
      { ok: false, error: "We need your consent before we can send this." },
      { status: 400 },
    );
  }
  // the contact form is the one path where the message is the substance.
  // This has to sit with the other input checks, above the configuration
  // check — otherwise an unconfigured deploy reports 503 for what is really
  // a validation error, and the visitor is told the wrong thing.
  if (body.tool === "contact" && !(body.message ?? "").trim()) {
    return NextResponse.json({ ok: false, error: "Please tell us what you need." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.LEAD_INBOX;
  const from = process.env.LEAD_FROM ?? "Virtu <onboarding@resend.dev>";

  if (!apiKey || !inbox) {
    console.error("[lead] RESEND_API_KEY or LEAD_INBOX is not configured");
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured yet. Please contact us directly." },
      { status: 503 },
    );
  }

  const source =
    body.tool === "roi"
      ? "AI ROI Calculator"
      : body.tool === "contact"
        ? `Enquiry${body.inquiryType ? ` — ${body.inquiryType}` : ""}`
        : "AI Readiness Check";
  const lines = [
    `Source: ${source}`,
    `Name: ${name}`,
    `Email: ${email}`,
    body.organisation ? `Organisation: ${body.organisation}` : null,
    "",
    body.message ?? body.summary ?? "",
  ].filter(Boolean);

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [inbox],
      replyTo: email,
      subject: `${source} — ${name}`,
      text: lines.join("\n"),
    });
    if (error) {
      console.error("[lead] resend error", error);
      return NextResponse.json(
        { ok: false, error: "We could not send that just now. Please contact us directly." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[lead] send failed", err);
    return NextResponse.json(
      { ok: false, error: "We could not send that just now. Please contact us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

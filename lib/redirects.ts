/**
 * Old virtunet.ai URLs mapped to their home on this site.
 *
 * This site restructured the information architecture — services, industries
 * and insights all gained a path segment — so every existing inbound link and
 * search result would otherwise land on a 404. These are permanent (308), so
 * ranking signal follows the redirect.
 *
 * Trailing slashes are NOT listed here: Next already 308s `/x/` to `/x`, and
 * the redirect below then catches the clean path.
 *
 * `/privacy-policy` is deliberately absent. It is 1,300 words of legal text
 * citing the Privacy Act 1988 (Cth); it needs the authoritative document
 * pasted in, not a rewrite or a machine transcription.
 */

const services = [
  "ai-90-day-accelerator",
  "ai-agents",
  "ai-collaboration",
  "ai-cybersecurity",
  "ai-governance",
  "ai-physical-security",
  "ai-readiness-assessment",
  "ai-ready-devices",
  "ai-service-desk",
  "ai-strategy-day",
  "ai-training-enablement",
  "ai-workflow-automation",
  "microsoft-copilot-adoption",
];

const industries = ["corporate", "education", "enterprise", "government", "healthcare", "not-for-profit"];

const articles = [
  "5-steps-to-a-safe-microsoft-copilot-rollout",
  "agentic-ai-cost-discipline",
  "ai-governance-guardrails-before-gas-pedal",
  "australia-national-ai-plan-boards",
  "five-eyes-ai-cyber-risk-months-not-years",
  "sustainable-it-meets-the-ai-era",
];

/** Old paths with no direct equivalent, sent to the nearest real content. */
const nearest: Record<string, string> = {
  // the umbrella consulting page is now the services index itself
  "/enterprise-ai-consulting": "/services",
  // partner ecosystem material lives in the company story for now
  "/ai-ecosystem": "/about",
  // the readiness *tool* does not exist here; the assessment service is the
  // closest equivalent content
  "/ai-readiness": "/services/ai-readiness-assessment",
  // likewise the ROI calculator — the strategy day is what produces a costed
  // business case
  "/ai-roi-calculator": "/services/ai-strategy-day",
  "/responsible-ai": "/responsible-ai",
};

const categories = [
  "ai-governance-insights",
  "ai-security",
  "ai-strategy",
  "microsoft-ai",
  "sustainable-it",
];

export const legacyRedirects = [
  ...services.map((s) => ({ source: `/${s}`, destination: `/services/${s}`, permanent: true })),
  ...industries.map((s) => ({ source: `/${s}`, destination: `/industries/${s}`, permanent: true })),
  ...articles.map((s) => ({ source: `/${s}`, destination: `/insights/${s}`, permanent: true })),
  ...categories.map((c) => ({ source: `/category/${c}`, destination: "/insights", permanent: true })),
  ...Object.entries(nearest)
    .filter(([from, to]) => from !== to)
    .map(([source, destination]) => ({ source, destination, permanent: true })),
];

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

/**
 * Services that still exist. The old site had them at the root, so these
 * point at their home under /services.
 */
const services = [
  "ai-agents",
  "ai-governance",
  "ai-readiness-assessment",
  "ai-strategy-day",
  "ai-training-enablement",
  "ai-workflow-automation",
];

/**
 * Services retired in the repositioning, and where each one's audience should
 * land now. These are redirected from BOTH the old root path and the
 * /services path, because this site published the /services versions itself —
 * so both are live URLs somebody may have followed or indexed.
 *
 * Physical security has no equivalent: cameras and access control are
 * virtu.net's business, not this one's, so it goes to the services index
 * rather than being mapped to something it is not.
 */
const retiredServices: Record<string, string> = {
  "ai-cybersecurity": "/services/securing-ai",
  "ai-ready-devices": "/services/ai-infrastructure",
  "ai-collaboration": "/services/ai-native-work",
  "microsoft-copilot-adoption": "/services/ai-native-work",
  "ai-service-desk": "/services/ai-workflow-automation",
  "ai-90-day-accelerator": "/services/ai-agents",
  "ai-physical-security": "/services",
};

const industries = ["corporate", "education", "enterprise", "government", "healthcare", "not-for-profit"];

const articles = [
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
  "/ai-readiness": "/tools/ai-readiness-check",
  "/ai-roi-calculator": "/tools/ai-readiness-check",
  "/responsible-ai": "/responsible-ai",
};

/**
 * Whole areas retired in the repositioning. Each of these was a live URL on
 * this site, so they redirect rather than 404 — the ROI calculator to the
 * assessment that replaced it as the entry point, and the rest to the nearest
 * page that still answers the question the visitor arrived with.
 *
 * Client outcomes were removed because the case studies described hardware
 * and lifecycle work. Partnerships was a hundred-odd hardware vendors, which
 * is virtu.net's story; it returns when the AI partnerships are confirmed.
 */
const retiredOutcomes = [
  "ai-physical-security-retail",
  "ai-governance-healthcare",
  "ai-app-development-recycling",
  "agentic-ai-pentesting-education",
  "ai-automation-manufacturing",
  "ai-roadmap-financial-services",
  "ai-enablement-hotel",
  "ai-edge-content-creation-studio",
];

const retiredAreas: Record<string, string> = {
  /* The Copilot walkthrough was substantially Microsoft-specific — Purview,
     SharePoint, Conditional Access. Its argument, that an assistant surfaces
     whatever a user can already reach, is now the Securing AI service, so the
     traffic goes there rather than to the insights index. */
  "/5-steps-to-a-safe-microsoft-copilot-rollout": "/services/securing-ai",
  "/insights/5-steps-to-a-safe-microsoft-copilot-rollout": "/services/securing-ai",
  "/tools/ai-roi-calculator": "/tools/ai-readiness-check",
  "/client-outcomes": "/services",
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
  ...Object.entries(retiredServices).flatMap(([slug, destination]) => [
    { source: `/${slug}`, destination, permanent: true },
    { source: `/services/${slug}`, destination, permanent: true },
  ]),
  ...industries.map((s) => ({ source: `/${s}`, destination: `/industries/${s}`, permanent: true })),
  ...articles.map((s) => ({ source: `/${s}`, destination: `/insights/${s}`, permanent: true })),
  ...categories.map((c) => ({ source: `/category/${c}`, destination: "/insights", permanent: true })),
  ...Object.entries(retiredAreas).map(([source, destination]) => ({ source, destination, permanent: true })),
  ...retiredOutcomes.map((s) => ({ source: `/client-outcomes/${s}`, destination: "/services", permanent: true })),
  ...Object.entries(nearest)
    .filter(([from, to]) => from !== to)
    .map(([source, destination]) => ({ source, destination, permanent: true })),
];

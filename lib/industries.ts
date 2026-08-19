/**
 * Sector pages.
 *
 * The technology barely changes between these. What changes is the data you
 * hold, the obligations attached to it, and how much room there is to be
 * wrong — so each page leads with the constraint, not the capability.
 *
 * Structure and facts follow virtunet.ai; prose is rewritten for this site.
 */

export type Industry = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  intro: string[];
  /** Where AI is actually earning its place in this sector. */
  useCases: { name: string; body: string }[];
  /** The constraints that shape every decision here. */
  realities: { name: string; body: string }[];
  /** Service slugs that matter most in this sector. */
  services: string[];
};

export const industryList: Industry[] = [
  {
    slug: "corporate",
    name: "Corporate",
    title: "AI for corporate and business",
    summary:
      "Productivity that shows up in the numbers, for ambitious Australian businesses — adopted safely and measured honestly.",
    intro: [
      "For most businesses the first real win from AI is unglamorous: give people their time back. Assistants that draft, summarise and analyse, plus automation of the repetitive work behind them.",
      "The failure mode is equally predictable — licences bought, nobody trained, no measurement, quiet abandonment by month three. We treat adoption as the deliverable, not the rollout.",
    ],
    useCases: [
      { name: "Everyday productivity", body: "Assistants that draft, summarise and analyse across every team." },
      { name: "Workflow automation", body: "Approvals, document processing and reporting handled without a person in the middle." },
      { name: "Customer and sales enablement", body: "Faster research, better preparation, and less time spent on admin between calls." },
      { name: "Governed adoption", body: "Rolled out with the security and guardrails that protect commercial data." },
    ],
    realities: [
      { name: "Protect data and IP", body: "Commercial data and intellectual property stay out of public models." },
      { name: "Adoption, not licences", body: "Value comes from people actually using it, which makes change management the work." },
      { name: "Cost discipline", body: "Spend right-sized against outcomes you can measure, not against enthusiasm." },
    ],
    services: ["ai-native-work", "ai-workflow-automation", "ai-readiness-assessment"],
  },
  {
    slug: "government",
    name: "Government",
    title: "AI for government and the public sector",
    summary:
      "Compliant, sovereign and secure AI — better services without lowering the bar on trust or accountability.",
    intro: [
      "Public-sector organisations carry a dual mandate: deliver better, faster services, and do it with transparency, security and data sovereignty intact. AI can serve both, but only when adopted deliberately.",
      "We help agencies apply AI to real workloads while meeting data-residency, security and accountability requirements — with explainability designed in rather than argued about later.",
    ],
    useCases: [
      { name: "Citizen services", body: "Faster, more consistent responses to high-volume enquiries." },
      { name: "Case and document processing", body: "Structured extraction and triage across large document sets." },
      { name: "Knowledge and records", body: "Finding what already exists, without exposing what should not be found." },
      { name: "Sovereign AI", body: "Hosted and governed to meet data-residency and security requirements." },
    ],
    realities: [
      { name: "Sovereignty and residency", body: "Data stays onshore and under appropriate control, demonstrably." },
      { name: "Transparency and accountability", body: "Decisions that can be explained and contested, because public trust depends on it." },
      { name: "Compliance", body: "Aligned to government security and privacy frameworks from the outset." },
    ],
    services: ["ai-governance", "securing-ai", "ai-readiness-assessment"],
  },
  {
    slug: "education",
    name: "Education",
    title: "AI for the education sector",
    summary:
      "Age-appropriate AI for schools, universities and training providers — easing staff workload while protecting students.",
    intro: [
      "AI is already in your students' hands. The question is no longer whether to allow it but whether the institution has a position on it that staff can actually teach.",
      "We help education providers adopt AI responsibly — clear policy, real safeguards, and staff enablement grounded in privacy and child-safety obligations.",
    ],
    useCases: [
      { name: "Teacher productivity", body: "Lesson planning, resource generation, and less time lost to marking and admin." },
      { name: "Classroom AI and literacy", body: "Age-appropriate use that supports learning and builds the literacy students will need." },
      { name: "Student support", body: "Accessibility and support that scales beyond what staffing alone allows." },
      { name: "Campus safety", body: "Natural-language camera search that locates a missing student in seconds." },
    ],
    realities: [
      { name: "Student safety and privacy", body: "Minors and their data protected, against child-safety and privacy obligations." },
      { name: "Academic integrity", body: "Clear, teachable expectations for how students may use AI." },
      { name: "Equity of access", body: "Benefits reaching all students, not only those already advantaged." },
    ],
    services: ["ai-governance", "ai-ethics", "ai-training-enablement"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    title: "AI for healthcare",
    summary:
      "Protected patient data and reliable systems that give clinicians time back, without touching clinical judgement.",
    intro: [
      "Healthcare runs on trust and time, both in short supply. AI can return time to clinicians and ease operational load, but only with rigorous attention to patient safety, privacy and human oversight.",
      "We apply AI to documentation, support and operations while protecting sensitive data and keeping people firmly in control of anything clinical.",
    ],
    useCases: [
      { name: "Clinical and admin documentation", body: "Drafting and summarisation that returns time at the point of care." },
      { name: "Patient support", body: "Consistent answers to routine enquiries, escalated when they stop being routine." },
      { name: "Operational efficiency", body: "Scheduling, triage and back-office load handled with less manual effort." },
      { name: "Secure data handling", body: "Sensitive health data protected by design, not by policy alone." },
    ],
    realities: [
      { name: "Patient data protection", body: "Health data safeguarded and privacy obligations upheld." },
      { name: "Safety and reliability", body: "A human stays in the loop for anything clinical, without exception." },
      { name: "Compliance", body: "Health privacy and records obligations met and evidenced." },
    ],
    services: ["ai-governance", "securing-ai", "ai-workflow-automation"],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    title: "AI for enterprise",
    summary:
      "Consistent controls and measurable value across complex estates — scaling AI without fragmenting governance.",
    intro: [
      "At enterprise scale the hard part is rarely the first use case. It is the fiftieth: applying consistent controls across business units that each solved the problem their own way.",
      "We build the platform and governance that lets value be proven once and then extended, rather than rediscovered in every division.",
    ],
    useCases: [
      { name: "Scaled AI platforms", body: "Shared foundations rather than a dozen disconnected pilots." },
      { name: "Governance at scale", body: "One set of controls applied consistently across the organisation." },
      { name: "Agentic automation", body: "Agents handling real work across functions, with oversight that holds." },
      { name: "Security and identity", body: "Access and identity handled properly before anything is connected." },
    ],
    realities: [
      { name: "Integration complexity", body: "Connecting AI to many systems and data sources safely." },
      { name: "Governance at scale", body: "Consistent controls across every business unit, not per-team improvisation." },
      { name: "Value management", body: "Proving value once, then scaling it across many business cases." },
    ],
    services: ["ai-agents", "ai-governance", "securing-ai"],
  },
  {
    slug: "not-for-profit",
    name: "Not-for-profit",
    title: "AI for not-for-profits",
    summary:
      "More impact per dollar — AI that stretches limited resources without exposing the people you serve.",
    intro: [
      "Lean teams feel automation benefits faster than anyone, because the admin burden falls on the same people doing the mission work.",
      "We focus on affordable, grant-friendly options, and on building enough internal confidence that the capability survives after we leave.",
    ],
    useCases: [
      { name: "Do more with less", body: "Administrative load reduced so effort goes to the mission." },
      { name: "Fundraising and engagement", body: "Better preparation and more consistent supporter communication." },
      { name: "Service delivery", body: "Front-line teams supported without adding headcount." },
      { name: "Affordable technology", body: "Sustainable, grant-friendly choices with a defensible lifecycle." },
    ],
    realities: [
      { name: "Budget and funding", body: "Maximum impact per dollar, with grant-friendly options where they exist." },
      { name: "Beneficiary privacy", body: "The data of vulnerable people protected without compromise." },
      { name: "Small-team capability", body: "Skills and confidence built in lean teams that cannot hire specialists." },
    ],
    services: ["ai-workflow-automation", "ai-training-enablement", "ai-readiness-assessment"],
  },
];

export const getIndustry = (slug: string) => industryList.find((i) => i.slug === slug);

/**
 * Company facts, credentials and contact details.
 *
 * Every claim here is carried across from virtunet.ai. Awards and dates are
 * verifiable statements, so they are kept exactly as stated rather than
 * paraphrased — if any of them lapse, this is the one file to correct.
 */

export const company = {
  since: 2008,
  organisationsHelped: "5,000+",

  positioning:
    "An Australian technology partner since 2008, now bringing the same discipline to artificial intelligence.",

  story: [
    "Virtu has spent since 2008 helping more than 5,000 Australian organisations, schools and government agencies modernise their technology — modern workplace, security, cloud, networking and collaboration — sustainably and at scale.",
    "The AI practice is not a pivot. It stands on eighteen years of delivery for organisations that cannot afford for technology to fail, and it inherits the same habits: cybersecurity first, vendor neutral, and measured against outcomes rather than activity.",
  ],

  vision: "To empower people and organisations in pushing the limits of sustainable growth.",
  purpose:
    "To deliver work our clients can rely on, and help them succeed through technology.",

  /**
   * Attributed speech. This is a real quotation from a named person and is
   * reproduced exactly as published — it is the one kind of copy on this site
   * that must never be rewritten for tone.
   */
  leader: {
    name: "Martin Kosasih",
    role: "Managing Director",
    photo: "/people/martin-kosasih.webp",
    quote:
      "We're here to empower people and organisations in pushing the limits of sustainable growth — to ultimately bring lasting transformations to our planet, people and communities.",
  },

  /** The promise, and the evidence for it. */
  track: [
    "Enterprise clients onboarded in our earliest days — organisations of a thousand staff and more — are still with us over ten years later.",
    "A ten-minute response time, and a habit of hand-delivering urgent work outside business hours. We look for a way rather than a reason it cannot be done.",
  ],

  /** What working with Virtu actually involves. */
  expect: [
    "Technology and AI aligned to the business, not to a product roadmap",
    "Solutions that support work-life balance rather than quietly erode it",
    "Streamlined workflow, and productivity you can point at",
    "Support that helps busy IT teams get things done",
    "Simple, uncomplicated solutions that do what they say",
    "Help growing your own internal IT and AI capability",
    "Sustainable management of your whole technology lifecycle",
    "Making IT work for you, simply and quickly",
  ],

  /** Why organisations choose Virtu over the alternatives. */
  differentiators: [
    {
      title: "Advisor first, not a reseller",
      body: "We start with outcomes rather than products — independent advice that maps technology to your strategy, not to what we happen to sell.",
    },
    {
      title: "Cybersecurity-led",
      body: "Every engagement is built on a zero-trust foundation, so innovation never outpaces the protection underneath it.",
    },
    {
      title: "A team that implements",
      body: "Certified engineers and project managers who deliver from pilot to production, not a strategy deck and a handshake.",
    },
    {
      title: "Vendor neutral, ecosystem deep",
      body: "We work across the Microsoft, Cisco, HP, Lenovo and Dell ecosystems, and recommend what fits your goals.",
    },
    {
      title: "Sustainable by default",
      body: "Sustainability, security and scalability in every decision — including responsible device lifecycle and e-waste.",
    },
    {
      title: "People-first change",
      body: "Adoption is a people problem before it is a technology one. We bring teams along with enablement and clear communication.",
    },
  ],

  principles: [
    {
      title: "Safe by design",
      body: "AI is adopted with guardrails from day one, not retrofitted after a risk review raises its hand.",
    },
    {
      title: "Technology serves people",
      body: "Systems support human judgement. They do not replace it, and they do not quietly make decisions nobody agreed to.",
    },
    {
      title: "Sustainability is not optional",
      body: "Lifecycle, reuse and responsible disposal are part of the engagement, not an afterthought at end of life.",
    },
    {
      title: "Trust is earned in the details",
      body: "Response times, handovers, and the things that are easy to skip when nobody is watching.",
    },
  ],

  /** Verifiable third-party recognition. Kept verbatim. */
  recognition: [
    "CRN Fast 50 — six-time winner and Fast 50 All Star",
    "Deloitte Technology Fast 50 Australia",
    "ARN ICT Industry Awards finalist — Channel Champion",
    "Australia's Best Workplaces in Technology 2024 — Great Place to Work",
    "Certified Great Place to Work, 2022–2024",
    "Top 10, AFR BOSS Best Places to Work 2023 — Technology",
  ],

  /**
   * Responsible AI posture, aligned to Australia's AI Ethics Principles and
   * informed by ISO/IEC 42001 and the NIST AI Risk Management Framework.
   */
  responsibleAi: [
    "A practical AI policy and acceptable-use standard your people can follow",
    "Bias, privacy and security checks built into how tools are selected and deployed",
    "Meaningful human oversight and clear review paths for high-impact decisions",
    "Ongoing monitoring so the posture stays current as the landscape shifts",
  ],

  contact: {
    phone: { label: "1300 484 788", href: "tel:1300484788", note: "Toll-free, Australia-wide" },
    phoneDirect: { label: "+61 (02) 9662 5200", href: "tel:+61296625200", note: "Sydney direct" },
    email: { label: "info@virtu.net", href: "mailto:info@virtu.net", note: "General enquiries" },
    sales: { label: "sales@virtu.net", href: "mailto:sales@virtu.net", note: "New business" },
    address: {
      lines: ["Level 3, Building 2", "75 O'Riordan Street", "Alexandria NSW 2015", "Australia"],
      href: "https://maps.google.com/?q=75+O'Riordan+Street+Alexandria+NSW+2015",
    },
    hours: "Monday to Friday, 8:30am – 5:30pm AEST",
    responseTime: "We reply within one business day.",
  },
} as const;

/** Sectors. Detail pages follow; the index is live now so nothing dead-ends. */
export const industries = [
  { slug: "corporate", name: "Corporate", body: "Move quickly without creating risk the board has to explain later." },
  { slug: "government", name: "Government", body: "Sovereign delivery and public-sector procurement, handled properly." },
  { slug: "education", name: "Education", body: "Safe AI for students and staff, with duty of care built in." },
  { slug: "healthcare", name: "Healthcare", body: "Protect patient data while giving clinicians time back." },
  { slug: "enterprise", name: "Enterprise", body: "Scale across estates and business units without fragmenting control." },
  { slug: "not-for-profit", name: "Not-for-profit", body: "More impact per dollar, and sustainable by default." },
] as const;

/** Published thinking. Full articles follow. */
export const insights = [
  {
    slug: "australia-national-ai-plan-boards",
    category: "Governance",
    title: "No AI Act for Australia: what light-touch regulation really asks of boards",
    body: "Less prescription does not mean less accountability. What directors still have to be able to evidence.",
  },
  {
    slug: "agentic-ai-cost-discipline",
    category: "Cost",
    title: "Agentic AI's first budget shock: the year cost discipline arrived",
    body: "Agent runs are not free. How to design for a unit cost you can forecast.",
  },
  {
    slug: "five-eyes-ai-cyber-risk-months-not-years",
    category: "Security",
    title: "Five Eyes to boards: AI will reshape cyber risk in months, not years",
    body: "What the joint guidance means for organisations still planning an annual test cycle.",
  },
  {
    slug: "5-steps-to-a-safe-microsoft-copilot-rollout",
    category: "Microsoft AI",
    title: "Five steps to a safe Microsoft Copilot rollout",
    body: "The permissions work that decides whether Copilot is useful or a data incident.",
  },
  {
    slug: "ai-governance-guardrails-before-gas-pedal",
    category: "Governance",
    title: "Guardrails before the gas pedal",
    body: "Why governance is what lets an organisation move faster, not slower.",
  },
  {
    slug: "sustainable-it-meets-the-ai-era",
    category: "Sustainable IT",
    title: "Sustainable IT meets the AI era",
    body: "What a device refresh cycle looks like when inference moves onto the endpoint.",
  },
] as const;

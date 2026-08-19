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
    "Virtu has spent since 2008 helping more than 5,000 Australian organisations, schools and government agencies modernise their technology sustainably and at scale, across modern workplace, security, cloud, networking and collaboration.",
    "The AI practice is not a pivot. It stands on eighteen years of delivery for organisations that cannot afford for technology to fail, and it inherits the same habits: cybersecurity first, vendor neutral, and measured against outcomes rather than activity.",
    "It is also a separate business. Hardware, procurement and licensing remain at virtu.net. What sits here is the work of making AI useful: strategy, governance, agents, adoption, and the compute they run on.",
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
    "Enterprise clients onboarded in our earliest days, organisations of a thousand staff and more, are still with us over ten years later.",
    "A ten-minute response time, and a habit of hand-delivering urgent work outside business hours. We look for a way rather than a reason it cannot be done.",
  ],

  /** What working with Virtu actually involves. */
  expect: [
    "Technology and AI aligned to the business, not to a product roadmap",
    "Solutions that support work-life balance rather than quietly erode it",
    "Streamlined workflow, and productivity you can point at",
    "Support that helps busy technology teams get things done",
    "Simple, uncomplicated solutions that do what they say",
    "Help growing your own internal AI capability, so the dependency shrinks",
    "Running costs that stay proportionate as usage grows",
    "AI that works in your context, not in a demo",
  ],

  /** Why organisations choose Virtu over the alternatives. */
  differentiators: [
    {
      title: "Advisor first, not a reseller",
      body: "We start with outcomes rather than products. Independent advice that maps technology to your strategy, not to what we happen to sell.",
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
      body: "We work across the major model providers, cloud platforms and agent frameworks, and recommend what fits your goals rather than what we happen to sell.",
    },
    {
      title: "Sustainable by default",
      body: "Sustainability, security and scalability in every decision, including the energy and running cost of inference as usage grows.",
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

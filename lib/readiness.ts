/**
 * AI Readiness Check.
 *
 * Ten questions across five dimensions, each answer worth 0–3, so 30 points
 * total and 6 per dimension. Questions and answer options follow the
 * assessment on virtunet.ai; the question wording is written for this site.
 *
 * Scoring is deliberately transparent and lives here rather than on a server:
 * the reader gets their result instantly, and nothing about the result depends
 * on them handing over an email address.
 */

export type Dimension = {
  key: string;
  name: string;
  blurb: string;
};

export const dimensions: Dimension[] = [
  { key: "strategy", name: "Strategy & leadership", blurb: "Whether anyone senior owns this, and whether it is funded." },
  { key: "data", name: "Data & technology", blurb: "Whether the data underneath is in a fit state to build on." },
  { key: "people", name: "People & adoption", blurb: "Whether anyone will actually use what gets built." },
  { key: "governance", name: "Governance & risk", blurb: "Whether you could defend a decision an AI system made." },
  { key: "value", name: "Value & delivery", blurb: "Whether anything has reached production and been measured." },
];

export type Question = {
  id: string;
  dimension: string;
  prompt: string;
  /** Ordered worst to best; index is the score. */
  options: string[];
};

export const questions: Question[] = [
  {
    id: "strategy_1",
    dimension: "strategy",
    prompt: "Where is your AI strategy today?",
    options: [
      "No strategy or discussion yet",
      "Informal interest, nothing documented",
      "A strategy is actively being developed",
      "A funded strategy with executive ownership",
    ],
  },
  {
    id: "strategy_2",
    dimension: "strategy",
    prompt: "Who owns AI in your organisation?",
    options: [
      "No one in particular",
      "Individual enthusiasts",
      "A manager or single team",
      "Executive or board level",
    ],
  },
  {
    id: "data_1",
    dimension: "data",
    prompt: "How accessible is the data AI would need?",
    options: [
      "Scattered and hard to access",
      "Siloed but mostly available",
      "Largely centralised and accessible",
      "Well governed, accessible, high quality",
    ],
  },
  {
    id: "data_2",
    dimension: "data",
    prompt: "Where does your technology estate sit?",
    options: [
      "Mostly legacy or on-premises",
      "Mixed, with some cloud",
      "Mostly cloud (Microsoft 365 / Azure)",
      "Cloud-first and well integrated",
    ],
  },
  {
    id: "people_1",
    dimension: "people",
    prompt: "How widely is AI actually used today?",
    options: [
      "Not at all",
      "A few individuals, unofficially",
      "Several teams, with some support",
      "Widely, with training and champions",
    ],
  },
  {
    id: "people_2",
    dimension: "people",
    prompt: "How do your people feel about it?",
    options: [
      "Significant resistance",
      "Cautious and uncertain",
      "Generally open to it",
      "Eager, with change capability in place",
    ],
  },
  {
    id: "governance_1",
    dimension: "governance",
    prompt: "Do you have an AI policy people can follow?",
    options: [
      "None at all",
      "Informal or verbal only",
      "Drafted and partly rolled out",
      "Established and communicated",
    ],
  },
  {
    id: "governance_2",
    dimension: "governance",
    prompt: "How is AI risk being managed?",
    options: [
      "Not yet considered",
      "Aware but unmanaged",
      "Some controls in place",
      "Controls aligned to a recognised framework",
    ],
  },
  {
    id: "value_1",
    dimension: "value",
    prompt: "What has actually reached production?",
    options: [
      "Nothing yet",
      "Experiments or demos only",
      "One or two use cases in production",
      "Multiple in production, and measured",
    ],
  },
  {
    id: "value_2",
    dimension: "value",
    prompt: "How do you measure the value it returns?",
    options: [
      "We don't",
      "Anecdotally",
      "Some metrics",
      "Clear return tracked against a baseline",
    ],
  },
];

export const MAX_SCORE = questions.length * 3;
export const MAX_PER_DIMENSION = 6;

export type Band = {
  name: string;
  min: number;
  verdict: string;
  next: string;
  /** The service that most directly addresses this band. */
  service: string;
};

/**
 * Bands describe where an organisation actually is, without flattery. A low
 * score is a normal place to be, and saying so is more useful than grading
 * generously.
 */
export const bands: Band[] = [
  {
    name: "Exploring",
    min: 0,
    verdict:
      "AI is not yet a programme here — it is interest. That is a perfectly normal starting point, and the risk at this stage is committing budget before anyone has agreed what problem is being solved.",
    next: "Start by aligning leadership on where value actually is, before anything is bought.",
    service: "ai-strategy-day",
  },
  {
    name: "Developing",
    min: 11,
    verdict:
      "The intent is real and something is moving, but the foundations are uneven. This is the band where pilots stall — not from lack of technology, but because a question about data or accountability has no answer.",
    next: "Get an evidence-based read on the gaps, and close the ones that actually block delivery.",
    service: "ai-readiness-assessment",
  },
  {
    name: "Operating",
    min: 19,
    verdict:
      "You have working capability and enough governance to defend it. The constraint now is repeatability: making the second and third use case cheaper than the first.",
    next: "Put the guardrails and operating model in place that let this scale past its champions.",
    service: "ai-governance",
  },
  {
    name: "Scaling",
    min: 25,
    verdict:
      "This is a genuine capability, measured and governed. The risk shifts from whether AI works to whether cost, consistency and oversight hold as it spreads.",
    next: "Extend what works to the next team, with controls that stay consistent across them.",
    service: "ai-agents",
  },
];

export function bandFor(score: number): Band {
  return [...bands].reverse().find((b) => score >= b.min) ?? bands[0];
}

export function scoreByDimension(answers: Record<string, number>) {
  return dimensions.map((d) => {
    const qs = questions.filter((q) => q.dimension === d.key);
    const score = qs.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
    return { ...d, score, max: qs.length * 3 };
  });
}

export function totalScore(answers: Record<string, number>) {
  return questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
}

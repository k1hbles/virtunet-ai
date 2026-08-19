/**
 * AI Readiness Check.
 *
 * Ten questions across five dimensions, each answer worth 0–3, so 30 points
 * total and 6 per dimension.
 *
 * Rewritten to be answerable. The previous version asked things like "where
 * is your AI strategy today?", which invites a flattering guess — everybody
 * is somewhere between informal interest and a funded strategy, and nobody
 * knows which. These questions ask about states of the world the reader can
 * actually check: whether a document exists, what an assistant could read
 * today, whether anything is still running, whether anyone's day has changed.
 *
 * The dimensions follow the service journey — Orient, Govern, Build, Adopt —
 * so a low score in one dimension points at a specific stage rather than at a
 * general sense of unpreparedness.
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
  { key: "direction", name: "Direction", blurb: "Whether anyone senior owns this, and whether it is funded." },
  { key: "access", name: "Data & access", blurb: "What an assistant could read on its first day, and whether that is intended." },
  { key: "guardrails", name: "Guardrails", blurb: "Whether there are rules, and whether you could reconstruct a decision afterwards." },
  { key: "delivery", name: "Delivery", blurb: "Whether anything reached production, stayed there, and is costed." },
  { key: "adoption", name: "Adoption", blurb: "Whether anyone's actual work is done differently now." },
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
    id: "direction_1",
    dimension: "direction",
    prompt: "Who signs off an AI project today?",
    options: [
      "Nothing has needed signing off yet",
      "Whoever is paying for it decides",
      "A manager or a committee reviews them",
      "A named executive owns AI, and there is a budget line",
    ],
  },
  {
    id: "direction_2",
    dimension: "direction",
    prompt: "Is there a written plan with dates against it?",
    options: [
      "Nothing written down",
      "A deck, from a while ago",
      "A plan, but without owners or dates",
      "A funded plan with named owners and dates",
    ],
  },
  {
    id: "access_1",
    dimension: "access",
    prompt: "If you switched on an assistant tomorrow, what could it read?",
    options: [
      "We genuinely do not know",
      "Whatever each person can reach, which is more than it should be",
      "Broadly the right things, with known exceptions",
      "Permissions were reviewed and corrected within the last year",
    ],
  },
  {
    id: "access_2",
    dimension: "access",
    prompt: "Where does the data an AI would need actually sit?",
    options: [
      "Scattered, and largely undocumented",
      "We know where it is, but it is siloed across systems",
      "Mostly centralised and reachable",
      "Catalogued, governed and reachable through supported interfaces",
    ],
  },
  {
    id: "guardrails_1",
    dimension: "guardrails",
    prompt: "Is there a written rule about what staff may put into an AI tool?",
    options: [
      "No rule of any kind",
      "People have been told informally",
      "Drafted, but not yet communicated",
      "Published, communicated, and applied when it is breached",
    ],
  },
  {
    id: "guardrails_2",
    dimension: "guardrails",
    prompt: "If an AI system took an action you disagreed with, could you find out why?",
    options: [
      "No",
      "Someone could probably reconstruct it, with effort",
      "It is logged, but nobody reviews the logs",
      "Logged and reviewed, with a named owner accountable for it",
    ],
  },
  {
    id: "delivery_1",
    dimension: "delivery",
    prompt: "What has reached production and is still running?",
    options: [
      "Nothing yet",
      "Things were trialled and then stopped",
      "One use case is running",
      "Several are running, each with an owner",
    ],
  },
  {
    id: "delivery_2",
    dimension: "delivery",
    prompt: "Do you know what a single AI task or agent run costs you?",
    options: [
      "No",
      "We see a total on a monthly bill",
      "We can attribute cost to a use case",
      "We track cost per outcome, and have changed something because of it",
    ],
  },
  {
    id: "adoption_1",
    dimension: "adoption",
    prompt: "Whose day-to-day work is genuinely done differently now?",
    options: [
      "Nobody's",
      "A few enthusiasts, in their own time",
      "One team's, for one kind of work",
      "Several teams', with the process itself redesigned",
    ],
  },
  {
    id: "adoption_2",
    dimension: "adoption",
    prompt: "If the person driving this left next month, what would happen?",
    options: [
      "It would stop",
      "It would fade out over a few months",
      "Two or three others could carry it",
      "It is in how the team works; it would continue",
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
 * generously. Each band names one next move rather than a list.
 */
export const bands: Band[] = [
  {
    name: "Exploring",
    min: 0,
    verdict:
      "AI is interest here rather than a programme, which is the ordinary starting point. The cheapest return available to you is agreement: one hour of leadership alignment is worth more right now than any tool you could buy.",
    next: "Get the leadership team to the same answer on where AI earns its place here, before anything is bought.",
    service: "ai-strategy-day",
  },
  {
    name: "Developing",
    min: 11,
    verdict:
      "Something is moving and the intent is real. The gains from here are mostly unclaimed rather than unavailable: the work is knowing which foundation is actually holding you back, so the next pilot reaches production instead of joining the others.",
    next: "Get an evidence-based read on what is actually blocking delivery, and close those gaps rather than the visible ones.",
    service: "ai-readiness-assessment",
  },
  {
    name: "Operating",
    min: 19,
    verdict:
      "You have something working and enough control to defend it. The return now comes from repeatability: making the second and third use case cheaper than the first, so each one adds capacity rather than another project.",
    next: "Put the governance and operating model in place that lets this scale past the people who built it.",
    service: "ai-governance",
  },
  {
    name: "Scaling",
    min: 25,
    verdict:
      "This is genuine capability, running and measured. The upside from here is scale: moving work to agents that act rather than assist, with a unit cost you can forecast before you commit to it.",
    next: "Extend into the processes where an agent has to act, not just answer, with the limits that makes necessary.",
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

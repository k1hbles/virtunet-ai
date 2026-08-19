/**
 * Insight articles.
 *
 * IMPORTANT — how to change these safely.
 *
 * Every date, named organisation, statute, standard and reported figure below
 * is carried verbatim from the published article on virtunet.ai. None of it is
 * paraphrased, rounded, or inferred. The connective prose around those claims
 * is rewritten for this site's register; the claims themselves are not ours to
 * restate.
 *
 * If you edit an article, treat anything inside `facts` as load-bearing. The
 * full list of dated and attributed claims is reproduced in FACT-CHECK.md for
 * verification before publishing.
 */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "list"; items: string[] };

export type Article = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  /** Dated or attributed claims, listed so they can be checked. */
  facts: string[];
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "australia-national-ai-plan-boards",
    category: "Governance",
    title: "No AI Act for Australia: what light-touch regulation really asks of boards",
    summary:
      "Australia rejected an EU-style AI Act in favour of existing law and voluntary guidance. That is not a reprieve. The first hard deadline lands 10 December 2026.",
    facts: [
      "National AI Plan released December 2025",
      "Rejects a standalone AI Act in the European mould",
      "Establishes an AI Safety Institute in an advisory role",
      "From 10 December 2026, organisations covered by the Privacy Act must disclose in their privacy policies the kinds of personal information used in automated decisions",
      "Voluntary instruments: Australia's AI Ethics Principles, National AI Centre Guidance for AI Adoption",
    ],
    body: [
      {
        kind: "p",
        text: "Australia has made its choice on AI regulation. The National AI Plan, released in December 2025, explicitly rejects a standalone AI Act in the European mould, opting instead for a light-touch approach: existing laws, sector regulators, voluntary guidance, and a new AI Safety Institute in an advisory role.",
      },
      { kind: "h2", text: "What the plan actually decided" },
      {
        kind: "p",
        text: "The plan is candidly pro-adoption. Its stated objectives are to capture AI's economic opportunities, spread the benefits, and keep Australians safe. In that spirit the government walked away from earlier proposals for mandatory guardrails on high-risk AI, relying instead on the laws already in force.",
      },
      { kind: "h2", text: "The deadline hiding in the Privacy Act" },
      {
        kind: "p",
        text: "While the AI Act debate absorbed the headlines, a concrete obligation arrived through privacy reform. From 10 December 2026, organisations covered by the Privacy Act must disclose in their privacy policies the kinds of personal information used in automated decisions, and the kinds of decisions being made.",
      },
      {
        kind: "p",
        text: "That is a documentation obligation with a date attached, and it depends on knowing where automated decisions already happen in your organisation. Most do not.",
      },
      { kind: "h2", text: "Why voluntary guidance still binds you" },
      {
        kind: "p",
        text: "Australia's voluntary instruments (the AI Ethics Principles and the National AI Centre's Guidance for AI Adoption) carry no penalties. They are nonetheless becoming the benchmark against which regulators, courts, insurers and customers assess whether an organisation acted reasonably when a system caused harm.",
      },
      { kind: "h2", text: "What boards should do with this" },
      {
        kind: "list",
        items: [
          "Inventory automated decisions now. Map where algorithms make or substantially assist decisions affecting individuals. The December obligation depends on it.",
          "Assign ownership. Existing-law liability means AI risk already sits with the board, whether or not anyone has been named to hold it.",
          "Align to the national guidance. Mapping your programme to the AI Ethics Principles is cheap insurance and a genuine trust signal.",
          "Watch the horizon. The government has kept the door open to harder rules if harms emerge. Organisations already aligned will barely feel that transition.",
        ],
      },
      {
        kind: "p",
        text: "Australia's bet is that adoption plus existing law beats a heavy new rulebook, and for organisations that govern themselves well that is a favourable environment — less compliance drag, more room to move. The flip side is that the standard of care is set by what a reasonable organisation would have done, and that standard is rising whether or not anyone legislates it.",
      },
    ],
  },
  {
    slug: "agentic-ai-cost-discipline",
    category: "Cost",
    title: "Agentic AI's first budget shock: the year cost discipline arrived",
    summary:
      "Enterprises that raced into agentic AI burned annual budgets in months. The fix is not less AI. It is routing, right-sizing, and measuring cost per outcome.",
    facts: [
      "Through the first half of 2026, enterprises deploying autonomous agents found annual AI budgets could evaporate in months",
      "Uber reportedly consumed its annual budget by April and imposed monthly caps on AI coding tools",
      "Meta moved to rein in usage after describing an exponential increase in costs",
      "Walmart set limits across its AI tooling",
      "Industry analyses put agentic workflows at five to thirty times the token consumption of a simple chat query",
      "AT&T's AI leadership has pointed to savings of up to 90% from steering routine work to smaller models",
    ],
    body: [
      {
        kind: "p",
        text: "The first bills for agentic AI have landed, and they have rattled some of the world's most sophisticated technology buyers. Through the first half of 2026, enterprises that raced to deploy autonomous agents discovered that annual AI budgets could evaporate in months.",
      },
      { kind: "h2", text: "Why agentic costs behave differently" },
      {
        kind: "p",
        text: "A chatbot answers a question and stops. An agent plans, calls tools, reads results, reconsiders and iterates, and every step consumes tokens. Industry analyses this year put agentic workflows at five to thirty times the token consumption of a simple chat query for the same nominal task.",
      },
      { kind: "h2", text: "What the large buyers learned" },
      {
        kind: "p",
        text: "The reporting reads like a case study in bill shock. Uber imposed monthly caps on AI coding tools after reportedly burning its annual budget by April. Meta moved to rein in usage after what it described as an exponential increase in costs. Walmart set limits across its AI tooling.",
      },
      { kind: "h2", text: "Discipline is architecture, not austerity" },
      {
        kind: "p",
        text: "The encouraging part is that the fix is rarely to use less AI. It is to use it deliberately.",
      },
      {
        kind: "list",
        items: [
          "Route by task, not by habit. Most enterprise calls do not need a frontier model. AT&T's AI leadership has pointed to savings of up to 90% from steering routine work to smaller models and reserving premium models for genuinely hard reasoning.",
          "Right-size the whole workflow. Caching, context management and orchestration often move the cost needle more than model choice does.",
          "Measure value, not volume. Tasks completed, hours saved, rework avoided. Cost per outcome, not cost per million tokens.",
          "Give AI spend an owner. Variable cost needs the FinOps treatment cloud eventually got: visibility, budgets per use case, and someone accountable when the curve bends.",
        ],
      },
      {
        kind: "p",
        text: "Every wave of enterprise technology has this moment; cloud had its bill-shock years too. It separates organisations that adopted deliberately from those that adopted enthusiastically.",
      },
    ],
  },
  {
    slug: "five-eyes-ai-cyber-risk-months-not-years",
    category: "Security",
    title: "Five Eyes to boards: AI will reshape cyber risk in months, not years",
    summary:
      "A rare joint statement from all five national cyber agencies, aimed squarely at organisational leaders rather than security teams.",
    facts: [
      "On 22 June 2026 the Five Eyes cyber security agencies issued a joint statement on frontier AI",
      "Includes Australia's Signals Directorate and the Australian Cyber Security Centre, alongside US, UK, Canadian and New Zealand counterparts",
      "The agencies state the timeline 'is not years, it is months'",
      "The statement is published in full on the Australian Cyber Security Centre's website",
    ],
    body: [
      {
        kind: "p",
        text: "On 22 June 2026 the cyber security agencies of the Five Eyes alliance (including Australia's Signals Directorate and the Australian Cyber Security Centre) issued a rare joint statement on frontier AI. Their assessment is blunt: models capable of transforming both cyber attack and cyber defence are arriving on a timeline measured in months.",
      },
      { kind: "h2", text: "What the agencies said" },
      {
        kind: "p",
        text: "Joint statements from all five national agencies are reserved for issues they consider genuinely urgent. This one makes three points worth reading carefully.",
      },
      {
        kind: "list",
        items: [
          "Frontier AI will exceed expectations, soon. The agencies are explicit that the timeline is not years, it is months.",
          "AI lowers the barrier for attackers. Capabilities that once required skilled operators are becoming broadly accessible, increasing the speed, scale and sophistication of attacks.",
          "The exploitation window is shrinking. The gap between a vulnerability being discovered and exploited at scale is collapsing, which makes slow patching a strategic liability rather than a housekeeping issue.",
        ],
      },
      { kind: "h2", text: "A business risk, not an IT ticket" },
      {
        kind: "p",
        text: "The most important framing is not technical. The agencies describe AI-driven cyber risk as a core business risk and direct their recommendations at organisational leaders, not only at security teams.",
      },
      { kind: "h2", text: "The weaknesses AI will find first" },
      {
        kind: "p",
        text: "Notably, the statement does not call for exotic new defences. The vulnerabilities it expects AI to exploit are the familiar ones: legacy systems, slow patching, services needlessly exposed to the internet, weak identity controls, and thin incident-response preparation. AI does not invent new weaknesses so much as find the existing ones faster.",
      },
      {
        kind: "list",
        items: [
          "Assess honestly. Map your exposure, including where AI is already in use, and name an accountable owner.",
          "Close the basics gap fast. Patch cadence, identity controls, internet-facing exposure and incident-response readiness are the four the agencies single out. Measure them, and report them to the board.",
          "Use AI defensively. The same shift that helps attackers can shorten detection and remediation windows, but only where it is adopted deliberately and governed.",
          "Stay engaged. Assumptions about what AI can and cannot do are going stale in months. Build a rhythm of review, not a one-off project.",
        ],
      },
    ],
  },
  {
    slug: "ai-governance-guardrails-before-gas-pedal",
    category: "Governance",
    title: "Guardrails before the gas pedal",
    summary:
      "Governance is not the brake on AI. It is what lets an organisation move faster, because the questions that stall pilots have already been answered.",
    facts: [
      "ISO/IEC 42001: international standard for AI management systems",
      "NIST AI Risk Management Framework",
      "Australia's AI Ethics Principles",
      "The EU AI Act: relevant to organisations operating in or selling into European markets",
    ],
    body: [
      {
        kind: "p",
        text: "Ask most executives about AI governance and they brace for a list of things they will no longer be allowed to do. That instinct is backwards. Done well, governance is not the brake — it is the steering and the seatbelt that make speed survivable.",
      },
      { kind: "h2", text: "Why governance accelerates" },
      {
        kind: "p",
        text: "Organisations stuck in permanent pilot purgatory are rarely held back by technology. They are held back by unanswered questions. Can we trust this output? Who is accountable if it is wrong? Are we allowed to use this data? What happens when a regulator asks? Every one of those, left open, is a reason to delay.",
      },
      { kind: "h2", text: "A risk-tiered framework" },
      {
        kind: "p",
        text: "Effective governance is proportionate. Drafting a marketing email is not approving a loan, and controls should scale with consequence.",
      },
      {
        kind: "list",
        items: [
          "Low risk: productivity assistance with a human firmly in the loop. Light-touch guidance and an acceptable-use policy.",
          "Elevated risk: AI informing decisions affecting customers, finances or staff. Documented oversight, accuracy testing, an accountable owner.",
          "High risk: automated or near-automated decisions in regulated or safety-relevant contexts. Formal assessment, audit trails, human override, board visibility.",
        ],
      },
      { kind: "h2", text: "The standards your board should know" },
      {
        kind: "list",
        items: [
          "ISO/IEC 42001, the international standard for AI management systems, and the most practical backbone for an enterprise programme.",
          "The NIST AI Risk Management Framework, a widely adopted and pragmatic approach to identifying and managing AI risk.",
          "Australia's AI Ethics Principles and the developing guidance on safe and responsible AI, which set the direction local boards will be measured against.",
          "The EU AI Act, relevant to any organisation operating in or selling into European markets.",
        ],
      },
      {
        kind: "p",
        text: "You do not need all of these on day one. You do need a programme that maps to them, so compliance becomes evidence you already hold rather than a fire drill.",
      },
      { kind: "h2", text: "Accountability sits in the boardroom" },
      {
        kind: "p",
        text: "The most important control is not a policy document. It is a named, accountable person. AI does not absorb responsibility; it concentrates it. Boards that delegate AI risk entirely to the IT team are exposed.",
      },
      {
        kind: "p",
        text: "And you cannot govern what you cannot see. The first move is an honest inventory: where AI is already in use, including the tools people adopted without asking, and what data each one touches.",
      },
    ],
  },
  {
    slug: "sustainable-it-meets-the-ai-era",
    category: "Efficiency",
    title: "The discipline that cuts AI cost cuts its carbon",
    summary:
      "The same engineering discipline that cuts AI cost cuts its carbon. Right-sizing is not a compromise between the two. It is the move that serves both.",
    facts: [
      "FinOps and GreenOps as applied disciplines for AI workloads",
    ],
    body: [
      {
        kind: "p",
        text: "Artificial intelligence is the most energy-hungry technology shift in a generation. Every model trained, every query run and every accelerator reserved carries a cost — financial, operational and environmental. Sustainability and AI are not competing priorities here; engineered well, the same discipline serves both.",
      },
      { kind: "h2", text: "AI changes the infrastructure equation" },
      {
        kind: "p",
        text: "Traditional enterprise workloads are relatively predictable. AI is not. Inference traffic is spiky, model choices vary enormously in cost, and it is remarkably easy to leave expensive accelerated compute running idle. Left unmanaged, AI quietly becomes one of the largest and least understood lines in the budget.",
      },
      { kind: "h2", text: "Right-size the model to the job" },
      {
        kind: "p",
        text: "The highest-impact decision in sustainable AI is model selection. Reaching for the largest frontier model for every task is like chartering a freight aircraft to deliver a letter. A great deal of real enterprise work — classification, extraction, routing, summarisation — runs well on far smaller models.",
      },
      {
        kind: "list",
        items: [
          "Match each use case to the smallest model that meets the quality bar.",
          "Use retrieval and good prompts to lift smaller models rather than defaulting to bigger ones.",
          "Cache and reuse results where outputs are stable, instead of recomputing them.",
        ],
      },
      {
        kind: "p",
        text: "The payoff compounds: lower latency, lower cost and lower energy, all from the same engineering decision. That is the argument for treating FinOps and GreenOps as one discipline rather than two.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

/**
 * Anonymised client engagements.
 *
 * Every figure and claim here is taken from the published account of that
 * engagement. Nothing is inferred, rounded up, or filled in — these are
 * public statements about real client work, and an invented number here is
 * a different category of mistake from an invented adjective elsewhere.
 *
 * Identities are withheld by design; referrals are arranged as conversations
 * progress.
 */

export type Outcome = {
  slug: string;
  /** Outcome-first headline. */
  title: string;
  sector: string;
  engagement: string;
  delivery: string;
  /** The one line that carries the result. */
  summary: string;
  /** Up to three headline figures. */
  glance: { figure: string; note: string }[];
  challenge: string[];
  approach: string[];
  result: string[];
  tags: string[];
};

export const outcomeList: Outcome[] = [
  {
    slug: "ai-physical-security-retail",
    title: "Missing children located in seconds, not minutes",
    sector: "Retail property — national shopping centres",
    engagement: "AI physical security, natural-language CCTV search",
    delivery: "Implementation across live centre operations, now in daily use",
    summary:
      "Natural-language search across every camera already installed, with an operator confirming each match.",
    glance: [
      { figure: "~10 sec", note: "to locate a missing child, down from up to 30 minutes" },
      { figure: "Every camera", note: "searched at once from one plain-English description" },
      { figure: "1 hour", note: "expiry on the secure live-feed link sent to parents" },
    ],
    challenge: [
      "Few moments are higher-stakes for a centre operator than a missing child, and the existing process depended entirely on people. A parent had to find the security office, describe the child, and then wait.",
      "With dozens of cameras and thousands of visitors, even skilled operators could take up to thirty minutes. Every one of those minutes tied up the security team and carried real safety risk.",
    ],
    approach: [
      "Applied AI video analytics to the cameras already installed, rather than replacing the estate",
      "Enabled plain-English description as the search input, so no operator training in query syntax was required",
      "Kept a human in the loop: the system surfaces candidates, an operator confirms before any action",
      "Added secure, time-limited live-feed links so parents can be reassured while the reunion happens",
    ],
    result: [
      "Children located in around ten seconds instead of a manual search of up to thirty minutes",
      "Security staff freed from scanning screens to responding — the AI finds, the human confirms and acts",
      "Parents reassured in real time via a link that expires after one hour",
      "A privacy-conscious capability built on existing infrastructure",
    ],
    tags: ["AI video analytics", "Natural-language video search", "Existing CCTV estate", "Time-limited feed sharing"],
  },
  {
    slug: "ai-governance-healthcare",
    title: "From shadow AI to a safe, governed path",
    sector: "Healthcare — multi-site",
    engagement: "AI governance and readiness review",
    delivery: "Structured review, then a contained pilot scope of approved tools",
    summary:
      "Replaced unsanctioned AI use with an approved path staff could actually follow — and unblocked a stalled Copilot evaluation.",
    glance: [
      { figure: "Approved path", note: "a sanctioned way for staff to use AI, replacing shadow usage" },
      { figure: "Signed off", note: "controls endorsed by executive and clinical leadership" },
      { figure: "Unblocked", note: "the organisation's Microsoft Copilot evaluation" },
    ],
    challenge: [
      "Staff were already using AI. Without a sanctioned option they were using whatever they could reach, which meant sensitive information moving through tools nobody had assessed.",
      "Banning it outright would have driven the behaviour further underground, and a Copilot evaluation had stalled because nobody could say what safe looked like.",
    ],
    approach: [
      "Ran a data-handling assessment: what sensitive information exists, where it lives, and how it could leak",
      "Wrote a fit-for-purpose usage policy for clinicians and administrators rather than for lawyers",
      "Embedded human-oversight controls for any output touching patient care or records",
      "Stood up a contained pilot scope of approved tools, so staff had a sanctioned alternative from day one",
    ],
    result: [
      "Governance and risk controls that executive and clinical leadership both signed off",
      "An approved, safe path for staff AI use — replacing shadow usage rather than banning it",
      "A previously stalled Copilot evaluation able to proceed",
    ],
    tags: ["AI governance", "Data-handling assessment", "Usage policy", "Human oversight"],
  },
  {
    slug: "ai-app-development-recycling",
    title: "Application development at half the cost and twice the speed",
    sector: "Recycling and resource recovery — national operator",
    engagement: "AI-assisted application development",
    delivery: "Ongoing delivery model, engineers owning every change that ships",
    summary:
      "The delivery model was taken apart rather than staffed up, with hardening built into the pipeline.",
    glance: [
      { figure: "50%", note: "of the previous application development spend" },
      { figure: "2×", note: "faster delivery than the previous approach" },
      { figure: "Every release", note: "AI-assisted hardening inside the pipeline" },
    ],
    challenge: [
      "Development capacity was the constraint, and the default answer — add people — was both slow and expensive for an organisation whose core business is not software.",
    ],
    approach: [
      "Rebuilt the delivery model rather than adding headcount to the existing one",
      "Used AI to accelerate build, test and documentation while experienced engineers reviewed every change",
      "Moved security hardening into the pipeline instead of leaving it to a pre-release gate",
    ],
    result: [
      "Delivery at roughly half the previous spend",
      "Twice the delivery speed of the prior approach",
      "Security hardening applied on every release rather than at milestones",
    ],
    tags: ["AI-assisted development", "Pipeline hardening", "Engineer review"],
  },
  {
    slug: "agentic-ai-pentesting-education",
    title: "Security assurance on demand, instead of once a year",
    sector: "Education — Australian provider",
    engagement: "Agentic AI for authorised security testing",
    delivery: "Built and handed over to the provider's team",
    summary:
      "Agents that plan, run and document authorised test scenarios inside strict scope guardrails.",
    glance: [
      { figure: "On demand", note: "run whenever the environment changes" },
      { figure: "Minimal", note: "cost per run, against a full engagement fee" },
      { figure: "Human-reviewed", note: "every finding validated before remediation" },
    ],
    challenge: [
      "Engagement-based penetration testing left the provider effectively blind for most of the year, while applications and integrations kept changing underneath them.",
    ],
    approach: [
      "Designed agents that plan, run and document authorised test scenarios",
      "Constrained everything inside strict scope guardrails agreed in advance",
      "Required human review of every finding before any remediation was actioned",
    ],
    result: [
      "Testing available whenever the environment changes rather than on an annual cycle",
      "Marginal cost per run instead of a full engagement fee",
      "Findings validated by a person before action",
    ],
    tags: ["Agentic AI", "Authorised testing", "Scope guardrails"],
  },
  {
    slug: "ai-automation-manufacturing",
    title: "An automation roadmap grounded in real workflows",
    sector: "Manufacturing — national operations",
    engagement: "Automation opportunity assessment",
    delivery: "Workflow mapping, then pilot designs for the top candidates",
    summary:
      "A prioritised backlog built from observed workflow data, with weak candidates killed early.",
    glance: [
      { figure: "Prioritised", note: "backlog grounded in real workflow data" },
      { figure: "Pilot-ready", note: "designs for the strongest cases, human-in-the-loop by default" },
      { figure: "Owned", note: "an implementation plan held by operations, not left on a slide" },
    ],
    challenge: [
      "Automation candidates were plentiful and unranked, which meant the loudest idea tended to win rather than the most valuable one.",
    ],
    approach: [
      "Mapped workflows with the people who do the work — volumes, exceptions, systems touched",
      "Ranked every candidate by business value, delivery risk and data readiness, killing weak ones early",
      "Designed pilots for the strongest cases, defining exactly where an agent fits and where a human stays",
      "Delivered a sequenced implementation plan, costed at planning level, that operations owns",
    ],
    result: [
      "A prioritised automation backlog grounded in workflow data rather than vendor promises",
      "Pilot designs with human-in-the-loop checkpoints where they matter",
      "A practical next-step plan owned by operations",
    ],
    tags: ["Workflow mapping", "Opportunity assessment", "Pilot design"],
  },
  {
    slug: "ai-roadmap-financial-services",
    title: "An AI strategy every department could execute",
    sector: "Financial services — enterprise",
    engagement: "AI readiness assessment and cross-department strategy",
    delivery: "Readiness assessment first, then department-by-department strategy",
    summary:
      "Readiness established honestly, data prepared, then a strategy sequenced so ready teams could move first.",
    glance: [
      { figure: "2023", note: "an early adopter, moving ahead of its industry" },
      { figure: "Data-ready", note: "foundations prepared before AI was scaled" },
      { figure: "Every department", note: "a tailored strategy, sequenced by readiness" },
    ],
    challenge: [
      "Ambition was ahead of the industry, which is an advantage only if the data underneath can support it. Moving every department at once would have exposed the ones that were not ready.",
    ],
    approach: [
      "Assessed readiness across the organisation before committing to a direction",
      "Focused on data preparation, making sure the data behind each use case was fit to build on",
      "Tailored a strategy per department, sequenced so ready teams moved first",
    ],
    result: [
      "A clear, honest picture of readiness across the organisation",
      "Data prepared as the foundation for safe, useful AI",
      "A practical strategy spanning departments, with leadership aligned on the sequence",
    ],
    tags: ["AI readiness framework", "Data preparation", "Cross-department strategy"],
  },
  {
    slug: "ai-enablement-hotel",
    title: "Turning paid-for Copilot licences into everyday productivity",
    sector: "Hospitality — international",
    engagement: "Role-based AI enablement and a guest-service experiment",
    delivery: "Team-by-team enablement, plus a contained guest-service pilot",
    summary:
      "Enablement matched to how each team actually works, captured into playbooks that outlast the sessions.",
    glance: [
      { figure: "Role-based", note: "enablement across front desk, operations, finance and marketing" },
      { figure: "Fuller use", note: "of the Copilot licences already being paid for" },
      { figure: "After hours", note: "AI-avatar guest-service pilot for unstaffed periods" },
    ],
    challenge: [
      "The licences were already bought and largely unused — the common shape of Copilot disappointment, where cost is committed before anyone has shown a team what it is for.",
    ],
    approach: [
      "Mapped how each team actually works and where AI saves time in those specific workflows",
      "Delivered enablement team by team rather than as a single all-staff session",
      "Captured what worked into simple team playbooks so adoption keeps compounding",
      "Ran a contained pilot of AI avatars for guest service outside staffed hours",
    ],
    result: [
      "Teams getting materially more value from licences already being paid for",
      "Role-specific habits that stick, because the training matched real work",
      "A tested view of where AI avatars could extend guest service beyond staffed hours",
    ],
    tags: ["Microsoft Copilot", "Role-based enablement", "Team playbooks", "AI avatars (pilot)"],
  },
  {
    slug: "ai-edge-content-creation-studio",
    title: "AI content generation at the edge, on the right devices",
    sector: "Creative and media production",
    engagement: "Edge-AI device enablement for a creative team",
    delivery: "Role-based Copilot+ PC rollout with on-device tooling and enablement",
    summary:
      "Generative work running locally on Copilot+ NPUs, so client footage never leaves the machine.",
    glance: [
      { figure: "On device", note: "generative AI running locally on Copilot+ NPUs, no cloud queue" },
      { figure: "IP-local", note: "client footage and prompts stay on the creative's machine" },
      { figure: "Future-ready", note: "positioned for RTX-powered AI laptops as they land" },
    ],
    challenge: [
      "Creative work with client footage is exactly the case where routing everything through the cloud is both slow and commercially awkward.",
    ],
    approach: [
      "Profiled how each role actually works — the models run, the file sizes pushed, where cloud routing hurt",
      "Matched Copilot+ hardware to those profiles rather than issuing one standard build",
      "Set up on-device AI tooling and enabled the team on it",
    ],
    result: [
      "Generative work running locally, without waiting on a cloud queue",
      "Client footage and prompts remaining on the creative's own machine",
      "A fleet positioned for the next generation of AI laptops",
    ],
    tags: ["Copilot+ PCs", "On-device inference", "Edge AI"],
  },
];

export const getOutcome = (slug: string) => outcomeList.find((o) => o.slug === slug);

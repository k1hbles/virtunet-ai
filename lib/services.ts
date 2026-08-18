/**
 * The service catalogue, and the journey it hangs off.
 *
 * Facts, credentials and structure are carried over from virtunet.ai; the
 * prose is rewritten to match this site's register. Every service belongs to
 * exactly one stage, which is what makes thirteen services read as five
 * moves rather than a list.
 */

export type Stage = {
  slug: string;
  name: string;
  index: number;
  summary: string;
};

export const stages: Stage[] = [
  {
    slug: "strategise",
    name: "Strategise",
    index: 1,
    summary: "Agree where AI creates value, what it costs, and whether you are ready.",
  },
  {
    slug: "govern",
    name: "Govern",
    index: 2,
    summary: "Put the policy, controls and security in place that make AI safe to approve.",
  },
  {
    slug: "prepare",
    name: "Prepare",
    index: 3,
    summary: "Get the data, devices and workspaces ready for the work to actually land.",
  },
  {
    slug: "implement",
    name: "Implement",
    index: 4,
    summary: "Ship governed capability your people use — measured, not demonstrated.",
  },
  {
    slug: "adopt",
    name: "Adopt & scale",
    index: 5,
    summary: "Build the habit and the capability, then extend what worked to the next team.",
  },
];

export type Service = {
  slug: string;
  title: string;
  stage: string;
  kicker: string;
  /** One line. Used on the index, in cards, and as the meta description. */
  summary: string;
  /** Two or three paragraphs framing the problem. */
  intro: string[];
  /** What the client is left holding. */
  outcomes: string[];
  /** The engagement, in four moves. */
  steps: { name: string; body: string }[];
  /** Concrete artefacts, where the service produces them. */
  deliverables?: string[];
};

export const services: Service[] = [
  {
    slug: "ai-strategy-day",
    title: "AI Strategy Day",
    stage: "strategise",
    kicker: "One day",
    summary:
      "A facilitated day that turns AI ambition into a plan your board can fund.",
    intro: [
      "Most organisations do not have an AI problem. They have an alignment problem. Leaders can see the potential, but priorities scatter, pilots stall, and the risk team hesitates because nobody has written down what good looks like.",
      "A Virtu strategist runs your leadership team through a single structured day: where AI creates real value here, what is safe to do now, and the sequence of moves that builds momentum without betting the firm.",
    ],
    outcomes: [
      "An executive-level agreement on where AI creates value in your organisation",
      "A shortlist of three to five high-value, low-risk opportunities",
      "A twelve-month sequenced roadmap with owners, guardrails and measures",
      "Clear answers on data readiness, governance and the investment required",
    ],
    steps: [
      { name: "Frame", body: "Align on objectives, constraints and what good looks like here." },
      { name: "Explore", body: "Map opportunities across productivity, customer experience, risk and growth." },
      { name: "Prioritise", body: "Score each one against value, feasibility, data readiness and risk." },
      { name: "Commit", body: "Agree the first moves, the owners, the guardrails and the measures." },
    ],
    deliverables: [
      "Value and opportunity map",
      "Prioritised shortlist with scoring",
      "Twelve-month sequenced roadmap",
      "Headline business case and investment guide",
      "Recommended governance guardrails",
    ],
  },
  {
    slug: "ai-readiness-assessment",
    title: "AI Readiness Assessment",
    stage: "strategise",
    kicker: "Evidence",
    summary:
      "A structured read on strategy, data, technology, people and governance — with a costed plan to close the gaps.",
    intro: [
      "Readiness is the question that decides whether an AI programme becomes capability or a series of stalled pilots. It is also the question most organisations answer by instinct.",
      "We score five dimensions against evidence — interviews, platform review, data and access mapping — and hand back the gaps in priority order, with what it costs to close each one.",
    ],
    outcomes: [
      "An objective readiness score across five dimensions",
      "A clear view of what stands between you and safe adoption",
      "A prioritised, costed plan to close those gaps",
      "The confidence to invest, or the evidence to wait",
    ],
    steps: [
      { name: "Discover", body: "Stakeholder interviews and a review of data, platforms and current initiatives." },
      { name: "Assess", body: "Score strategy, data and technology, people, and governance against evidence." },
      { name: "Diagnose", body: "Identify the gaps that actually block progress, separated from the noise." },
      { name: "Plan", body: "Sequence and cost the remediation so it can be funded." },
    ],
    deliverables: [
      "Readiness scorecard across five dimensions",
      "Gap analysis with severity and effort",
      "Prioritised remediation plan",
    ],
  },
  {
    slug: "ai-governance",
    title: "AI Governance & Assurance",
    stage: "govern",
    kicker: "Guardrails",
    summary:
      "The policies, controls and oversight that let you move quickly without crossing security, privacy or compliance lines.",
    intro: [
      "Shadow AI, data leakage, biased outputs and unclear accountability are board-level risks now, not hypotheticals. Governance is what converts a nervous maybe into a defensible yes.",
      "We write policy your people can actually follow, put controls behind it, and define who is accountable when a model is wrong — aligned to Australia's AI Ethics Principles and informed by ISO/IEC 42001 and the NIST AI Risk Management Framework.",
    ],
    outcomes: [
      "A practical AI policy and acceptable-use standard people will follow",
      "Risk controls covering data, security, privacy and model use",
      "Oversight and accountability your board can point at",
      "The ability to approve AI, safely",
    ],
    steps: [
      { name: "Assess", body: "Review current AI use, shadow AI exposure, data flows and risk appetite." },
      { name: "Define", body: "Write the policy, the acceptable-use standard and the review path." },
      { name: "Implement", body: "Put the technical and process controls behind the policy." },
      { name: "Enable", body: "Brief the people who have to apply it, and set the review cadence." },
    ],
    deliverables: [
      "AI policy and acceptable-use standard",
      "Risk register and control mapping",
      "Governance operating model with named accountabilities",
    ],
  },
  {
    slug: "ai-cybersecurity",
    title: "AI for Cybersecurity",
    stage: "govern",
    kicker: "Machine speed",
    summary:
      "AI-driven detection, response and SOC augmentation, aligned to zero trust and your Australian compliance obligations.",
    intro: [
      "Attackers adopted automation first. Detection that depends on an analyst reading every alert is already losing on volume alone.",
      "We apply AI where it measurably helps — triage, correlation, routine response — and leave human judgement where consequence demands it.",
    ],
    outcomes: [
      "Faster detection and response across the environment",
      "Routine, high-volume alerts handled automatically",
      "Analysts working real threats instead of false positives",
      "Capabilities aligned to zero trust and compliance obligations",
    ],
    steps: [
      { name: "Assess", body: "Review current detection, response and security posture." },
      { name: "Design", body: "Decide where automation helps and where a human must stay in the loop." },
      { name: "Implement", body: "Deploy into your existing stack rather than alongside it." },
      { name: "Operate", body: "Tune against real signal, and keep tuning." },
    ],
  },
  {
    slug: "ai-ready-devices",
    title: "AI-Ready Devices",
    stage: "prepare",
    kicker: "Fleet",
    summary:
      "Copilot+ PCs and Microsoft Surface, deployed securely — with the old fleet retired responsibly.",
    intro: [
      "On-device AI is where the technology meets the everyday. It also fails quietly when the hardware underneath it cannot run the models.",
      "We match silicon to roles, deploy zero-touch, and retire what is replaced with certified data destruction — the lifecycle discipline Virtu has applied since long before AI.",
    ],
    outcomes: [
      "A fleet ready for Copilot and on-device AI, matched to each role",
      "Faster, more private inference running on the device's NPU",
      "Zero-touch secure deployment via Windows Autopilot and Intune",
      "Old hardware retired sustainably, with certified data destruction",
    ],
    steps: [
      { name: "Assess", body: "Audit the fleet, the roles and the Windows estate to map who needs what, and when." },
      { name: "Specify", body: "Match AI silicon to actual workloads rather than to a single standard build." },
      { name: "Deploy", body: "Zero-touch provisioning through Autopilot and Intune." },
      { name: "Retire", body: "Sustainable disposal with certified data destruction and reporting." },
    ],
  },
  {
    slug: "ai-collaboration",
    title: "AI Collaboration",
    stage: "prepare",
    kicker: "Rooms",
    summary:
      "Meeting rooms where every voice is recognised, every word attributed, and the recap is worth reading.",
    intro: [
      "Hybrid meetings fail in the room, not in the software. A full room with one microphone produces a transcript nobody trusts and a recap nobody reads.",
      "We inspect each space, design to a certified standard, and set up consent and retention properly before anything records a word.",
    ],
    outcomes: [
      "Rooms your people choose over their desks",
      "Accurate, speaker-attributed transcripts and recaps, even with a full room",
      "One certified room standard across every space and platform",
      "Biometric consent, retention and recording governance handled from day one",
    ],
    steps: [
      { name: "Inspect", body: "On site within two business days to assess each room and what is reusable." },
      { name: "Design", body: "A certified design per space, consistent across your platform mix." },
      { name: "Deliver", body: "Installation and integration to a single standard." },
      { name: "Enable", body: "Turn on the AI features, with consent and retention configured first." },
    ],
  },
  {
    slug: "ai-90-day-accelerator",
    title: "90-Day AI Accelerator",
    stage: "implement",
    kicker: "90 days",
    summary:
      "One high-value use case, live and in daily use within ninety days — measured, governed, and ready to repeat.",
    intro: [
      "The gap between a roadmap and a working capability is where most AI programmes quietly end. The accelerator exists to close it once, visibly, so the second one is easier to fund.",
      "A joint squad, a fixed scope, and guardrails built in rather than bolted on at review.",
    ],
    outcomes: [
      "One high-value use case live and in daily use within ninety days",
      "Security, governance and guardrails built in from the start",
      "Measured business impact you can take to your board",
      "A repeatable playbook for the next use case",
    ],
    steps: [
      { name: "Mobilise", body: "Confirm the use case, the success measures, the guardrails and the joint squad." },
      { name: "Build", body: "Ship working capability in short increments, reviewed as it goes." },
      { name: "Adopt", body: "Put it in front of real users and support the change." },
      { name: "Measure", body: "Report honestly against the measures agreed on day one, then scale." },
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    stage: "implement",
    kicker: "Autonomy",
    summary:
      "Agents that do real work across IT, HR, finance and service — grounded, guardrailed and under your control.",
    intro: [
      "An agent that impresses in a demo and cannot be trusted with a real decision is a liability, not a capability.",
      "We scope agents against work that genuinely repeats, ground them in your own knowledge, and define exactly where a person must confirm before anything happens.",
    ],
    outcomes: [
      "Agents that complete real, valuable tasks rather than demonstrations",
      "Grounded, accurate responses drawn from your own knowledge",
      "Guardrails, approvals and audit trails built in",
      "A safe path from assisted to autonomous",
    ],
    steps: [
      { name: "Scope", body: "Choose high-value use cases and set the human-oversight boundaries." },
      { name: "Ground", body: "Connect the agent to your knowledge, with permissions respected." },
      { name: "Guardrail", body: "Define approvals, limits and the audit trail before deployment." },
      { name: "Deploy", body: "Release to real users, evaluate against real outcomes, and tune." },
    ],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    stage: "implement",
    kicker: "Throughput",
    summary:
      "Automating document, approval and service workflows with the Power Platform and modern AI.",
    intro: [
      "Most organisations know exactly which process wastes the most time. What stops them is that automating it properly touches three systems and two teams.",
      "We quantify the cost first, then build automations that integrate with what you already run — governed, monitored and handed over.",
    ],
    outcomes: [
      "Hours of manual work removed from high-volume processes",
      "Fewer errors and faster turnaround on approvals and requests",
      "Automations that integrate with the systems you already run",
      "A governed automation practice you can expand yourself",
    ],
    steps: [
      { name: "Discover", body: "Map candidate processes and quantify the time and error cost." },
      { name: "Design", body: "Choose what to automate, what to simplify, and what to leave alone." },
      { name: "Build", body: "Deliver into your existing platforms with monitoring in place." },
      { name: "Scale", body: "Hand over the practice so your team can extend it." },
    ],
  },
  {
    slug: "ai-service-desk",
    title: "AI-Powered Service Desk",
    stage: "implement",
    kicker: "Support",
    summary:
      "AI triage, self-service and assisted resolution that cut ticket times without losing the human touch.",
    intro: [
      "Service desks fail on volume and repetition, not on capability. The same twenty questions consume the time that the difficult ones deserve.",
      "We start from your ticket data, automate what genuinely repeats, and give agents suggested answers for everything else.",
    ],
    outcomes: [
      "More tickets resolved without a human, accurately",
      "Faster triage, routing and first response",
      "Agents equipped with suggested answers and next actions",
      "Higher satisfaction for users and staff alike",
    ],
    steps: [
      { name: "Assess", body: "Analyse ticket data to find the highest-volume, best-fit use cases." },
      { name: "Design", body: "Decide what is deflected, what is assisted, and what always reaches a person." },
      { name: "Integrate", body: "Connect to your service management platform and knowledge base." },
      { name: "Optimise", body: "Tune deflection against satisfaction, not just against volume." },
    ],
  },
  {
    slug: "ai-physical-security",
    title: "AI Physical Security",
    stage: "implement",
    kicker: "Seconds",
    summary:
      "Natural-language video search across every camera you already own, turning passive surveillance into response.",
    intro: [
      "Most CCTV estates are recording far more than anyone can watch. The footage is there; finding the moment that matters is the problem.",
      "Security staff describe who they are looking for in plain English, every camera is searched at once, and an operator confirms each match before anything is acted on.",
    ],
    outcomes: [
      "People and incidents located in seconds rather than minutes of screen-scanning",
      "Security teams freed to respond instead of watch",
      "Access-control anomalies surfaced as they happen",
      "Privacy-conscious design with human oversight of every action",
    ],
    steps: [
      { name: "Assess", body: "Review the CCTV and access-control estate, control-room workflow and priorities." },
      { name: "Design", body: "Decide what is searched, what is retained, and who may act on it." },
      { name: "Implement", body: "Deploy against the cameras already installed wherever possible." },
      { name: "Enable", body: "Train the control room and set the privacy governance." },
    ],
  },
  {
    slug: "microsoft-copilot-adoption",
    title: "Microsoft Copilot Adoption",
    stage: "adopt",
    kicker: "Microsoft 365",
    summary:
      "Turning Copilot licences into measurable productivity — with the data readiness and change management that decide whether it lands.",
    intro: [
      "Copilot rarely fails for technical reasons. It fails because the tenant overshares, the data is untrustworthy, or nobody showed people what it is actually for.",
      "We fix the permissions before go-live, build role-based use cases people recognise, and measure whether anyone is still using it in month three.",
    ],
    outcomes: [
      "Copilot deployed on a secure, correctly permissioned tenant",
      "Sensitive data protected from oversharing before go-live",
      "Role-based use cases that show people exactly how it helps them",
      "Measured productivity gains rather than activated licences",
    ],
    steps: [
      { name: "Assess", body: "Review licences, tenant configuration, data access and the top use cases." },
      { name: "Secure", body: "Close oversharing and fix permissions before anyone is switched on." },
      { name: "Enable", body: "Role-based enablement, so people learn it against their own work." },
      { name: "Measure", body: "Track real usage and outcomes, and act on what the numbers say." },
    ],
  },
  {
    slug: "ai-training-enablement",
    title: "AI Training & Enablement",
    stage: "adopt",
    kicker: "Capability",
    summary:
      "Role-based workshops and enablement that build lasting capability, not one-off enthusiasm.",
    intro: [
      "Adoption fails on change management far more often than on technology. A tool nobody was taught to use is indistinguishable from a tool that does not work.",
      "We teach against the work people actually do, build a network of champions who sustain it, and brief leaders so they can guide rather than mandate.",
    ],
    outcomes: [
      "People who know how to use AI safely and effectively",
      "Role-based skills that apply to real, daily work",
      "A network of champions who sustain adoption after we leave",
      "Leaders equipped to guide AI in their teams",
    ],
    steps: [
      { name: "Assess", body: "Understand roles, tools and current confidence levels." },
      { name: "Design", body: "Build the curriculum around real tasks, not features." },
      { name: "Deliver", body: "Workshops, literacy sessions and executive briefings." },
      { name: "Sustain", body: "Stand up champions and a centre of excellence to keep it going." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const servicesByStage = (stage: string) => services.filter((s) => s.stage === stage);
export const getStage = (slug: string) => stages.find((s) => s.slug === slug);

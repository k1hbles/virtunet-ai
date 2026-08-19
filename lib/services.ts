/**
 * The service catalogue, and the journey it hangs off.
 *
 * This is virtunet.ai's offer, not virtu.net's. Hardware distribution,
 * procurement, licensing and device lifecycle belong to virtu.net; what
 * survives here is the compute AI actually runs on, in the Run stage.
 *
 * The five stages are a sequence, and every service belongs to exactly one,
 * which is what makes eleven services read as five moves rather than a list.
 *
 * The service mix is a positioning decision rather than a record of work
 * already sold. That is deliberate and agreed. It does not extend to facts:
 * no client outcomes, partner tiers, certifications or statistics are
 * invented anywhere in this file.
 */

export type Stage = {
  slug: string;
  name: string;
  index: number;
  summary: string;
};

export const stages: Stage[] = [
  {
    slug: "orient",
    name: "Orient",
    index: 1,
    summary: "Agree where AI earns its place here, and whether you are ready to put it there.",
  },
  {
    slug: "govern",
    name: "Govern",
    index: 2,
    summary: "Decide what an agent is allowed to do, and be able to show why afterwards.",
  },
  {
    slug: "build",
    name: "Build",
    index: 3,
    summary: "Put agents and automation into the work itself, not into a demo.",
  },
  {
    slug: "adopt",
    name: "Adopt",
    index: 4,
    summary: "Change how the work is done, because a tool nobody's habits changed is shelfware.",
  },
  {
    slug: "run",
    name: "Run",
    index: 5,
    summary: "The compute underneath it, sized for what you actually run and what it costs.",
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
  /* ---------------------------------------------------------------- orient */
  {
    slug: "ai-strategy-day",
    title: "AI Strategy Day",
    stage: "orient",
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
    stage: "orient",
    kicker: "Evidence",
    summary:
      "A structured read on whether your data, permissions, governance and people can carry AI — with a costed plan to close the gaps.",
    intro: [
      "Readiness is the question that decides whether an AI programme becomes capability or a series of stalled pilots. It is also the question most organisations answer by instinct.",
      "We assess against evidence rather than opinion: interviews, a platform and permissions review, and a look at what your data would actually expose to an assistant that can read everything a user can. The gaps come back in priority order, with what it costs to close each one.",
    ],
    outcomes: [
      "An objective read across strategy, data, permissions, people and governance",
      "A clear view of what stands between you and safe adoption",
      "A prioritised, costed plan to close those gaps",
      "The confidence to invest, or the evidence to wait",
    ],
    steps: [
      { name: "Discover", body: "Stakeholder interviews and a review of data, platforms and current initiatives." },
      { name: "Assess", body: "Test strategy, data and permissions, people, and governance against evidence." },
      { name: "Diagnose", body: "Identify the gaps that actually block progress, separated from the noise." },
      { name: "Plan", body: "Sequence and cost the remediation so it can be funded." },
    ],
    deliverables: [
      "Readiness findings across five dimensions",
      "Permissions and data exposure review",
      "Prioritised gap register",
      "Costed remediation plan",
    ],
  },

  /* ---------------------------------------------------------------- govern */
  {
    slug: "ai-governance",
    title: "AI & Agent Governance",
    stage: "govern",
    kicker: "Guardrails",
    summary:
      "Policy, controls and oversight for systems that now act, not just answer.",
    intro: [
      "Governance written for chatbots does not survive contact with agents. An assistant that drafts an email is a different risk from one that can send it, move money, change a record or call another system on your behalf.",
      "We put the guardrails in place for both: an acceptable-use standard people can actually follow, a register of what is running, and defined limits on what each agent may do, with whom, and under whose authority.",
    ],
    outcomes: [
      "A practical AI and agent policy your people can follow",
      "A register of what is deployed, what it can reach, and who owns it",
      "Defined authority limits and human review points for consequential actions",
      "An audit trail that answers 'why did it do that' after the fact",
    ],
    steps: [
      { name: "Baseline", body: "Find what is already running, including what nobody approved." },
      { name: "Frame", body: "Set policy and authority limits proportionate to the risk of each use." },
      { name: "Instrument", body: "Put logging, review points and escalation paths in place." },
      { name: "Embed", body: "Hand it to the people who will operate it, and test that it holds." },
    ],
    deliverables: [
      "AI and agent acceptable-use policy",
      "Agent register and ownership model",
      "Authority and escalation matrix",
      "Audit and logging standard",
    ],
  },
  {
    slug: "ai-ethics",
    title: "Responsible AI & Ethics",
    stage: "govern",
    kicker: "Defensible",
    summary:
      "Fairness, transparency and contestability built into the decision, not reviewed after it.",
    intro: [
      "Ethics becomes concrete the moment an AI system affects a person — who gets shortlisted, who gets flagged, whose claim is delayed. At that point somebody has to be able to explain the decision, and somebody has to be able to challenge it.",
      "We align the work to Australia's AI Ethics Principles and to recognised frameworks, then do the unglamorous part: deciding which decisions need a human in the loop, what gets disclosed, and how a person contests an outcome and reaches someone with the authority to change it. The position this is built on is set out in full on our responsible AI page.",
    ],
    outcomes: [
      "Impact assessments for the uses that actually affect people",
      "Meaningful human oversight where the stakes justify it",
      "Disclosure and contestability paths that work in practice",
      "A defensible position when a regulator, board or customer asks",
    ],
    steps: [
      { name: "Identify", body: "Find the uses with human consequence, and rank them by impact." },
      { name: "Assess", body: "Work through fairness, transparency, privacy and contestability for each." },
      { name: "Design", body: "Set oversight, disclosure and appeal paths proportionate to the impact." },
      { name: "Review", body: "Establish the cadence that keeps the position current as things change." },
    ],
    deliverables: [
      "AI impact assessment template and completed first assessments",
      "Human oversight and disclosure standard",
      "Contestability and appeal process",
      "Review cadence and owners",
    ],
  },
  {
    slug: "securing-ai",
    title: "Securing AI",
    stage: "govern",
    kicker: "Zero trust",
    summary:
      "Protecting the AI you deploy — data boundaries, agent permissions, prompt injection and shadow AI.",
    intro: [
      "An assistant inherits the permissions of whoever is using it, which means an over-shared drive becomes a data incident the first week an assistant is switched on. An agent with tool access widens that again: it can be talked into acting by content it merely reads.",
      "This is security work, not policy work. We tighten permissions before the rollout rather than after it, constrain what agents can reach, test for prompt injection and exfiltration, and surface the AI already in use that nobody approved.",
    ],
    outcomes: [
      "Permissions corrected before an assistant is switched on, not after",
      "Agent access scoped to the minimum each task needs",
      "Tested resistance to prompt injection and data exfiltration",
      "Visibility of shadow AI, and a route to bring it inside the tent",
    ],
    steps: [
      { name: "Expose", body: "Map what an assistant would be able to read today, per user and per site." },
      { name: "Contain", body: "Remediate over-sharing and scope agent credentials to least privilege." },
      { name: "Test", body: "Adversarial testing for injection, leakage and unintended tool use." },
      { name: "Monitor", body: "Detection for shadow AI and for agent behaviour that drifts." },
    ],
    deliverables: [
      "Data exposure and permissions report",
      "Least-privilege access model for agents",
      "Adversarial test findings and fixes",
      "Shadow AI discovery and monitoring",
    ],
  },

  /* ----------------------------------------------------------------- build */
  {
    slug: "ai-agents",
    title: "AI Agents",
    stage: "build",
    kicker: "Autonomous",
    summary:
      "Agents that do real work across your systems, with the limits and oversight to let them.",
    intro: [
      "An agent is only useful when it can act — read the ticket, check the system of record, take the step, and hand back what it could not finish. That is also exactly when it stops being a demo and starts being something you have to govern.",
      "We design, build and deploy agents against a specific process you can measure, with scoped credentials, defined authority limits and a clean handover to a person when the agent reaches the edge of what it should decide.",
    ],
    outcomes: [
      "Agents deployed against a named process, with a measured baseline",
      "Scoped permissions and explicit limits on consequential actions",
      "Clean escalation to a person, with the context they need",
      "A running cost you can forecast before you scale it",
    ],
    steps: [
      { name: "Select", body: "Choose a process where the work is high-volume and the success test is objective." },
      { name: "Design", body: "Map the steps, the tools, the authority limits and the handover points." },
      { name: "Build", body: "Implement against your systems, then evaluate against real cases, not samples." },
      { name: "Operate", body: "Deploy with monitoring, cost controls and a review cadence." },
    ],
    deliverables: [
      "Process baseline and success measures",
      "Agent design with authority limits",
      "Evaluation results against real cases",
      "Runbook, monitoring and unit-cost model",
    ],
  },
  {
    slug: "ai-workflow-automation",
    title: "Workflow Automation",
    stage: "build",
    kicker: "Throughput",
    summary:
      "Removing the repetitive middle of document, approval and service workflows.",
    intro: [
      "Most of the time lost in an organisation is not lost to hard problems. It is lost to re-keying, chasing, checking and routing — work that is too varied for a rule and too dull for a person.",
      "We automate that middle: intake and classification, extraction from documents, routing and approval, and the service requests that arrive the same way a thousand times a year. The measure is cycle time and rework, not how clever the model is.",
    ],
    outcomes: [
      "Cycle time reduced on a workflow you already measure",
      "Fewer handoffs, and less rework caused by them",
      "Exceptions routed to people with the context already assembled",
      "A pattern the next workflow can reuse cheaply",
    ],
    steps: [
      { name: "Map", body: "Trace the workflow as it actually runs, including the workarounds." },
      { name: "Target", body: "Pick the steps where volume and variance both justify automating." },
      { name: "Automate", body: "Build, integrate and test against live volume." },
      { name: "Measure", body: "Compare against the baseline and tune what the numbers show." },
    ],
    deliverables: [
      "Current-state workflow map with timings",
      "Automation built and integrated",
      "Exception handling and escalation design",
      "Before-and-after measurement",
    ],
  },
  {
    slug: "agentic-engineering",
    title: "Agentic Engineering",
    stage: "build",
    kicker: "Claude Code, Codex",
    summary:
      "Getting agentic coding tools into your engineering org safely, and getting real throughput out of them.",
    intro: [
      "Agentic coding tools change how software gets built, and most engineering organisations are adopting them one developer at a time, with no shared standard for what the agent may touch, what gets reviewed, and what never leaves the machine.",
      "We set that up deliberately: which repositories and environments agents can reach, how their changes are reviewed, what the secrets and data rules are, and how the team works so the tool raises throughput instead of raising review load.",
    ],
    outcomes: [
      "Agentic coding adopted with a standard, not one developer at a time",
      "Clear rules on repository access, secrets and what leaves the environment",
      "Review practice adapted so throughput rises rather than review queues",
      "Measured change in cycle time and change failure rate",
    ],
    steps: [
      { name: "Assess", body: "Review the codebase, the environments, and how the team already works." },
      { name: "Scope", body: "Set access boundaries, secret handling and the review standard." },
      { name: "Enable", body: "Roll out with the team, working on real tickets rather than exercises." },
      { name: "Measure", body: "Track cycle time, review load and change failure rate against baseline." },
    ],
    deliverables: [
      "Agent access and secrets standard",
      "Review and merge practice for agent-authored change",
      "Enablement with the engineering team",
      "Baseline and post-adoption measurement",
    ],
  },

  /* ----------------------------------------------------------------- adopt */
  {
    slug: "ai-native-work",
    title: "AI-Native Knowledge Work",
    stage: "adopt",
    kicker: "Ways of working",
    summary:
      "Rebuilding how a team actually works around AI-native tools, rather than bolting them onto the old process.",
    intro: [
      "The tools are on everyone's desk and almost nobody's work has changed. That is the honest state of most AI rollouts: licences issued, training delivered, and the same process running underneath at the same speed.",
      "This is the work of changing the process itself. We take a specific team and a specific set of deliverables, rebuild how that work is produced with AI-native tooling in the middle of it, and leave the team with a way of working they can defend to their own peers.",
    ],
    outcomes: [
      "A named team producing its actual deliverables a different way",
      "Prompts, context and shared practice that belong to the team, not to individuals",
      "The quality bar defined, so faster does not quietly mean worse",
      "An internal example that makes the next team cheaper to move",
    ],
    steps: [
      { name: "Choose", body: "Pick one team and one recurring deliverable with a real quality bar." },
      { name: "Rebuild", body: "Redesign how that deliverable gets produced, with the team in the room." },
      { name: "Embed", body: "Run it live for a cycle, and fix what breaks in practice." },
      { name: "Spread", body: "Capture the practice so the next team starts from it." },
    ],
    deliverables: [
      "Redesigned workflow for a real deliverable",
      "Shared prompt and context library",
      "Quality standard and review approach",
      "Written practice for the next team",
    ],
  },
  {
    slug: "ai-training-enablement",
    title: "AI Training & Enablement",
    stage: "adopt",
    kicker: "Capability",
    summary:
      "Practical capability across executives, managers and the people doing the work — pitched differently for each.",
    intro: [
      "Generic AI training produces enthusiasm and very little change. Executives need to make investment and risk decisions, managers need to redesign how their team works, and practitioners need to be good at the thing in front of them. Those are three different sessions.",
      "We run all three against your own work, not worked examples, and leave champions inside the business who can carry it after we go.",
    ],
    outcomes: [
      "Executives able to judge an AI proposal and its risk",
      "Managers able to redesign a workflow rather than just permit a tool",
      "Practitioners competent on the work they actually do",
      "Named champions with the material to keep it going",
    ],
    steps: [
      { name: "Pitch", body: "Set the level and content for each audience against their real decisions." },
      { name: "Deliver", body: "Run the sessions using your own documents, tickets and cases." },
      { name: "Apply", body: "Follow up on live work, where the difficult questions actually appear." },
      { name: "Sustain", body: "Equip champions and hand over the material." },
    ],
    deliverables: [
      "Role-specific session material",
      "Practice library built from your own work",
      "Champion enablement pack",
      "Follow-up clinic schedule",
    ],
  },

  /* ------------------------------------------------------------------- run */
  {
    slug: "ai-infrastructure",
    title: "AI Infrastructure & Workstations",
    stage: "run",
    kicker: "Compute",
    summary:
      "The GPUs, workstations and inference capacity underneath the work — sized for what you run, and what it costs to run it.",
    intro: [
      "Some AI work cannot leave the building. Sensitive data, sovereignty obligations, or simply the cost of inference at volume all push work back onto compute you control — and that is a different purchasing decision from a laptop refresh.",
      "We size and specify it against the workloads you actually intend to run: GPU capacity, AI workstations for the teams doing the heaviest work, and the choice between local, cloud and hybrid inference made on cost and obligation rather than on habit.",
    ],
    outcomes: [
      "Compute specified against real workloads, not vendor configurations",
      "A defensible split between local, cloud and hybrid inference",
      "Forecastable cost per unit of work, before you commit",
      "Capacity that matches demand, rather than idling or throttling",
    ],
    steps: [
      { name: "Profile", body: "Characterise the workloads: model sizes, volumes, latency and data constraints." },
      { name: "Model", body: "Compare local, cloud and hybrid on total cost and on obligation." },
      { name: "Specify", body: "Size GPU capacity and workstations against the profile." },
      { name: "Operate", body: "Set the utilisation and cost measures that keep it honest." },
    ],
    deliverables: [
      "Workload profile and sizing model",
      "Local versus cloud versus hybrid comparison",
      "Specification for GPU capacity and workstations",
      "Utilisation and unit-cost reporting",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getStage = (slug: string) => stages.find((s) => s.slug === slug);
export const servicesByStage = (stage: string) => services.filter((s) => s.stage === stage);

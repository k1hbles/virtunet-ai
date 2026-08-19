/**
 * Every string and link on the page.
 *
 * Sections read from here rather than inlining copy, so wording and URLs
 * can be changed without touching markup. Ordering in each array is the
 * order it renders.
 */

export const site = {
  name: "Virtu",
  title: "Virtu | The AI services partner for an AI-native future",
  description:
    "Virtu helps Australian organisations put AI to work — strategy and readiness, agent governance and ethics, agents and automation built into the work, and the compute underneath it.",
  tagline:
    "Strategy, governance, agents and adoption for organisations putting AI to work.",
  closing: "Empowering sustainable growth through technology.",
} as const;

export const routes = {
  home: "/",
  services: "/services",
  industries: "/industries",
  insights: "/insights",
  about: "/about",
  contact: "/contact",
  /**
   * virtu.net is a sibling, not a parent, and this site no longer links into
   * its product pages — hardware, procurement and licensing are its business
   * and not described here at all. One signpost is kept so a visitor who
   * wants that has somewhere to go.
   */
  virtuNet: "https://virtu.net/",
} as const;

export const navLinks = [
  { label: "Services", href: routes.services },
  { label: "Industries", href: routes.industries },
  { label: "Insights", href: routes.insights },
  { label: "About", href: routes.about },
] as const;

export const hero = {
  title: "The technology partner for an AI-native future.",
  subtitle:
    "Strategy, governance, agents and adoption — for organisations that have the tools but not yet the results.",
  cta: { label: "Speak to our specialists", href: routes.contact },
  image: {
    src: "/img/hero-ai-edge.webp",
    alt: "The machined edge of a brushed aluminium AI compute unit, lit against black",
    width: 1672,
    height: 941,
  },
} as const;

/**
 * The partner strip.
 *
 * Every one of these is a partnership Virtu publishes on
 * virtu.net/about/partnerships/, and every one was chosen because it is
 * relevant to AI work rather than because it fills the row — cloud and model
 * platforms, and the silicon and systems inference runs on. The networking,
 * display, printing and accessories vendors on that page are virtu.net's and
 * are not shown here.
 *
 * NVIDIA, Anthropic and OpenAI are deliberately absent. None of the three
 * appears on that partnerships page, checked directly, and a partner logo is
 * a factual claim about another company. If those relationships exist they
 * belong here more than anything currently listed — but they have to be
 * confirmed first.
 *
 * `aspect` and `scale` follow the same optical rules documented before: the
 * two square emblems share a size, wordmarks are matched on cap height, and
 * solid marks are held back against outlines.
 */
export const partners = [
  { name: "Microsoft", tier: "Silver Partner", logo: "/logos/microsoft.svg", aspect: 1, scale: 0.8 },
  { name: "AWS", tier: "Partner", logo: "/logos/aws.webp", aspect: 1.614, scale: 0.72 },
  { name: "Google", tier: "Partner", logo: "/logos/google.svg", aspect: 3.039, scale: 0.59 },
  { name: "IBM", tier: "Partner", logo: "/logos/ibm.webp", aspect: 2.295, scale: 0.62 },
  { name: "Intel", tier: "Partner", logo: "/logos/intel.webp", aspect: 1.468, scale: 0.85 },
  { name: "AMD", tier: "Partner", logo: "/logos/amd.webp", aspect: 3.567, scale: 0.5 },
  { name: "Dell", tier: "Gold Partner", logo: "/logos/dell.svg", aspect: 1, scale: 1 },
  { name: "Hewlett Packard Enterprise", tier: "Partner", logo: "/logos/hpe.webp", aspect: 2.218, scale: 0.72 },
] as const;

export const aiServices = {
  eyebrow: "AI services",
  /**
   * Scroll-scrubbed clip for the pinned stage: a sealed chassis that opens
   * into its internals as the reader scrolls. Re-encoded with every frame a
   * keyframe so arbitrary seeks are instant. See VIDEO-BRIEF.md.
   */
  video: {
    src: "/video/ai-stack.mp4",
    poster: "/video/ai-stack-poster.jpg",
    alt: "An AI compute chassis opening to reveal its internal architecture",
  },
  /**
   * Copy beats mapped onto the clip's arc. Each holds for most of its third
   * of the scroll and crossfades only in the gaps, so there is time to read.
   */
  beats: [
    {
      title: "Adopt AI with confidence.",
      body: "Virtu takes organisations from an honest read on readiness through to governed agents doing real work — strategy, governance and delivery from one team.",
    },
    {
      title: "Every layer accounted for.",
      body: "Data, permissions, ethics and skills are examined before anything ships. You see what is underneath the stack, not only what runs on top of it.",
    },
    {
      title: "One delivery model, Orient to Run.",
      body: "Five stages, eleven services, delivered by the people who scoped them. Start anywhere, stop after any stage.",
    },
  ],
  title: "Adopt AI with confidence.",
  intro:
    "Virtu takes organisations from an honest read on readiness through to governed agents doing real work — strategy, governance and delivery from one team.",
  /**
   * `group` clusters these nine into three, so the section reads as three areas
   * rather than nine equal cards. It shows a selection, not the full thirteen
   * on /services, which is why no copy here commits to a number. The grouping is editorial, not taken from
   * virtunet.ai — change the strings here and the section regroups itself.
   */
  /**
   * `group` clusters the eleven into three columns. The grouping is
   * presentational — the catalogue's own five stages are Orient, Govern,
   * Build, Adopt and Run, and five columns does not lay out — but nothing is
   * moved across a boundary it does not belong to. Securing AI stays with
   * governance rather than being shifted to balance the columns.
   */
  groupOrder: ["Orient & govern", "Build", "Adopt & run"],
  items: [
    { kicker: "One day", title: "AI Strategy Day", group: "Orient & govern", body: "Turn AI ambition into a plan your board can fund, in a single facilitated day.", href: "/services/ai-strategy-day" },
    { kicker: "Evidence", title: "AI Readiness Assessment", group: "Orient & govern", body: "Whether your data, permissions and people can carry AI — and what it costs to close the gaps.", href: "/services/ai-readiness-assessment" },
    { kicker: "Guardrails", title: "AI & Agent Governance", group: "Orient & govern", body: "Decide what an agent may do, and be able to show why afterwards.", href: "/services/ai-governance" },
    { kicker: "Defensible", title: "Responsible AI & Ethics", group: "Orient & govern", body: "Fairness, transparency and contestability built into the decision, not reviewed after it.", href: "/services/ai-ethics" },
    { kicker: "Zero trust", title: "Securing AI", group: "Orient & govern", body: "Data boundaries, agent permissions, prompt injection and the shadow AI nobody approved.", href: "/services/securing-ai" },
    { kicker: "Autonomous", title: "AI Agents", group: "Build", body: "Agents that do real work across your systems, with the limits to let them.", href: "/services/ai-agents" },
    { kicker: "Throughput", title: "Workflow Automation", group: "Build", body: "Remove the repetitive middle of document, approval and service workflows.", href: "/services/ai-workflow-automation" },
    { kicker: "Claude Code, Codex", title: "Agentic Engineering", group: "Build", body: "Agentic coding adopted with a standard, and measured in cycle time.", href: "/services/agentic-engineering" },
    { kicker: "Ways of working", title: "AI-Native Knowledge Work", group: "Adopt & run", body: "Rebuild how a team works around AI-native tools, rather than bolting them on.", href: "/services/ai-native-work" },
    { kicker: "Capability", title: "AI Training & Enablement", group: "Adopt & run", body: "Executives, managers and practitioners — pitched differently, against your own work.", href: "/services/ai-training-enablement" },
    { kicker: "Compute", title: "AI Infrastructure & Workstations", group: "Adopt & run", body: "GPUs, workstations and inference sized for what you run and what it costs.", href: "/services/ai-infrastructure" },
  ],
} as const;

/**
 * Crawl, walk, run — the founder's framing, made specific to AI.
 *
 * The value of the model is not that it sounds sensible; it is that the three
 * stages carry three different risk profiles. What breaks at each one differs,
 * which is why skipping a stage is what turns a pilot into an incident. Each
 * stage therefore names what it needs and what usually goes wrong, rather than
 * just describing itself.
 */
export const crawlWalkRun = {
  eyebrow: "Crawl, walk, run",
  title: "Most organisations try to run first.",
  intro:
    "The three stages are not a maturity badge to collect. They are three different risk profiles, and the thing that breaks is different at each one — which is why the stage that gets skipped is usually the one that causes the incident.",
  stages: [
    {
      name: "Crawl",
      shape: "People use AI to draft, summarise and research. Nothing touches your systems.",
      needs: "Permissions corrected first, because an assistant can read whatever the person using it can read.",
      breaks: "Data exposure. The over-shared drive nobody had looked at in five years is now searchable in plain language.",
    },
    {
      name: "Walk",
      shape: "AI sits inside a real workflow, and a person approves each step before it lands.",
      needs: "An agreed quality bar and a measured baseline, so the comparison is against something.",
      breaks: "Quality drift, unnoticed. Faster quietly becomes worse because nobody wrote down what good looked like.",
    },
    {
      name: "Run",
      shape: "Agents act inside limits — reading the record, taking the step, stopping at the edge of their remit.",
      needs: "Authority limits set per action, logging you can reconstruct months later, and a cost per run you can forecast.",
      breaks: "Authority and cost. An agent that works and cannot be afforded at volume is not a solution.",
    },
  ],
  footnote:
    "Virtu will tell you which stage you are actually at, including when the honest answer is that you are not ready for the next one.",
  cta: { label: "Find out which stage you are at", href: "/tools/ai-readiness-check" },
} as const;

export const aiWorkplace = {
  title: "Where the work actually changes.",
  body:
    "Most AI rollouts issue licences and stop there. Virtu rebuilds how a team produces its work with AI-native tooling in the middle of it — Claude Code and Codex in engineering, agentic assistants in knowledge work — and leaves behind a practice the next team can start from.",
  cta: { label: "Explore AI-native work", href: "/services/ai-native-work" },
  image: {
    src: "/img/ai-workplace-desk.webp",
    alt: "A laptop, external display and a compact AI compute unit on a dark desk, lit in blue",
  },
} as const;

/**
 * Sustainability kept, reframed to AI. Device lifecycle and e-waste are
 * virtu.net's story; the version that belongs here is the running cost and
 * energy of inference, which is a live concern for anyone scaling agents and
 * one no competitor in this category is currently claiming.
 */
export const sustainability = {
  title: "What it costs to keep running.",
  intro:
    "Inference is a running cost, not a purchase. Virtu sizes models and compute against the work they actually do, so energy and spend stay proportionate as usage grows rather than scaling with it.",
  cta: { label: "Explore AI infrastructure", href: "/services/ai-infrastructure" },
  image: {
    src: "/img/sustainability-rack-aisle.webp",
    alt: "A maintenance aisle between server racks, with one rack drawn open on its rails",
  },
  pillars: [
    { title: "Right-size", body: "The smallest model that clears the quality bar, rather than the largest one available." },
    { title: "Place", body: "Local, cloud or hybrid, decided on cost and obligation rather than on habit." },
    { title: "Measure", body: "A unit cost per task you can forecast before usage scales." },
  ],
} as const;

export const insights = {
  title: "Ideas for what comes next.",
  cta: { label: "View all insights", href: routes.insights },
  /**
   * `rule` picks the accent bar colour, cycling blue / yellow / green.
   *
   * These are the real published articles, linked to their own pages. The
   * previous three were placeholders left from the old site — AI PCs, a
   * Windows 11 upgrade guide, VR in education — and all three pointed at the
   * index rather than at anything.
   */
  items: [
    { title: "Agentic AI's first budget shock", body: "Enterprises that raced into agentic AI burned annual budgets in months. Routing, right-sizing and cost per outcome are the fix.", href: "/insights/agentic-ai-cost-discipline", rule: "accent" },
    { title: "No AI Act for Australia", body: "Light-touch regulation is not a reprieve. What directors still have to be able to evidence, and when.", href: "/insights/australia-national-ai-plan-boards", rule: "warm" },
    { title: "AI will reshape cyber risk in months, not years", body: "A rare joint statement from all five national cyber agencies, aimed at boards rather than security teams.", href: "/insights/five-eyes-ai-cyber-risk-months-not-years", rule: "green" },
  ],
} as const;

/**
 * The legal identity, as published in virtu.net's own footer. The trading
 * name is Virtu; the entity that carries the obligations is Virtunet Pty Ltd,
 * and the ABN is what identifies it. Australian consumer and privacy
 * obligations attach to the entity, so both belong on every page.
 */
export const legal = {
  entity: "Virtunet Pty Ltd",
  abn: "73 134 012 061",
} as const;

export const footer = {
  cta: { title: "Ready to build what comes next?", label: "Speak to our specialists", href: routes.contact },
  columns: [
    {
      heading: "Services",
      links: [
        { label: "All AI services", href: routes.services },
        { label: "AI Readiness Check", href: "/tools/ai-readiness-check" },
        { label: "Industries", href: routes.industries },
              { label: "Insights", href: routes.insights },
      ],
    },
    {
      heading: "Virtu",
      links: [
        { label: "About", href: routes.about },
        { label: "Partnerships", href: "/partnerships" },
        { label: "Contact", href: routes.contact },
        { label: "Responsible AI", href: "/responsible-ai" },
        { label: "Careers", href: "https://virtu.net/careers/" },
      ],
    },
  ],
} as const;

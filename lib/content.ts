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
    "Virtu helps Australian organisations put AI to work: strategy and readiness, agent governance and ethics, agents and automation built into the work, and the compute underneath it.",
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
    "Strategy, governance, agents and adoption. For organisations that have the tools but not yet the results.",
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
  /**
   * The stage's artwork, as a discriminated union.
   *
   * It is a still for now because the clip that was here had a problem. The
   * scrub machinery is intact and gated on `kind`, so putting a video back is
   * a change to this object and nothing else: set kind to "video" with a src
   * and poster, and the pinned stage starts scrubbing it again.
   */
  media: {
    kind: "video",
    src: "/video/ai-accelerator-teardown.mp4",
    poster: "/video/ai-accelerator-teardown-poster.jpg",
    alt: "An AI accelerator card separating into its layers: shrouds, heatsinks, chassis and board",
  } as
    | { kind: "image"; src: string; alt: string }
    | { kind: "video"; src: string; poster: string; alt: string },
  /**
   * Copy beats mapped onto the clip's arc. Each holds for most of its third
   * of the scroll and crossfades only in the gaps, so there is time to read.
   */
  beats: [
    {
      title: "Adopt AI with confidence.",
      body: "Virtu takes organisations from a first honest read to agents carrying real work, and measures what changed. Strategy, governance and delivery come from one team, so the controls arrive with the capability rather than a year after it.",
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
    "Virtu takes organisations from a first honest read to agents carrying real work, and measures what changed. Strategy, governance and delivery come from one team, so the controls arrive with the capability rather than a year after it.",
  /**
   * `group` clusters these nine into three, so the section reads as three areas
   * rather than nine equal cards. It shows a selection, not the full thirteen
   * on /services, which is why no copy here commits to a number. The grouping is editorial, not taken from
   * virtunet.ai — change the strings here and the section regroups itself.
   */
} as const;

/**
 * Crawl, walk, run.
 *
 * Attribution: this framing is not MIT's. It is used across the industry, by
 * Georgian, ScienceLogic, Microsoft and others, and is presented here as an
 * approach rather than a cited model.
 *
 * Written results-first, on purpose. The heading names the three returns
 * in order rather than asserting that returns exist. An earlier version led on what breaks at
 * each stage, which framed the controls as a brake and left the section
 * arguing that AI is dangerous on a site that sells AI. Buyers do not purchase
 * governance; they purchase throughput, and then need the governance to keep
 * it. So each stage says what the business gets, and the control appears as
 * the thing that makes the next stage possible.
 *
 * Centralisation is the through-line. The first return is not a model, it is
 * bringing the AI people are already using out of the shadows and into one
 * place that can be seen, supported and bought once.
 *
 * `reach` drives the diagram: where the AI sits relative to your systems.
 * Outside them, at a gate on the boundary, or working inside them.
 */
export const crawlWalkRun = {
  eyebrow: "Crawl, walk, run",
  title: "Each stage pays for the next one.",
  intro:
    "This is compounding, not caution. Every stage brings AI closer to the work and returns more than the one before it, and the controls are what make the next stage possible rather than what hold it back.",
  stages: [
    {
      name: "Crawl",
      line: "Individuals get faster, and the AI your people are already using comes in-house: one place you can see, support and pay for once.",
      unlocks: "a single approved surface, instead of a dozen unapproved ones.",
      reach: "outside",
    },
    {
      name: "Walk",
      line: "A process gets faster. AI runs inside real work with a person approving, so cycle time falls without accuracy slipping.",
      unlocks: "a measured baseline, which is what makes the gain provable.",
      reach: "gated",
    },
    {
      name: "Run",
      line: "The organisation gains capacity. Agents do the work inside set limits, so volume rises without adding headcount.",
      unlocks: "authority and logging, which is what lets you hand over real work.",
      reach: "inside",
    },
  ],
  footnote: "Virtu will tell you which stage you are at, and what the next one is worth before you commit to it.",
  cta: { label: "Find out which stage you are at", href: "/tools/ai-readiness-check" },
} as const;

/**
 * The distinction the practice is built on, in Martin's framing.
 *
 * The section used to open on "most AI rollouts issue licences and stop
 * there", which is true but is somebody else's line. The AI-enabled versus
 * AI-native distinction is Virtu's own, it is sharper, and it explains why
 * the work is a redesign rather than a deployment. The definition is
 * reproduced as published.
 */
export const aiWorkplace = {
  eyebrow: "AI-native work",
  title: "AI-enabled, or AI-native.",
  body:
    "AI-enabled is adding AI to the way your business already works. AI-native is redesigning how people, processes and technology work together around what AI now makes possible. Virtu rebuilds how a team produces its work with agentic tooling in the middle of it, and leaves behind a practice the next team can start from.",
  cta: { label: "Explore AI-native work", href: "/services/ai-native-work" },
  image: {
    src: "/img/ai-workplace-coldplate-v3.webp",
    alt: "A precision-machined aluminium cold plate for AI accelerators, its fin stack and honeycomb vent face lit in cool blue",
  },
} as const;

/**
 * Sustainability kept, reframed to AI. Device lifecycle and e-waste are
 * virtu.net's story; the version that belongs here is the running cost and
 * energy of inference, which is a live concern for anyone scaling agents and
 * one no competitor in this category is currently claiming.
 */
export const sustainability = {
  eyebrow: "Sustainability",
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
  eyebrow: "Insights",
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

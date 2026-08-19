/**
 * Every string and link on the page.
 *
 * Sections read from here rather than inlining copy, so wording and URLs
 * can be changed without touching markup. Ordering in each array is the
 * order it renders.
 */

export const site = {
  name: "Virtu",
  title: "Virtu | Sustainable technology for an AI-native future",
  description:
    "Virtu helps Australian organisations procure, license, deploy, secure and sustainably manage modern technology for an AI-native future.",
  tagline:
    "Sustainable products, services and solutions for organisations preparing for an AI-native future.",
  closing: "Empowering sustainable growth through technology.",
} as const;

export const routes = {
  home: "/",
  services: "/services",
  industries: "/industries",
  outcomes: "/client-outcomes",
  insights: "/insights",
  about: "/about",
  contact: "/contact",
  /**
   * virtu.net remains the parent site for the non-AI practice — modern
   * workplace, procurement, lifecycle. Those links stay external on purpose;
   * this site replaces virtunet.ai, not virtu.net.
   */
  solutions: "https://virtu.net/solutions/",
  products: "https://virtu.net/corp-buying-guide/",
  sustainability: "https://virtu.net/about/sustainability/",
  workplace: "https://virtu.net/modern-workplace-solution/",
} as const;

export const navLinks = [
  { label: "Services", href: routes.services },
  { label: "Industries", href: routes.industries },
  { label: "Client outcomes", href: routes.outcomes },
  { label: "Insights", href: routes.insights },
  { label: "About", href: routes.about },
] as const;

export const hero = {
  title: "The technology partner for an AI-native future.",
  subtitle:
    "From procurement and licensing to deployment and lifecycle, Virtu makes modern technology work for your organisation.",
  cta: { label: "Speak to our specialists", href: routes.contact },
  image: {
    src: "/img/hero-ai-edge.webp",
    alt: "The machined edge of a brushed aluminium AI compute unit, lit against black",
    width: 1672,
    height: 941,
  },
} as const;

/**
 * Strategic technology partnerships, taken from virtu.net/about/partnerships/
 * together with the tier that page names for each one.
 *
 * NVIDIA used to be listed here and has been removed: it does not appear on
 * that page, so this site cannot stand behind the claim.
 *
 * `aspect` is the mark's true width over height, measured after each viewBox
 * was cropped to its artwork — the marks previously sat letterboxed inside a
 * 24x24 square, which is why an emblem and a wordmark rendered at wildly
 * different optical sizes.
 *
 * `scale` is a fraction of the row height, and it is optical rather than
 * arithmetic. Equal heights do not look equal, and neither does equal ink:
 * measured, these marks span 57%–163% of the mean ink area, so equalising
 * that would have pushed Dell's thin ring to 58px beside HP's 42px disc.
 * Three rules produced the numbers instead:
 *
 *   1. The two circular emblems share a diameter, with the outline mark
 *      (Dell) a few percent larger than the solid one (HP), because an
 *      outline reads smaller than a filled shape of the same size.
 *   2. Solid geometric marks are held back — Microsoft's squares and Apple's
 *      silhouette carry more ink per pixel of height than anything else here.
 *   3. Wordmarks are matched on cap height, not overall height. Lenovo has no
 *      descender, so its full height is its cap height; Google's capital G
 *      measures 0.777 of its mark, so it is set taller to land on the same
 *      cap. Both come out at 20.2px on a 44px row.
 *
 * Lenovo is a special case of artwork rather than sizing: its mark is the
 * wordmark inside a solid box, which inverted into a white slab on black.
 * The file is the same official path with the box masked away. Google is the
 * official wordmark recoloured white, not the 'G' glyph.
 */
export const partners = [
  { name: "Microsoft", tier: "Silver Partner", logo: "/logos/microsoft.svg", aspect: 1, scale: 0.8 },
  { name: "HP", tier: "Power Partner", logo: "/logos/hp.svg", aspect: 1, scale: 0.95 },
  { name: "Lenovo", tier: "Platinum Partner", logo: "/logos/lenovo.svg", aspect: 4.828, scale: 0.46 },
  { name: "Dell", tier: "Gold Partner", logo: "/logos/dell.svg", aspect: 1, scale: 1 },
  { name: "Cisco", tier: "Select Partner", logo: "/logos/cisco.svg", aspect: 1.897, scale: 0.76 },
  { name: "Apple", tier: "Authorised Reseller", logo: "/logos/apple.svg", aspect: 0.815, scale: 0.86 },
  { name: "Google", tier: "Partner", logo: "/logos/google.svg", aspect: 3.039, scale: 0.59 },
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
      body: "Virtu brings together strategy, security and hands-on implementation, turning early AI assessments into governed agents running in production.",
    },
    {
      title: "Every layer accounted for.",
      body: "Data, security, skills and process are examined before anything ships. You see what is inside the stack, not just what runs on top of it.",
    },
    {
      title: "One delivery model across every service.",
      body: "Strategy through to enablement, delivered by the people who scoped it. Start anywhere, stop after any stage.",
    },
  ],
  title: "Adopt AI with confidence.",
  intro:
    "Virtu brings together strategy, security and hands-on implementation, turning early AI assessments into governed agents running in production.",
  /**
   * `group` clusters these nine into three, so the section reads as three areas
   * rather than nine equal cards. It shows a selection, not the full thirteen
   * on /services, which is why no copy here commits to a number. The grouping is editorial, not taken from
   * virtunet.ai — change the strings here and the section regroups itself.
   */
  groupOrder: ["Assess & govern", "Build & automate", "Secure & operate"],
  items: [
    { kicker: "Strategy", title: "AI Readiness Assessment", group: "Assess & govern", body: "Benchmark your strategy, data, security, skills and governance before you invest.", href: "/services/ai-readiness-assessment" },
    { kicker: "Microsoft 365", title: "Microsoft Copilot Adoption", group: "Build & automate", body: "Turn Microsoft 365 Copilot licences into secure, measurable productivity.", href: "/services/microsoft-copilot-adoption" },
    { kicker: "Governance", title: "AI Governance & Security", group: "Assess & govern", body: "Put policies, data boundaries and practical guardrails around AI adoption.", href: "/services/ai-governance" },
    { kicker: "Automation", title: "AI Workflow Automation", group: "Build & automate", body: "Remove repetitive work across document, approval and service workflows.", href: "/services/ai-workflow-automation" },
    { kicker: "Agentic AI", title: "AI Agents", group: "Build & automate", body: "Design, deploy and govern agents that handle real work across your organisation.", href: "/services/ai-agents" },
    { kicker: "Service Desk", title: "AI-Powered Service Desk", group: "Secure & operate", body: "Improve triage, self-service and assisted resolution across IT support.", href: "/services/ai-service-desk" },
    { kicker: "Security", title: "AI for Cybersecurity", group: "Secure & operate", body: "Strengthen threat detection, response and security operations at machine speed.", href: "/services/ai-cybersecurity" },
    { kicker: "Physical Security", title: "AI Physical Security", group: "Secure & operate", body: "Use intelligent video search and access control to find incidents in seconds.", href: "/services/ai-physical-security" },
    { kicker: "Enablement", title: "AI Training & Enablement", group: "Assess & govern", body: "Build practical capability and lasting adoption across your teams.", href: "/services/ai-training-enablement" },
  ],
} as const;

export type CapabilityCard = {
  title: string;
  body: string;
  href: string;
  /** Optional artwork; cards without it get a radial glow instead. */
  image?: string;
  /** Spans the full grid width and both rows. */
  feature?: boolean;
};

export const capabilities: {
  title: string;
  intro: string;
  cta: { label: string; href: string };
  items: CapabilityCard[];
} = {
  title: "Technology, made to work.",
  intro:
    "Virtu works across the full technology lifecycle, helping organisations choose the right products and licences, then deploy, secure and sustain them.",
  cta: { label: "Explore all solutions", href: routes.solutions },
  /** `feature: true` spans the full grid width and carries artwork. */
  items: [
    { title: "Procure", body: "Strategic technology procurement and AI-ready devices from leading global partners.", href: routes.solutions, image: "/img/procurement-devices.webp", feature: true },
    { title: "License", body: "Software and licence services designed around the way your organisation works.", href: "https://virtu.net/software-solutions/" },
    { title: "Deploy", body: "Professional deployment programs, project management and cloud transformation.", href: "https://virtu.net/it-consulting-services/" },
    { title: "Secure", body: "Cybersecurity, networking and connectivity for resilient operations.", href: "https://virtu.net/cybersecurity-solutions/", image: "/img/secure-connectivity.webp" },
    { title: "Sustain", body: "IT asset lifecycle management and sustainable infrastructure for long-term value.", href: "https://virtu.net/it-asset-lifecycle-management/" },
  ],
};

export const aiWorkplace = {
  title: "Prepare your workplace for AI.",
  body: "AI readiness is more than a device upgrade. Virtu helps align the products, licences, cloud, security and workplace foundations your people need to move forward with confidence.",
  cta: { label: "Explore digital workplace", href: routes.workplace },
  image: {
    src: "/img/ai-workplace-desk.webp",
    alt: "A laptop, external display and a compact AI compute unit on a dark desk, lit in blue",
  },
} as const;

export const sustainability = {
  title: "Progress that lasts beyond deployment.",
  intro:
    "Virtu brings sustainability into every stage of the technology lifecycle, across product selection, resilient infrastructure and responsible end-of-life asset management.",
  cta: { label: "Our sustainability commitment", href: routes.sustainability },
  image: {
    src: "/img/sustainability-rack-aisle.webp",
    alt: "A maintenance aisle between server racks, with one rack drawn open on its rails",
  },
  pillars: [
    { title: "Choose", body: "Technology selected for performance, longevity and impact." },
    { title: "Operate", body: "Secure, resilient foundations that support long-term growth." },
    { title: "Renew", body: "Lifecycle services that help assets retain value beyond first use." },
  ],
} as const;

export const insights = {
  title: "Ideas for what comes next.",
  cta: { label: "View all insights", href: routes.insights },
  /** `rule` picks the accent bar colour, cycling blue / yellow / green. */
  items: [
    { title: "How to maximise workforce productivity with AI PCs", body: "A practical look at how AI-ready devices can help Australian workplaces work smarter.", href: routes.insights, rule: "accent" },
    { title: "Windows 11 upgrade guide", body: "What to consider across compatibility, cybersecurity and AI-powered productivity.", href: routes.insights, rule: "warm" },
    { title: "AI, VR and AR in education", body: "How emerging technology is reshaping learning experiences for schools.", href: routes.insights, rule: "green" },
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
        { label: "AI ROI Calculator", href: "/tools/ai-roi-calculator" },
        { label: "Industries", href: routes.industries },
        { label: "Client outcomes", href: routes.outcomes },
        { label: "Insights", href: routes.insights },
      ],
    },
    {
      heading: "Virtu",
      links: [
        { label: "About", href: routes.about },
        { label: "Partnerships", href: "/partnerships" },
        { label: "Contact", href: routes.contact },
        { label: "Sustainability", href: routes.sustainability },
        { label: "Careers", href: "https://virtu.net/careers/" },
      ],
    },
  ],
} as const;

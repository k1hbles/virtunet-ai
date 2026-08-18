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
  contact: "https://virtu.net/contact/",
  solutions: "https://virtu.net/solutions/",
  products: "https://virtu.net/corp-buying-guide/",
  industries: "https://virtu.net/industries/",
  insights: "https://virtu.net/insights/",
  sustainability: "https://virtu.net/about/sustainability/",
  workplace: "https://virtu.net/modern-workplace-solution/",
} as const;

export const navLinks = [
  { label: "Solutions", href: routes.solutions },
  { label: "Products", href: routes.products },
  { label: "Industries", href: routes.industries },
  { label: "Insights", href: routes.insights },
  { label: "Sustainability", href: routes.sustainability },
] as const;

export const hero = {
  title: "The technology partner for an AI-native future.",
  subtitle:
    "From procurement and licensing to deployment and lifecycle, Virtu makes modern technology work for your organisation.",
  cta: { label: "Speak to our specialists", href: routes.contact },
  image: {
    src: "/img/hero-ai-ready-device.webp",
    alt: "AI-ready laptop illuminated by Virtu blue, green and yellow light",
    width: 2048,
    height: 868,
  },
} as const;

export const partners = [
  { name: "HP", logo: "/logos/hp.svg" },
  { name: "Lenovo", logo: "/logos/lenovo.svg" },
  { name: "Cisco", logo: "/logos/cisco.svg" },
  { name: "Dell", logo: "/logos/dell.svg" },
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "NVIDIA", logo: "/logos/nvidia.svg" },
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
      body: "From first assessment to governed AI agents, Virtu brings together strategy, security and hands-on implementation to turn AI ambition into working outcomes.",
    },
    {
      title: "Every layer accounted for.",
      body: "Data, security, skills and process are examined before anything ships. You see what is inside the stack, not just what runs on top of it.",
    },
    {
      title: "Nine services, one delivery model.",
      body: "Strategy through to enablement, delivered by the people who scoped it. Start anywhere, stop after any stage.",
    },
  ],
  title: "Adopt AI with confidence.",
  intro:
    "From first assessment to governed AI agents, Virtu brings together strategy, security and hands-on implementation to turn AI ambition into working outcomes.",
  items: [
    { kicker: "Strategy", title: "AI Readiness Assessment", body: "Benchmark your strategy, data, security, skills and governance before you invest.", href: "https://virtunet.ai/ai-readiness-assessment/" },
    { kicker: "Microsoft 365", title: "Microsoft Copilot Adoption", body: "Turn Microsoft 365 Copilot licences into secure, measurable productivity.", href: "https://virtunet.ai/microsoft-copilot-adoption/" },
    { kicker: "Governance", title: "AI Governance & Security", body: "Put policies, data boundaries and practical guardrails around AI adoption.", href: "https://virtunet.ai/ai-governance/" },
    { kicker: "Automation", title: "AI Workflow Automation", body: "Remove repetitive work across document, approval and service workflows.", href: "https://virtunet.ai/ai-workflow-automation/" },
    { kicker: "Agentic AI", title: "AI Agents", body: "Design, deploy and govern agents that handle real work across your organisation.", href: "https://virtunet.ai/ai-agents/" },
    { kicker: "Service Desk", title: "AI-Powered Service Desk", body: "Improve triage, self-service and assisted resolution across IT support.", href: "https://virtunet.ai/ai-service-desk/" },
    { kicker: "Security", title: "AI for Cybersecurity", body: "Strengthen threat detection, response and security operations at machine speed.", href: "https://virtunet.ai/ai-cybersecurity/" },
    { kicker: "Physical Security", title: "AI Physical Security", body: "Use intelligent video search and access control to find incidents in seconds.", href: "https://virtunet.ai/ai-physical-security/" },
    { kicker: "Enablement", title: "AI Training & Enablement", body: "Build practical capability and lasting adoption across your teams.", href: "https://virtunet.ai/ai-training-enablement/" },
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
    "One partner across the technology lifecycle—from choosing the right products and licences to deploying, securing and sustaining them.",
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
    src: "/img/ai-ready-workplace.webp",
    alt: "Modern AI-ready workplace with connected enterprise devices",
  },
} as const;

export const sustainability = {
  title: "Progress that lasts beyond deployment.",
  intro:
    "Virtu brings sustainability into the technology lifecycle—from product selection and resilient infrastructure to responsible end-of-life asset management.",
  cta: { label: "Our sustainability commitment", href: routes.sustainability },
  image: {
    src: "/img/sustainable-lifecycle.webp",
    alt: "Enterprise technology prepared for responsible reuse and lifecycle management",
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

export const footer = {
  cta: { title: "Ready to build what comes next?", label: "Speak to our specialists", href: routes.contact },
  columns: [
    {
      heading: "Explore",
      links: [
        { label: "Solutions", href: routes.solutions },
        { label: "Products", href: routes.products },
        { label: "Industries", href: routes.industries },
        { label: "Insights", href: routes.insights },
      ],
    },
    {
      heading: "Virtu",
      links: [
        { label: "About", href: "https://virtu.net/about/" },
        { label: "Sustainability", href: routes.sustainability },
        { label: "Success stories", href: "https://virtu.net/client-success-stories/" },
        { label: "Careers", href: "https://virtu.net/careers/" },
      ],
    },
  ],
} as const;

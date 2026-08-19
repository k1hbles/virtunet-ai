/**
 * The partner roster, narrowed to what is relevant to AI work.
 *
 * virtu.net publishes partnerships with 103 vendors across eleven categories.
 * Most of them — networking, display, printing, accessories, education
 * hardware — belong to that business. The 23 here are the ones an AI
 * programme actually touches: the platforms models run on, the silicon
 * inference executes on, the data platforms underneath, and the security
 * tooling that has to hold once agents can act.
 *
 * Every name is verified against virtu.net/about/partnerships/, and every
 * tier is the tier that page states.
 *
 * Three absences are deliberate and worth stating plainly. NVIDIA, Anthropic
 * and OpenAI do not appear on that page — checked directly, in both the page
 * text and every logo on it. Given this site says Virtu deploys Claude Code
 * and Codex, those are the partnerships a reader would most expect to see
 * here. They go in when they are confirmed, and not before: a partner logo
 * is a factual claim about another company.
 */

export type PartnerCategory = {
  slug: string;
  name: string;
  blurb: string;
};

export const partnerCategories: PartnerCategory[] = [
  {
    slug: "platforms",
    name: "Cloud & AI platforms",
    blurb: "Where the models run, and where the data they reach already lives.",
  },
  {
    slug: "compute",
    name: "Compute for AI",
    blurb: "The silicon and the workstations, for the work that cannot leave the building.",
  },
  {
    slug: "data",
    name: "Data & platform",
    blurb: "Storage, virtualisation and recovery. The layer an AI programme inherits rather than builds.",
  },
  {
    slug: "security",
    name: "Security",
    blurb: "The tooling that has to hold once an assistant can read everything, and an agent can act.",
  },
];

export type Partner = {
  slug: string;
  name: string;
  category: string;
  /** Only where virtu.net states one. Absence means no tier is published. */
  tier?: string;
};

export const partners: Partner[] = [
  { slug: "microsoft", name: "Microsoft", category: "platforms", tier: "Silver Partner" },
  { slug: "azure", name: "Microsoft Azure", category: "platforms" },
  { slug: "aws", name: "AWS", category: "platforms" },
  { slug: "google", name: "Google", category: "platforms", tier: "Partner" },
  { slug: "ibm", name: "IBM", category: "platforms" },

  { slug: "intel", name: "Intel", category: "compute" },
  { slug: "amd", name: "AMD", category: "compute" },
  { slug: "dell", name: "Dell", category: "compute", tier: "Gold Partner" },
  { slug: "hpe", name: "Hewlett Packard Enterprise", category: "compute", tier: "Partner" },
  { slug: "lenovo", name: "Lenovo", category: "compute", tier: "Platinum Partner" },
  { slug: "apple", name: "Apple", category: "compute", tier: "Authorised Reseller" },

  { slug: "nutanix", name: "Nutanix", category: "data" },
  { slug: "vmware", name: "VMware", category: "data", tier: "Registered Partner" },
  { slug: "netapp", name: "NetApp", category: "data" },
  { slug: "veeam", name: "Veeam", category: "data" },
  { slug: "cohesity", name: "Cohesity", category: "data" },

  { slug: "crowdstrike", name: "CrowdStrike", category: "security" },
  { slug: "palo-alto", name: "Palo Alto Networks", category: "security" },
  { slug: "sentinelone", name: "SentinelOne", category: "security" },
  { slug: "fortinet", name: "Fortinet", category: "security" },
  { slug: "splunk", name: "Splunk", category: "security" },
  { slug: "sophos", name: "Sophos", category: "security" },
  { slug: "knowbe4", name: "KnowBe4", category: "security" },
];

export const partnersByCategory = (slug: string) => partners.filter((p) => p.category === slug);
export const tieredPartners = partners.filter((p) => p.tier);

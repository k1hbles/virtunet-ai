/**
 * The vendor roster, taken from virtu.net/about/partnerships/.
 *
 * Every name here was read off the logo artwork on that page rather than
 * guessed from a filename — the source images are numbered (`36.png`,
 * `logosss131.png`), so nothing about a partner's identity could be inferred
 * from the file itself.
 *
 * The logo files are Virtu's own artwork from that page, re-encoded to WebP.
 * They are used rather than redrawn monochrome marks because they are already
 * uniform: every vendor sits centred on the same 2:1 canvas, so a wall of a
 * hundred of them reads evenly. A mixed set — real marks for the vendors a
 * public icon set happens to carry, and type for the other half — would not.
 *
 * The category names are the source's own. Which vendor sits in which
 * category is editorial: the source presents them as filter tabs whose
 * contents overlap, so a single home had to be chosen for each.
 */

export type PartnerCategory = {
  slug: string;
  name: string;
  blurb: string;
};

export const partnerCategories: PartnerCategory[] = [
  { slug: "personal-computing", name: "Personal computing", blurb: "Endpoints, including the AI-capable devices that Copilot and on-device inference actually need." },
  { slug: "data-centre", name: "Data centre", blurb: "Compute, storage, virtualisation, backup and the power and cooling underneath them." },
  { slug: "software", name: "Software", blurb: "Licensing, management and the platforms your people work in every day." },
  { slug: "networking", name: "Networking", blurb: "Switching, wireless, routing and the traffic management that keeps them predictable." },
  { slug: "security", name: "Security", blurb: "Endpoint, network, email and awareness — the layers a zero-trust posture is assembled from." },
  { slug: "cloud", name: "Cloud", blurb: "The hyperscalers, and the migration and cost work that sits on top of them." },
  { slug: "display", name: "Display", blurb: "Screens, projection and room systems for workplaces and classrooms." },
  { slug: "unified-comms", name: "Unified communications", blurb: "Meeting rooms, headsets, telephony and the platforms they connect to." },
  { slug: "printing", name: "Printing", blurb: "Print, scan and label, including managed print and secure release." },
  { slug: "accessories", name: "Accessories & storage", blurb: "Docks, cases, peripherals and the storage that goes with a fleet." },
  { slug: "education", name: "Education", blurb: "Charge and store, plus the STEM hardware schools build their programs around." },
];

export type Partner = { slug: string; name: string; category: string };

/** 103 vendors. `slug` is also the logo filename in /public/partners. */
export const partners: Partner[] = [
  { slug: "hp", name: "HP", category: "personal-computing" },
  { slug: "apple", name: "Apple", category: "personal-computing" },
  { slug: "lenovo", name: "Lenovo", category: "personal-computing" },
  { slug: "asus", name: "ASUS", category: "personal-computing" },
  { slug: "microsoft", name: "Microsoft", category: "personal-computing" },
  { slug: "dell", name: "Dell", category: "personal-computing" },
  { slug: "acer", name: "Acer", category: "personal-computing" },
  { slug: "dynabook", name: "Dynabook", category: "personal-computing" },
  { slug: "google", name: "Google", category: "personal-computing" },
  { slug: "samsung", name: "Samsung", category: "personal-computing" },
  { slug: "toshiba", name: "Toshiba", category: "personal-computing" },
  { slug: "intel", name: "Intel", category: "personal-computing" },
  { slug: "amd", name: "AMD", category: "personal-computing" },

  { slug: "apc", name: "APC by Schneider Electric", category: "data-centre" },
  { slug: "hpe", name: "Hewlett Packard Enterprise", category: "data-centre" },
  { slug: "fujitsu", name: "Fujitsu", category: "data-centre" },
  { slug: "schneider-electric", name: "Schneider Electric", category: "data-centre" },
  { slug: "cohesity", name: "Cohesity", category: "data-centre" },
  { slug: "netapp", name: "NetApp", category: "data-centre" },
  { slug: "nutanix", name: "Nutanix", category: "data-centre" },
  { slug: "hycu", name: "HYCU", category: "data-centre" },
  { slug: "veeam", name: "Veeam", category: "data-centre" },
  { slug: "vmware", name: "VMware", category: "data-centre" },
  { slug: "ibm", name: "IBM", category: "data-centre" },
  { slug: "veritas", name: "Veritas", category: "data-centre" },

  { slug: "avepoint", name: "AvePoint", category: "software" },
  { slug: "adobe", name: "Adobe", category: "software" },
  { slug: "google-workspace", name: "Google Workspace", category: "software" },
  { slug: "jamf", name: "Jamf", category: "software" },
  { slug: "citrix", name: "Citrix", category: "software" },
  { slug: "impero", name: "Impero", category: "software" },
  { slug: "splunk", name: "Splunk", category: "software" },
  { slug: "manageengine", name: "ManageEngine", category: "software" },
  { slug: "teamviewer", name: "TeamViewer", category: "software" },
  { slug: "printerlogic", name: "PrinterLogic", category: "software" },

  { slug: "aruba", name: "Aruba", category: "networking" },
  { slug: "cisco", name: "Cisco", category: "networking" },
  { slug: "cisco-meraki", name: "Cisco Meraki", category: "networking" },
  { slug: "extreme-networks", name: "Extreme Networks", category: "networking" },
  { slug: "riverbed", name: "Riverbed", category: "networking" },
  { slug: "f5", name: "F5", category: "networking" },
  { slug: "juniper", name: "Juniper Networks", category: "networking" },
  { slug: "ubiquiti", name: "Ubiquiti Networks", category: "networking" },
  { slug: "tp-link", name: "TP-Link", category: "networking" },

  { slug: "crowdstrike", name: "CrowdStrike", category: "security" },
  { slug: "sophos", name: "Sophos", category: "security" },
  { slug: "malwarebytes", name: "Malwarebytes", category: "security" },
  { slug: "palo-alto", name: "Palo Alto Networks", category: "security" },
  { slug: "datto", name: "Datto", category: "security" },
  { slug: "fortinet", name: "Fortinet", category: "security" },
  { slug: "bitdefender", name: "Bitdefender", category: "security" },
  { slug: "sentinelone", name: "SentinelOne", category: "security" },
  { slug: "barracuda", name: "Barracuda", category: "security" },
  { slug: "dahua", name: "Dahua Technology", category: "security" },
  { slug: "mcafee", name: "McAfee", category: "security" },
  { slug: "norton", name: "Norton", category: "security" },
  { slug: "knowbe4", name: "KnowBe4", category: "security" },

  { slug: "aws", name: "AWS", category: "cloud" },
  { slug: "amazon", name: "Amazon", category: "cloud" },
  { slug: "azure", name: "Microsoft Azure", category: "cloud" },

  { slug: "lg", name: "LG", category: "display" },
  { slug: "panasonic", name: "Panasonic", category: "display" },
  { slug: "philips", name: "Philips", category: "display" },
  { slug: "sony", name: "Sony", category: "display" },
  { slug: "benq", name: "BenQ", category: "display" },
  { slug: "promethean", name: "Promethean", category: "display" },
  { slug: "viewsonic", name: "ViewSonic", category: "display" },
  { slug: "crestron", name: "Crestron", category: "display" },

  { slug: "jabra", name: "Jabra", category: "unified-comms" },
  { slug: "microsoft-teams", name: "Microsoft Teams", category: "unified-comms" },
  { slug: "poly", name: "Poly", category: "unified-comms" },
  { slug: "google-meet", name: "Google Meet", category: "unified-comms" },
  { slug: "zoom", name: "Zoom", category: "unified-comms" },
  { slug: "yealink", name: "Yealink", category: "unified-comms" },
  { slug: "logitech", name: "Logitech", category: "unified-comms" },
  { slug: "8x8", name: "8x8", category: "unified-comms" },
  { slug: "ringcentral", name: "RingCentral", category: "unified-comms" },

  { slug: "epson", name: "Epson", category: "printing" },
  { slug: "zebra", name: "Zebra", category: "printing" },
  { slug: "brother", name: "Brother", category: "printing" },
  { slug: "fuji-xerox", name: "Fuji Xerox", category: "printing" },
  { slug: "kyocera", name: "Kyocera", category: "printing" },

  { slug: "zagg", name: "ZAGG", category: "accessories" },
  { slug: "targus", name: "Targus", category: "accessories" },
  { slug: "stm-goods", name: "STM Goods", category: "accessories" },
  { slug: "kensington", name: "Kensington", category: "accessories" },
  { slug: "alogic", name: "ALOGIC", category: "accessories" },
  { slug: "satechi", name: "Satechi", category: "accessories" },
  { slug: "kingston", name: "Kingston Technology", category: "accessories" },
  { slug: "seagate", name: "Seagate", category: "accessories" },
  { slug: "comsol", name: "Comsol", category: "accessories" },
  { slug: "otterbox", name: "OtterBox", category: "accessories" },
  { slug: "gumdrop", name: "Gumdrop", category: "accessories" },
  { slug: "sandisk", name: "SanDisk", category: "accessories" },
  { slug: "shintaro", name: "Shintaro", category: "accessories" },
  { slug: "steelseries", name: "SteelSeries", category: "accessories" },

  { slug: "pc-locs", name: "PC Locs", category: "education" },
  { slug: "lapcabby", name: "LapCabby", category: "education" },
  { slug: "osmo", name: "Osmo", category: "education" },
  { slug: "sphero", name: "Sphero", category: "education" },
  { slug: "lumination", name: "Lumination", category: "education" },
  { slug: "littlebits", name: "littleBits", category: "education" },
  { slug: "ozobot", name: "Ozobot", category: "education" },
];

/**
 * The partnerships virtu.net describes in its own words, with the tier it
 * states and the sustainability fact it cites. Tiers are claims about a
 * commercial relationship and the figures are claims about a third party, so
 * both are carried across as published rather than rephrased. If a tier
 * lapses, this is the list to correct.
 */
export type StrategicPartner = {
  slug: string;
  name: string;
  tier: string;
  note: string;
};

export const strategicPartners: StrategicPartner[] = [
  { slug: "hp", name: "HP", tier: "Power Partner", note: "Virtu is an HP Power Partner and Impact Changemaker. HP has released over 300 products in the last five years that use ocean-bound plastics, including the DragonFly." },
  { slug: "lenovo", name: "Lenovo", tier: "Platinum Partner", note: "Devices ship in packaging sourced from 100% biodegradable materials, with recycled cushioning including bamboo and sugar cane fibre." },
  { slug: "dell", name: "Dell", tier: "Gold Partner", note: "Dell has introduced closed-loop rainwater collection at its own facilities, addressing water risk locally and building a more resilient supply chain." },
  { slug: "adobe", name: "Adobe", tier: "Gold Partner", note: "Cloud-based software delivery: every million transactions through Adobe Sign is equivalent to taking over 2,300 cars off the road for a year." },
  { slug: "cisco", name: "Cisco", tier: "Select Partner", note: "Cisco committed in 2021 to net zero by 2030, and reported a 60% reduction in Scope 1 and 2 emissions in FY21 against FY07, with 20% less virgin plastic since 2018." },
  { slug: "microsoft", name: "Microsoft", tier: "Silver Partner", note: "Carbon neutral since 2012, committed to carbon negative, water positive and zero waste by 2030, with a range of EPEAT gold-registered Surface devices." },
  { slug: "apple", name: "Apple", tier: "Authorised Reseller", note: "Carbon neutral across corporate operations, targeting carbon neutrality by 2030, with devices made using clean energy and more recycled and renewable material." },
  { slug: "aruba", name: "Aruba", tier: "Business Partner", note: "A framework for network architecture that lowers power consumption and the carbon cost of IT operations while raising efficiency." },
  { slug: "hpe", name: "Hewlett Packard Enterprise", tier: "Partner", note: "The first IT company to set science-based targets across its value chain aligned to the Paris climate accord, spanning carbon footprint from edge to cloud." },
  { slug: "vmware", name: "VMware", tier: "Registered Partner", note: "As part of its net zero strategy, VMware committed to conserve, restore and plant one million trees by 2030." },
  { slug: "google", name: "Google", tier: "Partner", note: "One of the first technology companies to become carbon neutral, in 2007. Switching to 1,000 Chromebooks can cut an organisation's greenhouse gas emissions by up to 90%." },
  { slug: "schneider-electric", name: "Schneider Electric", tier: "Partner", note: "In fifteen years Schneider Electric has saved customers 120 million tonnes of CO₂ emissions and given 30 million more people access to energy." },
  { slug: "samsung", name: "Samsung", tier: "Partner", note: "Medium and long-term environmental strategies targeting net zero by 2050. As of 2021 all worksites hold ISO 14001 and ISO 50001 certification." },
  { slug: "logitech", name: "Logitech", tier: "Partner", note: "In 2020 Logitech became the first electronics company to commit to carbon impact labels across its range, and uses post-consumer recycled plastic throughout." },
  { slug: "targus", name: "Targus", tier: "Partner", note: "A sustainability mission across the portfolio, including EcoSmart backpacks and the Miralogic Workspace Intelligent System, a CES 2020 Innovation Awards honoree." },
];

export const partnersByCategory = (slug: string) => partners.filter((p) => p.category === slug);

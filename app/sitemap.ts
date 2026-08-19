import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { industryList } from "@/lib/industries";
import { articles } from "@/lib/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://virtu.net";

/**
 * Generated from the same data the pages render from, so a new service or
 * article cannot be published and silently left out of the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const at = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  });

  return [
    at("/", 1),
    at("/services", 0.9),
    ...services.map((s) => at(`/services/${s.slug}`, 0.8)),
    at("/industries", 0.7),
    ...industryList.map((i) => at(`/industries/${i.slug}`, 0.6)),
    at("/insights", 0.7),
    ...articles.map((a) => at(`/insights/${a.slug}`, 0.6)),
    at("/about", 0.6),
    at("/partnerships", 0.6),
    at("/responsible-ai", 0.5),
    at("/tools/ai-readiness-check", 0.8),
    at("/contact", 0.8),
    at("/privacy-policy", 0.3),
  ];
}

import type { MetadataRoute } from "next";
import { company, news, sectors } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/le-groupe", "/activites", "/filiales", "/produits", "/actualites", "/carrieres", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${company.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...sectors.map((s) => ({ url: `${company.url}/activites/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...news.map((n) => ({ url: `${company.url}/actualites/${n.slug}`, lastModified: n.date, priority: 0.6 })),
  ];
}

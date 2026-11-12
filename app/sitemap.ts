import type { MetadataRoute } from "next";
import { contact, getContent, langs, localize } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const c = getContent("fr");
  const paths = [
    "/", "/le-groupe", "/activites", "/filiales", "/produits", "/actualites", "/carrieres", "/contact",
    ...c.sectors.map((s) => `/activites/${s.slug}`),
    ...c.news.map((n) => `/actualites/${n.slug}`),
  ];
  const url = (lang: "fr" | "en", p: string) => `${contact.url}${localize(lang, p)}`.replace(/\/?$/, "/");
  return langs.flatMap((lang) =>
    paths.map((p) => ({
      url: url(lang, p),
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.7,
      alternates: { languages: { fr: url("fr", p), en: url("en", p) } },
    })),
  );
}

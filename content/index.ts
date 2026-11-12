import type { Metadata } from "next";
import { en } from "./en";
import { fr } from "./fr";
import { contact, localize, type Lang } from "./shared";
import { asset } from "@/lib/paths";

export * from "./shared";
export type { Brand, Content, NewsItem, Sector, Subsidiary } from "./fr";

export const getContent = (lang: Lang) => (lang === "en" ? en : fr);

type PageKey = keyof typeof fr.meta & string;

// Métadonnées d'une page, avec les liens vers sa version dans l'autre langue.
export function pageMeta(
  lang: Lang,
  path: string,
  key: Exclude<PageKey, "siteTitle">,
  override?: { title?: string; description?: string; image?: string },
): Metadata {
  const m = getContent(lang).meta[key] as { title: string; description?: string };
  const title = override?.title ?? m.title;
  return {
    title: title || { absolute: getContent(lang).meta.siteTitle },
    description: override?.description ?? (m.description || getContent(lang).description),
    alternates: {
      canonical: `${contact.url}${localize(lang, path)}`.replace(/\/?$/, "/"),
      languages: {
        fr: `${contact.url}${localize("fr", path)}`.replace(/\/?$/, "/"),
        en: `${contact.url}${localize("en", path)}`.replace(/\/?$/, "/"),
      },
    },
    openGraph: { locale: lang === "fr" ? "fr_CM" : "en_GB", ...(override?.image ? { images: [asset(override.image)] } : {}) },
  };
}

// Données communes aux deux langues (coordonnées, chemins d'images, logos).

export type Lang = "fr" | "en";
export const langs: Lang[] = ["fr", "en"];

// Chemin d'une page dans une langue : le français est à la racine, l'anglais sous /en.
export function localize(lang: Lang, path: string) {
  if (lang === "fr") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

// Langue et chemin "neutre" d'une URL (ex. "/en/filiales" → ["en", "/filiales"]).
export function splitPath(pathname: string): [Lang, string] {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/en") return ["en", "/"];
  if (clean.startsWith("/en/")) return ["en", clean.slice(3)];
  return ["fr", clean];
}

export const contact = {
  name: "DIDDI GROUP",
  legalName: "DIDDI GROUP SA",
  tagline: "Driven by tomorrow",
  founded: 2005,
  phone: "+237 672 87 00 85",
  phoneHref: "tel:+237672870085",
  whatsapp: "237672870085",
  email: "contact@diddi-group.com",
  // URL publique du site (sans "/" final). Le workflow GitHub Pages la remplace.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://diddi-group.com",
  president: "Oumarou Mohamadou",
  publicationDirector: "Ahmadou Mohamadou",
  facebook: "https://www.facebook.com/share/1KbGxoFT26/?mibextid=wwXIfr",
  headOfficeMap: "Garoua-Boulaï, Cameroun",
  operationalOfficeMap: "Bonapriso, Douala, Cameroun",
};

export const stats = { countries: 2, subsidiaries: 9, revenueBn: 45, jobs: 800 };

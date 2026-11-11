// Contenu central du site DIDDI GROUP.
// Règle : aucune information inventée. Tout ce qui est entre [crochets] est à compléter
// (voir A-COMPLETER.md). Les textes marqués "À VALIDER" proviennent de l'ancien site
// mais doivent être confirmés par la Direction.

export const TODO = (label: string) => `[${label} — à compléter]`;

export const company = {
  name: "DIDDI GROUP",
  legalName: "DIDDI GROUP SA",
  // À VALIDER : slogan repris d'une source non confirmée.
  tagline: "Driven by tomorrow",
  description:
    "Conglomérat camerounais diversifié, DIDDI GROUP rassemble plusieurs sociétés opérant dans des secteurs stratégiques : transport et logistique, agroalimentaire, import-export, torréfaction du café, production et conditionnement du sucre, distribution pétrolière, exploitation minière et forestière.",
  headOffice: {
    label: "Siège social",
    lines: ["Grand Marché", "Garoua-Boulaï", "Région de l'Est, Cameroun"],
    mapQuery: "Garoua-Boulaï, Cameroun",
  },
  operationalOffice: {
    label: "Bureau opérationnel",
    lines: ["Bonapriso", "Douala", "Cameroun"],
    mapQuery: "Bonapriso, Douala, Cameroun",
  },
  phone: "+237 672 87 00 85",
  phoneHref: "tel:+237672870085",
  // À VALIDER : numéro WhatsApp supposé identique au téléphone.
  whatsapp: "237672870085",
  email: "contact@diddi-group.com",
  // URL publique du site (sans "/" final). Le workflow GitHub Pages la remplace.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://diddi-group.com",
  rccm: TODO("RCCM"),
  niu: TODO("NIU"),
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

export const stats = [
  { value: 2, prefix: "", suffix: "", label: "Pays d'implantation" },
  { value: 9, prefix: "", suffix: "", label: "Filiales" },
  { value: 45, prefix: "+", suffix: " Mds", label: "FCFA de chiffre d'affaires" },
  { value: 800, prefix: "+", suffix: "", label: "Emplois directs" },
];

// À VALIDER : texte d'engagement repris d'une source non confirmée.
export const engagement = {
  intro:
    "Chez DIDDI GROUP, nous croyons qu'une entreprise n'a de valeur que si elle sert les hommes et les territoires qui l'entourent. Nés d'une histoire humble et portés par une vision panafricaine, nous nous engageons à :",
  pillars: [
    {
      key: "local",
      title: "Créer de la valeur locale",
      text: "Transformer les richesses de nos terres pour bâtir une économie forte et autonome.",
    },
    {
      key: "reliability",
      title: "Offrir fiabilité et innovation",
      text: "Dans chacun de nos secteurs : transport, énergie, agroalimentaire, commerce et industrie.",
    },
    {
      key: "impact",
      title: "Donner du sens à la croissance",
      text: "Associer performance économique et impact social durable : éducation, formation, solidarité et préservation de l'environnement.",
    },
  ],
};

export type Sector = {
  slug: string;
  title: string;
  short: string;
  image: string | null;
  imageAlt: string;
  subsidiary: string;
  intro: string;
  expertise: string[];
  upcoming?: boolean;
};

// Les "savoir-faire" sont des formulations génériques À VALIDER par chaque filiale.
export const sectors: Sector[] = [
  {
    slug: "transport-logistique",
    title: "Transport & Logistique",
    short: "Transport routier de marchandises avec une flotte de tracteurs routiers modernes.",
    image: "/images/tlr-flotte.png",
    imageAlt: "Flotte de tracteurs routiers neufs alignés dans un parc logistique",
    subsidiary: "TLR Sarl",
    intro:
      "À travers sa filiale TLR Sarl, DIDDI GROUP assure le transport routier de marchandises avec une flotte de tracteurs routiers de marque Sinotruk, renforcée par l'arrivée d'une dizaine de véhicules neufs.",
    expertise: [
      "Transport routier de marchandises",
      "Flotte de tracteurs routiers Sinotruk",
      "Suivi et maintenance de la flotte",
      "Solutions logistiques pour les sociétés du groupe et leurs partenaires",
    ],
  },
  {
    slug: "sucre",
    title: "Sucre",
    short: "Production et conditionnement de sucre.",
    image: "/images/sucre-conditionnement.png",
    imageAlt: "Ligne de conditionnement de sucre dans une usine moderne",
    subsidiary: TODO("Filiale sucre"),
    intro:
      "DIDDI GROUP est présent dans la production et le conditionnement du sucre, un produit de consommation courante au cœur du quotidien des ménages.",
    expertise: ["Production de sucre", "Conditionnement", "Contrôle qualité", "Distribution"],
  },
  {
    slug: "cafe-torrefaction",
    title: "Café & Torréfaction",
    short: "Torréfaction et distribution de café.",
    image: "/images/cafe-torrefaction.png",
    imageAlt: "Grains de café fraîchement torréfiés sortant d'un torréfacteur",
    subsidiary: TODO("Filiale café"),
    intro:
      "DIDDI GROUP torréfie et distribue du café, valorisant une filière historique du Cameroun.",
    expertise: ["Sélection des grains", "Torréfaction", "Conditionnement", "Distribution"],
  },
  {
    slug: "agroalimentaire",
    title: "Agroalimentaire",
    short: "Transformation et commercialisation de produits agroalimentaires.",
    image: "/images/sucre-champs.png",
    imageAlt: "Plantation de canne à sucre au coucher du soleil",
    subsidiary: TODO("Filiale agroalimentaire"),
    intro:
      "Le pôle agroalimentaire de DIDDI GROUP contribue à transformer localement les richesses agricoles du pays.",
    expertise: ["Approvisionnement local", "Transformation", "Qualité et hygiène", "Distribution"],
  },
  {
    slug: "import-export",
    title: "Import-Export",
    short: "Commerce international et approvisionnement.",
    image: "/images/import-export-port.png",
    imageAlt: "Port à conteneurs avec grues de chargement",
    subsidiary: TODO("Filiale import-export"),
    intro:
      "DIDDI GROUP mène des activités d'import-export, en appui des sociétés du groupe et de ses partenaires commerciaux.",
    expertise: ["Approvisionnement international", "Formalités et transit", "Stockage", "Distribution"],
  },
  {
    slug: "distribution-petroliere",
    title: "Distribution pétrolière",
    short: "Distribution de carburants et de produits pétroliers.",
    image: null,
    imageAlt: "Distribution pétrolière",
    subsidiary: TODO("Filiale pétrole"),
    intro: "DIDDI GROUP est actif dans la distribution de produits pétroliers.",
    expertise: ["Approvisionnement", "Stockage", "Transport", "Distribution"],
  },
  {
    slug: "mines",
    title: "Exploitation minière",
    short: "Exploration et exploitation de ressources minières.",
    image: null,
    imageAlt: "Exploitation minière",
    subsidiary: TODO("Filiale mines"),
    intro: "DIDDI GROUP intervient dans l'exploitation minière.",
    expertise: ["Exploration", "Exploitation", "Sécurité des sites", "Respect de l'environnement"],
  },
  {
    slug: "foret",
    title: "Exploitation forestière",
    short: "Gestion et exploitation forestière.",
    image: null,
    imageAlt: "Exploitation forestière",
    subsidiary: TODO("Filiale forêt"),
    intro: "DIDDI GROUP intervient dans l'exploitation forestière.",
    expertise: ["Gestion forestière", "Exploitation", "Transformation du bois", "Préservation"],
  },
  {
    slug: "industrie-transformation",
    title: "Industrie de transformation",
    short: "Un nouveau pôle industriel en préparation.",
    image: "/images/siege-chantier.png",
    imageAlt: "Bâtiment moderne en construction",
    subsidiary: "À venir",
    intro:
      "DIDDI GROUP prépare son entrée dans l'industrie de transformation, pour créer davantage de valeur ajoutée localement.",
    expertise: [TODO("Détails du projet")],
    upcoming: true,
  },
];

export const subsidiaries = [
  { name: "TLR Sarl", sector: "Transport & Logistique", country: "Cameroun", confirmed: true },
  { name: TODO("Filiale distribution"), sector: "Distribution", country: "Cameroun", confirmed: false },
  ...Array.from({ length: 7 }, (_, i) => ({
    name: TODO(`Filiale ${i + 3}`),
    sector: TODO("Secteur"),
    country: TODO("Pays"),
    confirmed: false,
  })),
];

export const products = [
  { title: "Sucre", text: "Sucre produit et conditionné par le groupe.", image: "/images/sucre-conditionnement.png" },
  { title: "Café torréfié", text: "Café torréfié et conditionné.", image: "/images/cafe-torrefaction.png" },
  { title: "Produits agroalimentaires", text: "Produits issus de la transformation locale.", image: "/images/sucre-champs.png" },
  { title: "Produits pétroliers", text: "Carburants et produits pétroliers.", image: null },
];

export type NewsItem = {
  slug: string;
  date: string;
  dateLabel: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
};

export const news: NewsItem[] = [
  {
    slug: "formation-commerciale-garoua-boulai",
    date: "2025-08-31",
    dateLabel: "31 août 2025",
    category: "Formation",
    title: "DIDDI GROUP forme et inspire la relève : une immersion commerciale réussie à Garoua-Boulaï",
    excerpt:
      "La filiale de distribution du groupe a clôturé, le vendredi 29 août, la première vague de son programme de formation commerciale.",
    body: [
      "La filiale de distribution de DIDDI GROUP a clôturé, le vendredi 29 août, la première vague de son programme de formation commerciale à Garoua-Boulaï.",
      "Ce programme d'immersion illustre l'engagement du groupe en faveur de la formation et du développement des compétences de ses équipes.",
    ],
    image: "/images/equipe-reunion.png",
  },
  {
    slug: "tlr-nouveaux-tracteurs-sinotruk",
    date: "2025-09-01",
    dateLabel: "Date à confirmer",
    category: "Transport",
    title: "TLR Sarl se renforce avec l'arrivée de nouveaux tracteurs routiers",
    excerpt:
      "La filiale transport du groupe s'apprête à recevoir une dizaine de tracteurs routiers neufs de marque Sinotruk.",
    body: [
      "TLR Sarl, filiale transport et logistique de DIDDI GROUP, s'apprête à recevoir la livraison d'une dizaine de tracteurs routiers neufs de marque Sinotruk.",
      "Ce renforcement de la flotte accompagne le développement des activités de transport du groupe.",
    ],
    image: "/images/tlr-flotte.png",
  },
  {
    slug: "nouveau-siege-garoua-boulai",
    date: "2025-09-02",
    dateLabel: "Date à confirmer",
    category: "Infrastructures",
    title: "DIDDI GROUP s'apprête à inaugurer son nouveau siège à Garoua-Boulaï",
    excerpt:
      "Le groupe poursuit son expansion avec la construction d'un nouveau siège social à Garoua-Boulaï.",
    body: [
      "DIDDI GROUP poursuit son expansion avec la construction d'un nouveau siège social à Garoua-Boulaï.",
      `Superficie : ${TODO("surface du nouveau siège")}. Date d'inauguration : ${TODO("date")}.`,
    ],
    image: "/images/siege-chantier.png",
  },
];

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Le Groupe", href: "/le-groupe" },
  { label: "Nos activités", href: "/activites", children: sectors.map((s) => ({ label: s.title, href: `/activites/${s.slug}` })) },
  { label: "Nos filiales", href: "/filiales" },
  { label: "Produits", href: "/produits" },
  { label: "Actualités", href: "/actualites" },
  { label: "Carrières", href: "/carrieres" },
];

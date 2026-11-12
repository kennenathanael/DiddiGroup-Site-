// Contenu du site en français.
// Source : questionnaire rempli par la Direction (novembre 2026) et ancien site.
// Règle : aucune information inventée ; les données financières non publiques
// et les projets non officialisés sont volontairement exclus (consigne de la Direction).
// Ce qui manque encore est écrit entre [crochets — à compléter] (voir A-COMPLETER.md).

export type Sector = {
  slug: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  companies: string[];
  intro: string;
  points: string[];
  outlook?: string;
};

export type Subsidiary = {
  slug: string;
  name: string;
  fullName?: string;
  city: string;
  since: string;
  activity: string;
  text: string;
  logo?: string;
  sector: string;
};

export type Brand = { name: string; category: string; company: string; logo?: string; partner?: boolean };

export type NewsItem = {
  slug: string;
  date: string;
  dateLabel?: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
};

const sectors: Sector[] = [
  {
    slug: "commerce-distribution",
    title: "Commerce, import-export & distribution",
    short: "Produits alimentaires et de grande consommation au Cameroun et en Centrafrique.",
    image: "/images/logistique-entrepot.webp",
    imageAlt: "Entrepôt de distribution avec marchandises sur palettes",
    companies: ["OMC SARL", "Trading Africa SA", "ATR SARL"],
    intro:
      "Le groupe approvisionne le Cameroun et la République centrafricaine en produits alimentaires et de grande consommation, auprès des grossistes, des ONG et des détaillants. OMC SARL est le principal distributeur des produits Olam Grains en Afrique centrale, avec près de 3 000 tonnes commercialisées chaque mois.",
    points: [
      "Centre de distribution principal à Garoua-Boulaï",
      "Points de vente à Douala (Marché Mboppi), Bertoua, Ngaoundéré, Meiganga et Kousseri",
      "Partenaires officiels en RCA : Bangui, Carnot, Berbérati et Bozoum",
      "Environ 7 000 tonnes de marchandises acheminées vers le marché centrafricain",
      "Importations de sucre et de riz, principalement depuis le Brésil",
      "Exportations de café et de produits de consommation vers le Tchad, la RCA, la Tunisie et les Émirats arabes unis",
    ],
  },
  {
    slug: "transport-logistique",
    title: "Transport & logistique",
    short: "Plus de 40 camions sur les corridors du Cameroun, du Tchad, de la RCA et du Congo.",
    image: "/images/tlr-flotte.webp",
    imageAlt: "Flotte de tracteurs routiers alignés dans un parc logistique",
    companies: ["TLR SARL"],
    intro:
      "Créée en 2022, TLR SARL (Transport Logistique Révolution) assure le transport routier de marchandises sur les principaux corridors nationaux et sous-régionaux, notamment vers le Tchad, la République centrafricaine et le Congo. Elle travaille aussi bien pour les sociétés du groupe que pour des clients extérieurs, tous secteurs confondus.",
    points: [
      "Flotte de plus de 40 camions en propriété",
      "Conteneurs, vrac, bois en grumes ou scié, produits pétroliers et marchandises diverses",
      "Corridors vers le Tchad, la République centrafricaine et le Congo",
      "Gestion de véhicules pour le compte de tiers",
    ],
    outlook: "Élargir progressivement l'offre à la location de camions, à l'entreposage, au transport multimodal et aux prestations logistiques intégrées.",
  },
  {
    slug: "sucre",
    title: "Sucre",
    short: "Approvisionnement et commercialisation de sucre roux et blanc.",
    image: "/images/sucre-conditionnement.webp",
    imageAlt: "Ligne de conditionnement de sucre",
    companies: ["DISUCO SARL"],
    intro:
      "Créée en 2022, DISUCO SARL (Diddi Sugar Company) approvisionne et commercialise du sucre roux et blanc au Cameroun et en République centrafricaine. Elle s'approvisionne auprès d'importateurs et de producteurs locaux, et porte le projet industriel de raffinerie et de conditionnement de sucre du groupe à Dibamba.",
    points: [
      "Sucre roux et sucre blanc",
      "Marchés du Cameroun et de la République centrafricaine",
      "Marque Diddi Sugar",
      "Projet de raffinerie et de conditionnement à Dibamba (Douala)",
    ],
  },
  {
    slug: "cafe-torrefaction",
    title: "Café & torréfaction",
    short: "Torréfaction à Douala et deux marques : Café Bassoro et Café Diddi.",
    image: "/images/cafe-torrefaction.webp",
    imageAlt: "Grains de café fraîchement torréfiés",
    companies: ["SCTC SARL"],
    intro:
      "Fondée en décembre 2019, la SCTC (Société Camerounaise de Torréfaction du Café) exploite une unité industrielle à Yassa, dans la zone industrielle de Douala. Elle transforme du café issu de la production locale et commercialise ses marques au Cameroun, dans les pays de la CEMAC et sur des marchés internationaux.",
    points: [
      "Unité industrielle de torréfaction à Yassa (Douala)",
      "Café des régions de l'Est, de l'Ouest et du Littoral",
      "Arabica et robusta",
      "Marques Café Bassoro et Café Diddi",
      "Vente au Cameroun, dans la CEMAC et à l'export",
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    short: "Maïs, manioc et arachide sur plus de 4 500 hectares.",
    image: "/images/agriculture.webp",
    imageAlt: "Grand champ de maïs au coucher du soleil",
    companies: ["Coopérative DEMRI YONO"],
    intro:
      "Créée en 2020, la coopérative DEMRI YONO est la branche agricole du groupe. Elle produit à grande échelle du maïs, du manioc et de l'arachide sur plus de 4 500 hectares, répartis entre les régions de l'Est et de l'Extrême-Nord.",
    points: ["Maïs, manioc et arachide", "Plus de 4 500 hectares cultivés", "Régions de l'Est et de l'Extrême-Nord"],
    outlook: "Diversifier les cultures et développer des unités de transformation agroalimentaire, notamment pour le maïs et le manioc.",
  },
  {
    slug: "distribution-petroliere",
    title: "Produits pétroliers",
    short: "Carburants, gaz domestique et lubrifiants ; stations-service.",
    image: "/images/petrole-station.webp",
    imageAlt: "Station-service moderne au crépuscule",
    companies: ["Golden Petroleum SA", "ATR SARL"],
    intro:
      "Le groupe distribue l'ensemble des produits pétroliers : carburants, gaz domestique et lubrifiants. Golden Petroleum SA, titulaire de licences d'importation et de distribution, développe son propre réseau de stations-service, dont les premières unités sont en construction. ATR SARL, partenaire d'OLA Énergies Cameroun, exploite sous contrat de gérance plusieurs stations sous enseigne OLA.",
    points: [
      "Carburants, gaz domestique et lubrifiants",
      "Licences d'importation et de distribution",
      "Stations en gérance à Douala, Garoua-Boulaï, Ngaoundéré et Garoua",
      "Clients transporteurs et entreprises du BTP",
    ],
  },
  {
    slug: "mines-forets",
    title: "Mines & forêts",
    short: "Valorisation des ressources minières et forestières au Cameroun et en RCA.",
    image: "/images/mines-forets.webp",
    imageAlt: "Parc à grumes en lisière de forêt tropicale",
    companies: ["SMI SA"],
    intro:
      "Créée en mars 2023, SMI SA (Société Minière Internationale) est spécialisée dans la valorisation des ressources naturelles. Elle détient des licences d'exploitation au Cameroun, notamment dans la région de l'Est, et en République centrafricaine, sur les sites de Boda et de Birao, et entend développer une exploitation structurée et responsable, conforme aux exigences réglementaires et environnementales.",
    points: [
      "Or et autres ressources minières",
      "Travaux d'exploration dans l'Est du Cameroun",
      "Bois commercialisé sous forme de grumes",
      "Gestion forestière responsable, dont le reboisement",
    ],
  },
  {
    slug: "btp-immobilier",
    title: "BTP & immobilier",
    short: "Infrastructures, bâtiments, ouvrages publics et promotion immobilière.",
    image: "/images/btp-chantier.webp",
    imageAlt: "Chantier de construction d'un bâtiment public",
    companies: ["Diddi Builder SARL"],
    intro:
      "Basée à Yaoundé et constituée en 2025, Diddi Builder SARL réalise des projets d'infrastructures, de bâtiments, d'ouvrages publics et de programmes immobiliers résidentiels et commerciaux. Elle prolonge les activités de construction développées auparavant par OMC SARL.",
    points: [
      "Infrastructures et ouvrages publics",
      "Bâtiments et marchés publics",
      "Promotion immobilière résidentielle et commerciale",
      "Réalisations : la mairie de Garoua-Boulaï et une partie du marché de la gare de Bertoua",
    ],
  },
];

const subsidiaries: Subsidiary[] = [
  { slug: "omc", name: "OMC SARL", fullName: "Oumarou Mohamadou Company", city: "Douala", since: "2018", activity: "Commerce général, import-export, distribution et logistique", text: "L'une des principales entités commerciales du groupe. Elle distribue des produits alimentaires et de grande consommation au Cameroun et en RCA, et est le principal distributeur des produits Olam Grains en Afrique centrale. Depuis 2022, elle développe ses propres marques : Diddi (savons de ménage) et Diddi Gold (huiles alimentaires).", logo: "/logos/filiales/omc.png", sector: "commerce-distribution" },
  { slug: "atr", name: "ATR SARL", fullName: "Africa Trading Revolution", city: "Maroua", since: "", activity: "Commerce général, distribution et gestion de stations-service", text: "Elle intervient dans la distribution de produits et les activités agroalimentaires. Partenaire d'OLA Énergies Cameroun, elle exploite plusieurs stations sous enseigne OLA, à Garoua-Boulaï, dans les trois régions septentrionales et dans le Littoral.", logo: "/logos/filiales/atr.png", sector: "distribution-petroliere" },
  { slug: "sctc", name: "SCTC SARL", fullName: "Société Camerounaise de Torréfaction du Café", city: "Douala", since: "2019", activity: "Transformation, torréfaction et commercialisation du café", text: "Elle exploite une unité industrielle à Yassa (zone industrielle de Douala) et commercialise les marques Café Bassoro et Café Diddi au Cameroun, dans la CEMAC et à l'international.", logo: "/logos/filiales/sctc.png", sector: "cafe-torrefaction" },
  { slug: "tlr", name: "TLR SARL", fullName: "Transport Logistique Révolution", city: "Douala", since: "2022", activity: "Transport routier de marchandises, gestion de flottes et logistique", text: "Plus de 40 camions en propriété sur les corridors nationaux et sous-régionaux, notamment vers le Tchad, la République centrafricaine et le Congo.", logo: "/logos/filiales/tlr.png", sector: "transport-logistique" },
  { slug: "smi", name: "SMI SA", fullName: "Société Minière Internationale", city: "Cameroun et RCA", since: "2023", activity: "Exploitation minière et forestière", text: "Valorisation des ressources naturelles, avec des licences d'exploitation dans l'Est du Cameroun et en République centrafricaine (Boda, Birao).", logo: "/logos/filiales/smi.png", sector: "mines-forets" },
  { slug: "golden-petroleum", name: "Golden Petroleum SA", city: "Yaoundé (Bastos)", since: "2024", activity: "Importation, trading et distribution de produits pétroliers", text: "Titulaire de licences d'importation et de distribution, elle développe son propre réseau de stations-service au Cameroun.", logo: "/logos/filiales/golden-petroleum.png", sector: "distribution-petroliere" },
  { slug: "trading-africa", name: "Trading Africa SA", city: "Bangui (RCA)", since: "2021", activity: "Importation, commerce général et distribution alimentaire", text: "Elle approvisionne le marché centrafricain en produits alimentaires et de grande consommation. Initialement spécialisée dans l'importation de sardines depuis le Maroc via le port de Douala, elle a depuis diversifié son portefeuille.", logo: "/logos/filiales/trading-africa.png", sector: "commerce-distribution" },
  { slug: "diddi-builder", name: "Diddi Builder SARL", city: "Yaoundé", since: "2025", activity: "BTP, marchés publics, construction et promotion immobilière", text: "Infrastructures, bâtiments, ouvrages publics et programmes immobiliers. Réalisations : la mairie de Garoua-Boulaï et une partie du marché de la gare de Bertoua.", logo: "/logos/filiales/diddi-builder.png", sector: "btp-immobilier" },
  { slug: "disuco", name: "DISUCO SARL", fullName: "Diddi Sugar Company", city: "Douala", since: "2022", activity: "Importation, commercialisation et transformation du sucre", text: "Approvisionnement et commercialisation de sucre roux et blanc au Cameroun et en RCA. Elle porte le projet de raffinerie de sucre du groupe à Dibamba.", logo: "/logos/filiales/disuco.png", sector: "sucre" },
];

const cooperative: Subsidiary = { slug: "demri-yono", name: "Coopérative DEMRI YONO", city: "Bertoua", since: "2020", activity: "Agriculture et filières agro-industrielles", text: "La branche agricole du groupe : maïs, manioc et arachide sur plus de 4 500 hectares dans l'Est et l'Extrême-Nord.", sector: "agriculture" };

const brands: Brand[] = [
  { name: "Café Bassoro", category: "Café torréfié", company: "SCTC SARL", logo: "/logos/marques/cafe-bassoro.png" },
  { name: "Café Diddi", category: "Café torréfié", company: "SCTC SARL", logo: "/logos/marques/cafe-diddi.png" },
  { name: "Diddi Sugar", category: "Sucre", company: "DISUCO SARL", logo: "/logos/marques/diddi-sugar.png" },
  { name: "Savon Diddi", category: "Savons de ménage", company: "OMC SARL", logo: "/logos/marques/diddi.png" },
  { name: "Diddi Gold", category: "Huiles de cuisson", company: "OMC SARL" },
  { name: "Diddi Sardines", category: "Sardines", company: "OMC SARL", logo: "/logos/marques/diddi-sardines.png" },
  { name: "Diddi Rice", category: "Riz", company: "OMC SARL", logo: "/logos/marques/diddi-rice.png" },
  { name: "Farine Bijou", category: "Farine — marque partenaire (Olam)", company: "Distribuée par le groupe", partner: true },
];

const news: NewsItem[] = [
  {
    slug: "formation-commerciale-garoua-boulai",
    date: "2025-08-31",
    dateLabel: "31 août 2025",
    category: "Formation",
    title: "DIDDI GROUP forme et inspire la relève : une immersion commerciale réussie à Garoua-Boulaï",
    excerpt: "La filiale de distribution du groupe a clôturé, le vendredi 29 août, la première vague de son programme de formation commerciale.",
    body: [
      "La filiale de distribution de DIDDI GROUP a clôturé, le vendredi 29 août, la première vague de son programme de formation commerciale à Garoua-Boulaï, où se trouve son principal centre de distribution.",
      "Ce programme d'immersion illustre l'engagement du groupe en faveur de la formation et du développement des compétences de ses équipes.",
    ],
    image: "/images/equipe-reunion.webp",
  },
  {
    slug: "tlr-nouveaux-tracteurs-sinotruk",
    date: "2025-09-01",
    category: "Transport",
    title: "TLR SARL se renforce avec l'arrivée de nouveaux tracteurs routiers",
    excerpt: "La filiale transport du groupe accueille une dizaine de tracteurs routiers neufs de marque Sinotruk.",
    body: [
      "TLR SARL, filiale transport et logistique de DIDDI GROUP, renforce sa flotte avec une dizaine de tracteurs routiers neufs de marque Sinotruk.",
      "Avec plus de 40 camions en propriété, TLR dessert les principaux corridors nationaux et sous-régionaux, notamment vers le Tchad, la République centrafricaine et le Congo.",
    ],
    image: "/images/tlr-flotte.webp",
  },
  {
    slug: "nouveau-siege-garoua-boulai",
    date: "2025-09-02",
    category: "Infrastructures",
    title: "DIDDI GROUP s'apprête à inaugurer son nouveau siège à Garoua-Boulaï",
    excerpt: "Le groupe poursuit son expansion avec la construction d'un nouveau siège social à Garoua-Boulaï, sa ville d'origine.",
    body: [
      "DIDDI GROUP poursuit son expansion avec la construction d'un nouveau siège social à Garoua-Boulaï, la ville où le groupe est né en 2005.",
    ],
    image: "/images/siege-chantier.webp",
  },
];

export const fr = {
  lang: "fr",
  description:
    "Fondé en 2005 à Garoua-Boulaï, DIDDI GROUP est un groupe camerounais diversifié présent au Cameroun et en République centrafricaine. Ses filiales interviennent dans le commerce et la distribution, l'import-export, le transport et la logistique, le sucre, le café, l'agriculture, les produits pétroliers, les mines et forêts, et le BTP.",
  headOffice: { label: "Siège social", lines: ["Grand Marché", "Garoua-Boulaï", "Région de l'Est, Cameroun"] },
  operationalOffice: { label: "Bureau opérationnel", lines: ["Bonapriso", "Douala", "Cameroun"] },
  hours: [
    ["Lundi – vendredi", "9h00 – 17h00"],
    ["Samedi", "9h00 – 13h00"],
    ["Dimanche et jours fériés", "Fermé"],
  ],
  stats: [
    { value: 2, prefix: "", suffix: "", label: "Pays : Cameroun et Centrafrique" },
    { value: 9, prefix: "", suffix: "", label: "Filiales" },
    { value: 45, prefix: "+", suffix: " Mds", label: "FCFA de chiffre d'affaires" },
    { value: 800, prefix: "+", suffix: "", label: "Emplois directs" },
  ],
  engagement: {
    intro:
      "Chez DIDDI GROUP, nous croyons qu'une entreprise n'a de valeur que si elle sert les hommes et les territoires qui l'entourent. Nés d'une histoire humble et portés par une vision panafricaine, nous nous engageons à :",
    pillars: [
      { key: "local", title: "Créer de la valeur locale", text: "Transformer les richesses de nos terres pour bâtir une économie forte et autonome." },
      { key: "reliability", title: "Offrir fiabilité et innovation", text: "Dans chacun de nos secteurs : commerce, transport, énergie, agro-industrie, mines et construction." },
      { key: "impact", title: "Donner du sens à la croissance", text: "Associer performance économique et impact social durable : formation, solidarité et préservation de l'environnement." },
    ],
  },
  president: {
    title: "Président-Fondateur",
    // Mot du Président, transmis par la Direction.
    message: [
      "Diddi Group est le fruit d'une conviction profonde : celle que l'entrepreneuriat, lorsqu'il est porté par une vision et des valeurs fortes, peut devenir un véritable levier de transformation économique et sociale.",
      "Née en 2005 à Garoua-Boulaï, notre aventure s'est construite au fil des années autour du travail, de la persévérance et d'une ambition qui n'a cessé de grandir. Aujourd'hui, notre Groupe poursuit son développement dans des secteurs stratégiques, avec une volonté affirmée de contribuer à la création de valeur, à l'industrialisation et au rayonnement économique de l'Afrique.",
      "Nous sommes convaincus que la réussite d'une entreprise ne se mesure pas uniquement à sa croissance, mais également à son utilité pour la société, aux opportunités qu'elle crée et à l'héritage qu'elle contribue à bâtir.",
      "C'est dans cet esprit que nous entendons poursuivre notre développement, en cultivant l'excellence, en privilégiant les partenariats durables et en plaçant l'humain au cœur de nos ambitions.",
      "À nos partenaires, clients, collaborateurs et futurs talents, je voudrais exprimer ma reconnaissance pour leur confiance et les inviter à prendre part à cette ambition commune : construire aujourd'hui les fondations économiques de l'Afrique de demain.",
    ],
  },
  // Repris des mots du Président.
  mvv: [
    { title: "Mission", text: "Contribuer à la création de valeur, à l'industrialisation et au rayonnement économique de l'Afrique." },
    { title: "Vision", text: "Construire aujourd'hui les fondations économiques de l'Afrique de demain." },
    { title: "Valeurs", text: "Le travail, la persévérance, l'excellence, des partenariats durables et l'humain au cœur de nos ambitions." },
  ],
  timeline: [
    { year: "2005", text: "Naissance du groupe à Garoua-Boulaï, dans la Région de l'Est." },
    { year: "2018", text: "OMC SARL prend sa configuration actuelle et devient l'un des piliers commerciaux du groupe." },
    { year: "2019", text: "Création de la SCTC et de son unité de torréfaction à Douala." },
    { year: "2020", text: "Création de la coopérative agricole DEMRI YONO." },
    { year: "2021", text: "Création de Trading Africa à Bangui : le groupe s'implante en République centrafricaine." },
    { year: "2022", text: "Création de TLR SARL et de DISUCO ; lancement des marques Diddi et Diddi Gold." },
    { year: "2023", text: "Création de SMI SA, dédiée aux mines et aux forêts." },
    { year: "2024", text: "Création de Golden Petroleum SA." },
    { year: "2025", text: "Constitution de Diddi Builder SARL et construction du nouveau siège à Garoua-Boulaï." },
  ],
  presence: [
    { country: "Cameroun", places: "Garoua-Boulaï (siège), Douala (bureau opérationnel), Yaoundé, Bertoua, Maroua, Ngaoundéré, Garoua, Meiganga, Kousseri" },
    { country: "République centrafricaine", places: "Bangui, Carnot, Berbérati, Bozoum ; sites miniers et forestiers de Boda et Birao" },
  ],
  project: {
    eyebrow: "Projet industriel stratégique",
    title: "Une raffinerie de sucre à Dibamba.",
    text: "Porté par DISUCO, ce projet prévoit la construction d'une unité de transformation et de raffinage du sucre à Dibamba, à l'entrée Est de Douala. Elle intégrera le raffinage, le moulage, le conditionnement et la commercialisation du sucre, pour desservir les marchés national et sous-régional. Les travaux préparatoires sont bien avancés.",
    imageAlt: "Vue d'illustration d'une raffinerie de sucre moderne",
  },
  sectors,
  subsidiaries,
  cooperative,
  brands,
  pointsOfSale: "Les produits du groupe sont disponibles dans les principales villes du Cameroun et dans de nombreuses localités, grâce à un réseau de partenaires commerciaux et de distributeurs : Garoua-Boulaï, Douala (Marché Mboppi), Bertoua, Ngaoundéré, Meiganga, Kousseri, et en République centrafricaine à Bangui, Carnot, Berbérati et Bozoum.",
  news,
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Le Groupe", href: "/le-groupe" },
    { label: "Nos activités", href: "/activites", children: true },
    { label: "Nos filiales", href: "/filiales" },
    { label: "Nos marques", href: "/produits" },
    { label: "Actualités", href: "/actualites" },
    { label: "Carrières", href: "/carrieres" },
  ],
  meta: {
    siteTitle: "DIDDI GROUP — Groupe camerounais diversifié",
    home: { title: "", description: "" },
    groupe: { title: "Le Groupe", description: "DIDDI GROUP : histoire depuis 2005, mot du Président-Fondateur, mission, vision et valeurs." },
    activites: { title: "Nos activités", description: "Commerce et distribution, transport, sucre, café, agriculture, produits pétroliers, mines et forêts, BTP." },
    filiales: { title: "Nos filiales", description: "Les 9 filiales de DIDDI GROUP au Cameroun et en République centrafricaine." },
    produits: { title: "Nos marques", description: "Café Bassoro, Café Diddi, Diddi Sugar, Savon Diddi, Diddi Gold, Diddi Sardines, Diddi Rice." },
    actualites: { title: "Actualités", description: "Les dernières actualités de DIDDI GROUP et de ses filiales." },
    carrieres: { title: "Carrières", description: "Travailler chez DIDDI GROUP." },
    contact: { title: "Contact", description: "Contactez DIDDI GROUP : siège à Garoua-Boulaï, bureau opérationnel à Douala-Bonapriso." },
    mentions: { title: "Mentions légales" },
    confidentialite: { title: "Politique de confidentialité" },
  },
  ui: {
    skip: "Aller au contenu",
    contactCta: "Nous contacter",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    langSwitch: "English version",
    discover: "Découvrir",
    readArticle: "Lire l'article",
    whatsapp: "Nous écrire sur WhatsApp",
    home: {
      eyebrow: "Groupe camerounais · Vision panafricaine",
      title: "Construire aujourd'hui les fondations économiques de l'Afrique de demain.",
      sub: "Du Cameroun à la République centrafricaine, DIDDI GROUP rassemble neuf sociétés dans le commerce, le transport, l'agro-industrie, l'énergie, les mines et le BTP.",
      ctaActivities: "Découvrir nos activités",
      statsLabel: "Chiffres clés",
      groupEyebrow: "Le Groupe",
      groupTitle: "Né à Garoua-Boulaï en 2005, tourné vers l'Afrique.",
      groupMore: "Depuis son siège de Garoua-Boulaï et son bureau opérationnel de Douala, le groupe fédère neuf filiales et une coopérative agricole, au Cameroun et en République centrafricaine.",
      groupCta: "Découvrir le groupe",
      badge: "filiales dans des secteurs stratégiques",
      sectorsEyebrow: "Nos activités",
      sectorsTitle: "Des secteurs stratégiques pour l'économie réelle.",
      sectorsCta: "Toutes nos activités",
      brandsEyebrow: "Nos marques",
      brandsTitle: "Des marques présentes au quotidien.",
      brandsCta: "Voir nos marques",
      projectCta: "En savoir plus",
      engagementEyebrow: "Notre engagement",
      engagementTitle: "Une entreprise n'a de valeur que si elle sert les hommes et les territoires.",
      presenceEyebrow: "Implantations",
      presenceTitle: "Deux pays, un même réseau.",
      presenceText: "Du siège de Garoua-Boulaï aux marchés de Bangui, le groupe relie le Cameroun et la République centrafricaine par ses activités commerciales, logistiques et industrielles.",
      newsEyebrow: "Actualités",
      newsTitle: "La vie du groupe.",
      newsCta: "Toutes les actualités",
      ctaEyebrow: "Partenariats · Affaires · Presse",
      ctaTitle: "Construisons ensemble.",
      ctaText: "Partenaires, fournisseurs ou institutions : nos équipes sont à votre écoute.",
    },
    groupe: {
      eyebrow: "Le Groupe",
      title: "Un groupe camerounais, une ambition africaine.",
      historyEyebrow: "Notre histoire",
      historyTitle: "De Garoua-Boulaï à l'Afrique centrale.",
      historyText: "Né en 2005 à Garoua-Boulaï, DIDDI GROUP s'est construit autour du travail, de la persévérance et d'une ambition qui n'a cessé de grandir. Il rassemble aujourd'hui neuf filiales et une coopérative agricole au Cameroun et en République centrafricaine.",
      presidentEyebrow: "Mot du Président",
      mvvEyebrow: "Mission · Vision · Valeurs",
      mvvTitle: "Ce qui nous guide.",
      engagementEyebrow: "Notre engagement",
      engagementTitle: "Servir les hommes et les territoires.",
      presenceEyebrow: "Implantations",
      presenceTitle: "Présents dans deux pays.",
      hqEyebrow: "Infrastructures",
      hqTitle: "Un nouveau siège à Garoua-Boulaï.",
      hqText: "Le groupe construit son nouveau siège social à Garoua-Boulaï, là où son histoire a commencé.",
      hqCta: "Lire l'actualité",
    },
    activites: {
      eyebrow: "Nos activités",
      title: "Des secteurs stratégiques pour l'économie réelle.",
      intro: "Du commerce à l'industrie, de la route aux champs : DIDDI GROUP opère dans des secteurs essentiels au développement du Cameroun et de la sous-région.",
      count: "pôles d'activité",
      overview: "Présentation",
      keyPoints: "En bref",
      outlook: "Perspectives",
      companies: "Filiale(s)",
      asideText: "Un projet, un partenariat ou une demande commerciale pour ce secteur ?",
      next: "Activité suivante",
      projectTitle: "Projet en cours",
    },
    filiales: {
      eyebrow: "Nos filiales",
      title: "Neuf sociétés, une même exigence.",
      intro: "DIDDI GROUP SA, société holding, fédère neuf filiales au Cameroun et en République centrafricaine, ainsi qu'une coopérative agricole.",
      since: "Depuis",
      seeActivity: "Voir l'activité",
      coopEyebrow: "Branche agricole",
    },
    produits: {
      eyebrow: "Nos marques",
      title: "Des marques présentes au quotidien.",
      intro: "Les marques développées par le groupe, et des marques partenaires stratégiques qui illustrent sa place dans la distribution en Afrique centrale.",
      own: "Marques du groupe",
      partner: "Marque partenaire",
      whereTitle: "Où trouver nos produits ?",
      proTitle: "Distributeur, revendeur ou grand compte ?",
      proText: "Contactez nos équipes commerciales pour toute demande.",
      proCta: "Demande commerciale",
    },
    actualites: {
      eyebrow: "Actualités",
      title: "La vie du groupe.",
      intro: "Formation, transport, infrastructures : suivez les actualités de DIDDI GROUP et de ses filiales.",
      all: "Toutes",
      filter: "Filtrer par catégorie",
      back: "Toutes les actualités",
      illustration: "Image d'illustration.",
      more: "À lire aussi",
    },
    carrieres: {
      eyebrow: "Carrières",
      title: "Construire l'avenir avec nous.",
      intro: "Rejoindre DIDDI GROUP, c'est contribuer au développement économique de nos territoires.",
      whyEyebrow: "Travailler chez DIDDI GROUP",
      whyTitle: "Des talents pour bâtir demain.",
      reasons: [
        { title: "Un groupe en croissance", text: "Plus de 800 collaborateurs directs, neuf filiales, deux pays." },
        { title: "La formation au cœur", text: "Des programmes comme la formation commerciale menée à Garoua-Boulaï en 2025." },
        { title: "Des métiers variés", text: "Commerce, transport, industrie, agriculture, énergie, mines, BTP et fonctions support." },
      ],
      noOpenings: "Aucune campagne de recrutement n'est en cours pour le moment.",
      noOpeningsText: "Les offres seront publiées sur cette page. Pour toute prise de contact, écrivez-nous :",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre projet.",
      intro: "Partenariat, demande commerciale ou presse : écrivez-nous, nos équipes vous répondront.",
      formEyebrow: "Formulaire",
      formTitle: "Envoyez-nous un message",
      map: "Voir sur la carte",
      reach: "Joindre le groupe",
      hours: "Horaires d'ouverture",
      mapTitle: "Carte : bureau opérationnel de DIDDI GROUP à Douala-Bonapriso",
    },
    form: {
      subjects: ["Partenariat", "Commercial", "Presse", "Autre"],
      name: "Nom complet",
      company: "Société",
      email: "Email",
      phone: "Téléphone",
      subject: "Objet",
      message: "Message",
      required: "* Champs obligatoires. Vos données sont traitées conformément à notre politique de confidentialité.",
      send: "Envoyer",
      sending: "Envoi…",
      errName: "Indiquez votre nom.",
      errEmail: "Indiquez une adresse email valide.",
      errMessage: "Votre message est trop court.",
      sentTitle: "Merci, votre message a bien été envoyé.",
      sentText: "Nos équipes reviendront vers vous dans les meilleurs délais.",
      mailtoTitle: "Votre messagerie s'est ouverte avec votre message.",
      mailtoText: "Il ne reste qu'à l'envoyer. Si rien ne s'est ouvert, écrivez-nous à",
      error: "L'envoi a échoué. Réessayez ou écrivez-nous directement à",
      mailSubject: "Contact site web",
    },
    footer: {
      tagline: "Groupe camerounais diversifié, porté par une vision panafricaine.",
      group: "Le Groupe",
      about: "Qui sommes-nous",
      engagement: "Notre engagement",
      activities: "Activités",
      allActivities: "Toutes nos activités →",
      contact: "Contact",
      rights: "Tous droits réservés.",
      legal: "Mentions légales",
      privacy: "Confidentialité",
    },
    legal: {
      eyebrow: "Informations légales",
      updated: "Dernière mise à jour : novembre 2026",
    },
    notFound: { title: "Page introuvable", text: "La page que vous recherchez n'existe pas ou a été déplacée.", back: "Retour à l'accueil" },
  },
};

export type Content = typeof fr;

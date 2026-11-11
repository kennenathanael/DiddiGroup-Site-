# PROMPT — Site corporate DIDDI GROUP (diddi-group.com)

> Copie tout ce qui suit dans l'outil de ton choix (Claude, v0, Lovable, Bolt, Cursor…).

---

## 1. Rôle et objectif

Tu es une équipe senior composée d'un directeur artistique, d'un UX designer, d'un copywriter corporate et d'un développeur front-end. Construis **le site corporate complet de DIDDI GROUP SA**, un conglomérat camerounais diversifié. Le site doit avoir le niveau des grands groupes africains et internationaux, comme Dangote, Olam ou Bolloré Africa Logistics : sobre, solide, premium, rassurant pour les partenaires, banques, investisseurs, institutions et recrues.

**Règle absolue : n'invente aucun fait.** Utilise uniquement les informations de la section 3. Pour tout ce qui manque, mets un **placeholder visible et propre**, par exemple `[Nom de la filiale — à compléter]`, et liste tous les placeholders dans un fichier `A-COMPLETER.md`.

## 2. Stack et exigences techniques

- **Next.js** (App Router) + TypeScript + Tailwind CSS. Animations sobres avec Framer Motion.
- Tout le contenu est rangé dans des fichiers de données (`content/*.ts`), pour être modifiable sans toucher aux composants.
- **Langues :** français par défaut, anglais en option (structure i18n prête).
- **Responsive irréprochable :** mobile d'abord, avec des marges de 16 px sur mobile.
- **Performance :** images en WebP ou AVIF avec `next/image`, lazy-loading et score Lighthouse supérieur à 90.
- **SEO :** balises meta par page, Open Graph, `sitemap.xml`, `robots.txt` et données structurées JSON-LD `Organization` (nom, adresse, téléphone, logo).
- **Accessibilité :** niveau AA (contrastes, textes alternatifs, navigation clavier, focus visibles).
- **Formulaire de contact :** nom, société, email, téléphone, objet (Partenariat / Commercial / Presse / Recrutement / Autre) et message. Validation côté client. Envoi via une route API qui reste à brancher (placeholder).
- **Bouton WhatsApp** flottant, avec le numéro en placeholder à confirmer.

## 3. Informations confirmées (à utiliser telles quelles)

- **Raison sociale :** DIDDI GROUP SA
- **Nature :** conglomérat camerounais diversifié, avec une vision panafricaine
- **Siège social :** Grand Marché, Garoua-Boulaï, Région de l'Est, Cameroun
- **Bureau opérationnel :** Bonapriso, Douala, Cameroun
- **Téléphone :** (+237) 672 87 00 85
- **Email :** contact@diddi-group.com
- **Chiffres clés :** 2 pays · 9 filiales · +45 milliards FCFA de chiffre d'affaires · +800 emplois directs
- **Secteurs :** transport & logistique · agroalimentaire · import-export · torréfaction du café · production et conditionnement du sucre · distribution pétrolière · exploitation minière · exploitation forestière
- **Filiale connue :** **TLR Sarl**, la filiale transport & logistique, qui exploite une flotte de tracteurs routiers Sinotruk.
- **Une filiale de distribution** existe (son nom est à compléter).
- **Actualités :**
  1. *« Diddi Group forme et inspire la relève : une immersion commerciale réussie à Garoua-Boulaï »* (31 août 2025). La filiale de distribution a clôturé, le vendredi 29 août, la première vague d'un programme de formation commerciale.
  2. *« TLR Sarl se renforce avec l'arrivée de nouveaux tracteurs routiers »*. Livraison d'une dizaine de tracteurs routiers neufs Sinotruk. Date : [à compléter].
  3. *« Diddi Group s'apprête à inaugurer son nouveau siège à Garoua-Boulaï »*. Construction d'un nouveau siège social. Surface et date : [à compléter].

**Textes à afficher avec la mention « à valider »** (en commentaire dans le code) :
- Slogan : **« Driven by tomorrow »**
- Engagement : « Chez Diddi Group, nous croyons qu'une entreprise n'a de valeur que si elle sert les hommes et les territoires qui l'entourent. Nés d'une histoire humble et portés par une vision panafricaine, nous nous engageons à :
  - **Créer de la valeur locale**, en transformant les richesses de nos terres pour bâtir une économie forte et autonome.
  - **Offrir fiabilité et innovation** dans chacun de nos secteurs : transport, énergie, agroalimentaire, commerce et industrie.
  - **Donner du sens à la croissance**, en associant performance économique et impact social durable à travers l'éducation, la formation, la solidarité et la préservation de l'environnement. »
- « Industrie de transformation » : secteur présenté comme **à venir**.

## 4. Identité visuelle

- **Logo :** `/public/logo-diddi-group.png`. Monogramme rouge et vert, avec « DIDDI » en rouge et « GROUP » en vert. Ne jamais le déformer, le recolorer ou l'entourer d'effets. Prévoir une version claire sur fond sombre (placeholder SVG en attendant le vectoriel).
- **Couleurs :**
  - Rouge DIDDI `#E4281C` : accents, boutons principaux, chiffres clés.
  - Vert DIDDI `#00913B` : secondaire, icônes, liens, éléments liés à l'impact.
  - Anthracite `#14181B` : header sombre, footer, sections immersives.
  - Fond clair `#F7F6F2` (blanc cassé chaud) et blanc `#FFFFFF`.
  - Gris texte `#4A5258`, gris bordures `#E3E1DA`.
  - Une touche d'or sable `#C9A45C` est possible pour les filets fins et le premium. Elle doit rester très discrète.
- **Typographie :** *Manrope* ou *Plus Jakarta Sans* pour les titres (gras, serrés), *Inter* pour le texte. Des titres très grands en hero, avec une hiérarchie claire.
- **Style :**
  - Corporate éditorial.
  - Beaucoup d'espace blanc et une grille stricte.
  - Grandes photos plein cadre avec un dégradé sombre pour la lisibilité.
  - Petits libellés de section en majuscules espacées (ex. `NOS ACTIVITÉS`).
  - Filets fins et coins légèrement arrondis (8 px).
  - Pas d'emoji, pas de dégradés criards, pas de style « startup ».
- **Animations :** apparitions douces au scroll, compteurs animés pour les chiffres clés, léger zoom sur les images au survol. Respecter `prefers-reduced-motion`.

## 5. Arborescence et contenu des pages

**Header (fixe, transparent puis plein au scroll) :**
- Logo
- Accueil
- Le Groupe (Notre histoire · Notre engagement · Gouvernance)
- Nos activités (menu déroulant par secteur)
- Nos filiales
- Produits
- Actualités
- Carrières
- Bouton rouge « Nous contacter »
- Sélecteur FR/EN

### 5.1 Accueil
1. **Hero plein écran** (image `hero-corridor`) :
   - Libellé : `CONGLOMÉRAT CAMEROUNAIS · VISION PANAFRICAINE`
   - Titre : « Bâtir aujourd'hui l'économie africaine de demain. »
   - Sous-titre : la description du groupe (secteurs).
   - Deux boutons : « Découvrir nos activités » / « Nous contacter ».
   - Petite mention en bas : « Driven by tomorrow ».
2. **Bandeau chiffres clés** : 4 compteurs animés (2 pays · 9 filiales · +45 Mds FCFA · +800 emplois directs).
3. **Le Groupe en bref** : texte d'introduction, image `siege-chantier` ou `equipe-reunion`, lien vers la page « Le Groupe ».
4. **Nos secteurs** : grille de 8 cartes, une par secteur, chacune avec son image, un titre et une ligne de description. La carte « Industrie de transformation » porte un badge « Bientôt ».
5. **Focus TLR Sarl** : section immersive sur fond sombre (image `tlr-flotte`), avec le texte sur la flotte Sinotruk et un lien vers la filiale.
6. **Notre engagement** : les 3 piliers avec icônes fines (Valeur locale / Fiabilité & innovation / Impact durable), sur l'image `impact-communaute`.
7. **Implantations** : carte stylisée de l'Afrique centrale montrant Garoua-Boulaï (siège) et Douala (bureau opérationnel). Second pays : [à compléter].
8. **Dernières actualités** : les 3 articles en cartes.
9. **Bandeau final** : « Construisons ensemble » + bouton contact, sur l'image `douala-skyline`.

### 5.2 Le Groupe
- Notre histoire : frise chronologique avec des étapes en placeholder [à compléter].
- Notre engagement : le texte complet et les 3 piliers.
- Mission / Vision / Valeurs : structure prête, avec un placeholder pour chaque bloc.
- Gouvernance / Mot du Président : nom, photo et message en placeholders. Ne jamais générer de visage de dirigeant.
- Nouveau siège de Garoua-Boulaï : visuel `siege-chantier` + texte.

### 5.3 Nos activités
Une page par secteur. Chaque page suit le même modèle :
- Hero avec image.
- Présentation (texte prudent, sans aucun chiffre inventé).
- Savoir-faire (3 à 4 points génériques et crédibles, à valider).
- Filiale(s) concernée(s).
- Bouton de contact.

Liste des pages :
- Transport & Logistique (TLR Sarl)
- Sucre
- Café & torréfaction
- Agroalimentaire
- Import-Export
- Distribution pétrolière
- Mines
- Forêt
- Industrie de transformation (à venir)

### 5.4 Nos filiales
Grille de 9 cartes :
- TLR Sarl (confirmée).
- La filiale de distribution, nom à compléter.
- 7 cartes en placeholder `[Filiale — à compléter]` avec secteur et pays.

### 5.5 Produits
4 catégories : sucre, café torréfié, produits agroalimentaires, produits pétroliers. Chacune a une image et un placeholder pour les marques et les formats.

### 5.6 Actualités
- Une liste filtrable par catégorie : Groupe, Transport, Formation, Infrastructures.
- Une page détail par article.
- Les textes complets sont rédigés à partir des résumés, sans aucun fait ajouté.

### 5.7 Carrières
- Pourquoi nous rejoindre (+800 collaborateurs, formation : s'appuyer sur l'actualité de la formation commerciale).
- Offres en placeholder.
- Candidature spontanée via un formulaire avec CV.

### 5.8 Contact
- Le formulaire.
- Deux cartes d'adresse (siège et bureau).
- Téléphone et email.
- Carte Google Maps intégrée sur Garoua-Boulaï et Douala-Bonapriso.

**Footer (anthracite) :**
- Logo et phrase de positionnement.
- Colonnes : Groupe / Activités / Liens / Contact.
- Réseaux sociaux en placeholder.
- Mentions légales · Politique de confidentialité · © 2026 DIDDI GROUP SA.

Les pages **Mentions légales** et **Confidentialité** suivent le droit camerounais et OHADA. RCCM, NIU et hébergeur sont en placeholders.

## 6. Images à générer (haute qualité, cohérentes)

**Direction photo commune (à ajouter à chaque prompt) :**
> *Photorealistic editorial corporate photography, Central Africa / Cameroon setting, natural warm golden-hour light, subtle cinematic color grading with deep greens and warm earth tones, high dynamic range, sharp details, shot on full-frame camera 35mm lens, professional, dignified, authentic, no text, no logos, no watermarks, 16:9, 4K*

**Règles :**
- Personnes africaines représentées avec dignité, en tenue professionnelle (EPI sur les sites industriels).
- Aucun texte ni logo dans l'image : ni marque inventée, ni faux logo DIDDI.
- Jamais de visage présenté comme celui d'un dirigeant réel.
- Les images sont illustratives ; elles seront remplacées par les vraies photos du groupe dès réception.
- Format WebP, 2400 px de large pour les héros, 1200 px pour les cartes. Texte alternatif en français.

| Fichier | Usage | Prompt (EN) |
|---|---|---|
| `hero-corridor.webp` | Hero accueil | Aerial drone view at sunrise of a long red-earth highway crossing lush green savanna hills in eastern Cameroon, a convoy of modern white semi-trucks with trailers driving toward the horizon, light mist, epic sense of scale and ambition |
| `douala-skyline.webp` | Bandeau final / Contact | Douala city skyline at blue hour from the Wouri river, modern office buildings, warm city lights reflecting on water, calm and prosperous atmosphere |
| `siege-chantier.webp` | Nouveau siège | Architectural photo of a modern corporate headquarters under construction in a small Central African town, concrete and glass structure, scaffolding, workers in hi-vis vests and helmets, blue sky, optimistic |
| `equipe-reunion.webp` | Le Groupe | Diverse team of Cameroonian professionals in a bright modern meeting room reviewing documents and a laptop, business attire, natural window light, candid and confident |
| `tlr-flotte.webp` | Transport / TLR | Row of brand-new heavy-duty white tractor trucks parked in a clean logistics yard at golden hour, drivers in uniforms doing inspection, red earth ground, no visible branding |
| `logistique-entrepot.webp` | Logistique / Import-Export | Modern warehouse in Douala with stacked goods on pallets, forklift in motion, workers in safety vests, organized and efficient |
| `import-export-port.webp` | Import-Export | Container port of Douala, gantry cranes loading colorful shipping containers onto a cargo ship, late afternoon light |
| `sucre-champs.webp` | Sucre | Vast sugarcane plantation in Central Africa at golden hour, workers harvesting, rows of tall green cane, wide angle |
| `sucre-conditionnement.webp` | Sucre / Produits | Clean modern sugar packaging line in a food factory, white sugar flowing into packages, workers in hairnets and white coats, hygienic stainless steel |
| `cafe-torrefaction.webp` | Café | Close-up of freshly roasted coffee beans pouring out of an industrial drum roaster, warm tones, steam and texture, artisanal yet industrial |
| `cafe-plantation.webp` | Café | Cameroonian coffee farmer's hands holding ripe red coffee cherries on the plant, highland plantation background, soft morning light |
| `agro-transformation.webp` | Agroalimentaire | Modern agri-food processing facility in Africa, workers sorting produce on conveyor belts, white uniforms, bright and clean |
| `petrole-station.webp` | Distribution pétrolière | Modern clean fuel service station at dusk in a Central African city, illuminated canopy without any branding, fuel tanker truck parked nearby |
| `petrole-depot.webp` | Distribution pétrolière | Fuel storage depot with large white cylindrical tanks, tanker trucks loading, safety-equipped workers, dramatic sky |
| `mines.webp` | Mines | Open-pit mine in East Cameroon, heavy yellow excavators and haul trucks, terraced red earth, engineers in helmets reviewing plans, epic scale |
| `foret.webp` | Forêt | Aerial view of dense Congo Basin tropical rainforest canopy with morning mist, sustainable forestry concept, deep greens |
| `foret-exploitation.webp` | Forêt | Responsibly managed timber yard with stacked certified logs, workers with protective gear measuring logs, rainforest edge background |
| `industrie-avenir.webp` | Industrie (à venir) | Futuristic modern processing plant in Africa at dusk, clean architecture, solar panels on roof, sense of the future |
| `formation-commerciale.webp` | Actualité formation / Carrières | Young Cameroonian sales trainees in a training session, trainer at a whiteboard, engaged and smiling, bright classroom |
| `impact-communaute.webp` | Engagement / Impact | Cameroonian schoolchildren in uniforms smiling in front of a newly built school in a rural town, community spirit, warm light |
| `carrieres.webp` | Carrières | Portrait-style group of confident Cameroonian employees from different trades (driver, engineer, office worker, factory worker) standing together, blurred industrial background |
| `afrique-carte-bg.webp` | Implantations | Minimalist dark topographic map texture of Central Africa, subtle green and gold contour lines, elegant abstract background |

## 7. Livrables attendus
1. Le code complet du site, fonctionnel (`npm run dev`).
2. Toutes les images générées, placées dans `/public/images/` avec les noms ci-dessus.
3. Le fichier `A-COMPLETER.md`, qui liste chaque placeholder (page, champ, info attendue).
4. Le fichier `README.md` : lancement, déploiement (Vercel ou hébergement actuel) et modification des contenus.

## 8. Ce qu'il ne faut PAS faire
- Inventer des noms de filiales, de dirigeants, des dates, des chiffres, des clients ou des partenaires.
- Utiliser du contenu, des couleurs ou des références d'autres « Didi » (DiDi chinois, Didi Group nigérian, etc.).
- Mettre des faux témoignages ou de faux logos de partenaires.
- Utiliser des photos de stock génériques sans lien avec l'Afrique centrale.

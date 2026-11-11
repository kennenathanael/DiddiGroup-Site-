# À compléter — site DIDDI GROUP

Sur le site, chaque information manquante s'affiche dans un **cadre doré en pointillés**. Toutes les données se modifient dans [`content/site.ts`](content/site.ts).

## 1. Identité et légal
| Page | Champ | Info attendue |
|---|---|---|
| Mentions légales | Capital, RCCM, NIU | Données du registre de commerce de DIDDI GROUP SA |
| Mentions légales | Directeur de la publication | Nom et fonction |
| Mentions légales | Hébergeur | Nom, adresse et contact |
| Confidentialité | Référence de la loi | Faire valider la mention de la loi n° 2024/017 par le service juridique |
| Partout | Logo | **Version vectorielle (SVG, AI ou PDF)**. L'actuel est un PNG de 263×99 px |
| Pied de page | Réseaux sociaux | URL LinkedIn et Facebook (`company.socials`) |
| Bouton WhatsApp | Numéro | Confirmer que le 672 87 00 85 est bien sur WhatsApp |

## 2. Textes à valider par la Direction
- Slogan **« Driven by tomorrow »** (`company.tagline`)
- Texte « Notre engagement » et ses 3 piliers (`engagement`)
- Les listes « Savoir-faire » de chaque secteur (`sectors[].expertise`). Ce sont des formulations génériques.
- Le titre du hero : « Bâtir aujourd'hui l'économie africaine de demain. »

## 3. Le Groupe
- Année de création et étapes clés de la frise historique (`app/le-groupe/page.tsx`)
- Mission, Vision, Valeurs
- Président / DG : nom, fonction, **photo officielle** et mot du Président
- Second pays d'implantation (page d'accueil, section « Implantations »)

## 4. Filiales et activités
- Noms des 9 filiales (seule **TLR Sarl** est connue), avec secteur et pays (`subsidiaries`)
- Nom de la filiale pour chaque secteur : sucre, café, agroalimentaire, import-export, pétrole, mines, forêt (`sectors[].subsidiary`)
- Détails du projet « Industrie de transformation »

## 5. Produits
- Marques, formats et photos pour : sucre, café, produits agroalimentaires, produits pétroliers

## 6. Actualités
- Dates exactes des articles « TLR Sarl / tracteurs Sinotruk » et « Nouveau siège »
- Surface et date d'inauguration du nouveau siège
- Textes complets et vraies photos des articles

## 7. Carrières
- Offres d'emploi en cours

## 8. Images
Les images actuelles sont **générées par IA (illustrations)**. Il faut les remplacer par de vraies photos dès que possible, en gardant le même nom de fichier dans `public/images/`.

Ces images n'ont pas encore pu être générées : le quota de crédits Figma AI est épuisé et se réinitialise le 23/10/2026. En attendant, un visuel de remplacement aux couleurs du groupe s'affiche.
- `petrole-station`, `petrole-depot` → Distribution pétrolière
- `mines` → Exploitation minière
- `foret`, `foret-exploitation` → Exploitation forestière
- `impact-communaute`, `formation-commerciale`, `carrieres`, `cafe-plantation`, `agro-transformation`, `industrie-avenir`

Les prompts de ces images sont dans `PROMPT-DIDDI-GROUP.md`, section 6.

## 9. Technique
- **Formulaire de contact** : l'envoi d'email n'est pas encore branché (`app/api/contact/route.ts`). Les messages sont seulement journalisés côté serveur. Il faut le brancher à un service d'envoi (Resend, SMTP…).
- **Version anglaise** : pas encore faite. Tout le contenu est centralisé dans `content/site.ts`, ce qui permet d'ajouter une version EN.

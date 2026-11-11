# Site corporate DIDDI GROUP

Site de **diddi-group.com**, construit avec Next.js 16, Tailwind CSS 4 et Framer Motion.

## Lancer en local
```bash
npm install
npm run dev
```
Le site s'ouvre sur http://localhost:3002.

## Build de production
```bash
npm run build
```
Le site statique est généré dans `out/`.

## Modifier le contenu
Tous les textes, chiffres, secteurs, filiales, produits et actualités se trouvent dans **`content/site.ts`**.
- Une valeur placée entre `[… — à compléter]` s'affiche sur le site comme un cadre doré « à compléter ».
- Pour remplacer une image, déposez la nouvelle dans `public/images/` sous le même nom de fichier.
- Pour ajouter une actualité, ajoutez un objet dans le tableau `news`. La page de l'article est générée automatiquement.

La liste complète des informations manquantes est dans **`A-COMPLETER.md`**.

## Pages
| Route | Contenu |
|---|---|
| `/` | Accueil |
| `/le-groupe` | Histoire, engagement, gouvernance, nouveau siège |
| `/activites` et `/activites/[secteur]` | Les 9 pôles d'activité |
| `/filiales` | Les 9 filiales |
| `/produits` | Les familles de produits |
| `/actualites` et `/actualites/[article]` | Les actualités |
| `/carrieres` | Carrières et candidature spontanée |
| `/contact` | Formulaire (via Formspree ou messagerie), adresses et carte |
| `/mentions-legales`, `/confidentialite` | Pages légales |

## Déploiement (GitHub Pages)
Le site est exporté en **statique** (`output: "export"` → dossier `out/`).
1. Une seule fois : dans le dépôt GitHub, *Settings → Pages → Source* = **GitHub Actions**.
2. À chaque push sur `main`, le workflow `.github/workflows/deploy.yml` compile et publie le site sur `https://kennenathanael.github.io/DiddiGroup-Site-/`.
3. (Optionnel) Variable `FORM_ENDPOINT` (URL Formspree) pour recevoir les messages du formulaire. Voir A-COMPLETER.md.

**Domaine diddi-group.com** : dans *Settings → Pages → Custom domain*, saisissez le domaine, puis supprimez les lignes `NEXT_PUBLIC_BASE_PATH` et `NEXT_PUBLIC_SITE_URL` du workflow (le site est alors servi à la racine).

Tester l'export en local : `npm run build`, puis servir le dossier `out/` avec n'importe quel serveur statique.

L'ancien WordPress de diddi-group.com expose publiquement le nom de son compte administrateur via `/wp-json/wp/v2/users`. Il faut le désactiver ou le supprimer au moment de la bascule.

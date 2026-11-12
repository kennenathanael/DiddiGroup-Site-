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
Le site est **bilingue** : le français est à la racine (`/`), l'anglais sous `/en`.
- Textes français : **`content/fr.ts`**. Textes anglais : **`content/en.ts`**. Les deux fichiers ont la même structure et doivent rester alignés.
- Coordonnées communes (téléphone, email, Facebook…) : `content/shared.ts`.
- Les pages (`app/**/page.tsx` et `app/en/**/page.tsx`) sont de simples enveloppes : la mise en page de chaque page se trouve dans `components/views/`.
- Logos : `public/logos/filiales/` et `public/logos/marques/`. Photos : `public/images/`. Pour remplacer un fichier, gardez le même nom.
- Pour ajouter une actualité, ajoutez un objet dans `news`, dans les deux langues. La page de l'article est générée automatiquement.

La liste des informations encore manquantes est dans **`A-COMPLETER.md`**.

## Pages (FR, et la même chose sous /en)
| Route | Contenu |
|---|---|
| `/` | Accueil |
| `/le-groupe` | Mot du Président, mission/vision/valeurs, histoire, engagement, implantations, nouveau siège |
| `/activites` et `/activites/[secteur]` | Les 8 pôles d'activité |
| `/filiales` | Les 9 filiales et la coopérative DEMRI YONO |
| `/produits` | Les marques du groupe et les marques partenaires |
| `/actualites` et `/actualites/[article]` | Les actualités |
| `/carrieres` | Carrières |
| `/contact` | Formulaire, adresses, horaires et carte |
| `/mentions-legales`, `/confidentialite` | Pages légales |

## Déploiement (GitHub Pages)
Le site est exporté en **statique** (`output: "export"` → dossier `out/`).
1. Une seule fois : dans le dépôt GitHub, *Settings → Pages → Source* = **GitHub Actions**.
2. À chaque push sur `main`, le workflow `.github/workflows/deploy.yml` compile et publie le site sur `https://kennenathanael.github.io/DiddiGroup-Site-/`.
3. (Optionnel) Variable `FORM_ENDPOINT` (URL Formspree) pour recevoir les messages du formulaire. Voir A-COMPLETER.md.

**Domaine diddi-group.com** : dans *Settings → Pages → Custom domain*, saisissez le domaine, puis supprimez les lignes `NEXT_PUBLIC_BASE_PATH` et `NEXT_PUBLIC_SITE_URL` du workflow (le site est alors servi à la racine).

Tester l'export en local : `npm run build`, puis servir le dossier `out/` avec n'importe quel serveur statique.

L'ancien WordPress de diddi-group.com expose publiquement le nom de son compte administrateur via `/wp-json/wp/v2/users`. Il faut le désactiver ou le supprimer au moment de la bascule.

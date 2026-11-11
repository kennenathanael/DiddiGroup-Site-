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
npm start
```

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
| `/contact` | Formulaire, adresses et carte |
| `/mentions-legales`, `/confidentialite` | Pages légales |

## Déploiement
- **Vercel** (recommandé) : importer le dossier, sans configuration particulière. Ensuite, faire pointer le DNS de diddi-group.com vers Vercel.
- **Serveur Node** (hébergement actuel si Node est disponible) : `npm run build`, puis `npm start` derrière un reverse proxy.

L'ancien WordPress de diddi-group.com expose publiquement le nom de son compte administrateur via `/wp-json/wp/v2/users`. Il faut le désactiver ou le supprimer au moment de la bascule.

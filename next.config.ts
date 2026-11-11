import type { NextConfig } from "next";

// Préfixe d'URL du site. Vide en local et sur un domaine propre (diddi-group.com).
// Sur GitHub Pages, le workflow le fixe à "/DiddiGroup-Site-".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Site 100 % statique : déployable sur GitHub Pages (dossier out/).
  output: "export",
  basePath,
  trailingSlash: true,
  // Permet d'ouvrir le serveur de dev depuis un téléphone sur le même Wi-Fi,
  // même si l'adresse IP du PC change.
  allowedDevOrigins: ["192.168.1.*", "192.168.0.*"],
  images: {
    // Pas de serveur d'optimisation en export statique : le loader ajoute juste le basePath.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;

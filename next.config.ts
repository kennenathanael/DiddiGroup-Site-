import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permet d'ouvrir le serveur de dev depuis un téléphone sur le même Wi-Fi,
  // même si l'adresse IP du PC change.
  allowedDevOrigins: ["192.168.1.*", "192.168.0.*"],
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;

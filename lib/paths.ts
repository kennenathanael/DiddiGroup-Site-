// Chemin d'un fichier de public/ en tenant compte du basePath (GitHub Pages).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

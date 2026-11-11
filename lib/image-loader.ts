// Loader next/image pour l'export statique : sert le fichier tel quel, préfixé du basePath.
// Le paramètre `w` est ignoré par l'hébergeur mais requis par next/image.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}?w=${width}`;
}

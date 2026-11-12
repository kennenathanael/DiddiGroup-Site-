import Image from "next/image";
import type { Brand } from "@/content";

// Logo de marque sur fond blanc ; nom stylisé quand aucun logo n'a été fourni.
export default function BrandLogo({ brand }: { brand: Brand }) {
  if (!brand.logo) {
    return <span className="text-center font-display text-2xl font-extrabold tracking-tight text-ink">{brand.name}</span>;
  }
  return (
    <span className="relative block h-full w-full">
      <Image src={brand.logo} alt={brand.name} fill sizes="200px" className="object-contain mix-blend-multiply" />
    </span>
  );
}

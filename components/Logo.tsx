import Image from "next/image";
import Link from "next/link";

// Le PNG d'origine (263×99) est le seul fichier disponible. À remplacer par le SVG officiel.
export default function Logo({ onDark = false, href = "/", className = "" }: { onDark?: boolean; href?: string; className?: string }) {
  return (
    <Link href={href} aria-label="DIDDI GROUP" className={`inline-flex items-center ${className}`}>
      <span className={onDark ? "rounded-md bg-white px-2.5 py-1.5" : ""}>
        <Image src="/logo-diddi-group.png" alt="DIDDI GROUP" width={263} height={99} className="h-9 w-auto md:h-10" preload />
      </span>
    </Link>
  );
}

import Link from "next/link";
import Media from "./Media";
import { localize, type Lang, type Sector } from "@/content";

export default function SectorCard({ sector, index, lang, discover }: { sector: Sector; index: number; lang: Lang; discover: string }) {
  return (
    <Link
      href={localize(lang, `/activites/${sector.slug}`)}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg bg-ink p-6 text-white"
    >
      <Media
        src={sector.image}
        alt={sector.imageAlt}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" aria-hidden />
      <span className="absolute left-6 top-6 font-display text-sm font-bold text-white/60">{String(index + 1).padStart(2, "0")}</span>
      <div className="relative">
        <p className="eyebrow mb-2 text-[10px] text-sand">{sector.companies.join(" · ")}</p>
        <h3 className="text-xl font-bold leading-tight">{sector.title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-white/75">{sector.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-white/90">
          {discover} <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

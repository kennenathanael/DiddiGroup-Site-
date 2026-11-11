import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/content/site";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/actualites/${item.slug}`} className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-[11px] text-green">
          {item.category} <span className="text-body/60">· {item.dateLabel}</span>
        </p>
        <h3 className="mt-3 text-lg font-bold leading-snug text-ink group-hover:text-green">{item.title}</h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-body">{item.excerpt}</p>
        <span className="mt-auto pt-5 text-[14px] font-semibold text-red">Lire l&apos;article →</span>
      </div>
    </Link>
  );
}

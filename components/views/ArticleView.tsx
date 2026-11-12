import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsCard from "@/components/NewsCard";
import { getContent, localize, type Lang } from "@/content";

export default function ArticleView({ lang, slug }: { lang: Lang; slug: string }) {
  const c = getContent(lang);
  const t = c.ui.actualites;
  const item = c.news.find((n) => n.slug === slug);
  if (!item) notFound();
  const others = c.news.filter((n) => n.slug !== slug);

  return (
    <>
      <article className="pt-36">
        <header className="container-x max-w-4xl">
          <Link href={localize(lang, "/actualites")} className="text-[14px] font-semibold text-green hover:underline">← {t.back}</Link>
          <p className="eyebrow mt-8 text-[11px] text-green">
            {item.category}
            {item.dateLabel && <span className="text-body/60"> · {item.dateLabel}</span>}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{item.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-body">{item.excerpt}</p>
        </header>
        <div className="container-x mt-12">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image src={item.image} alt="" fill sizes="100vw" preload className="object-cover" />
          </div>
          <p className="mt-3 text-[13px] text-body/70">{t.illustration}</p>
        </div>
        <div className="container-x max-w-3xl py-14">
          {item.body.map((p, i) => (
            <p key={i} className="mb-6 text-lg leading-relaxed text-ink">{p}</p>
          ))}
        </div>
      </article>

      <section className="border-t border-line bg-paper py-20">
        <div className="container-x">
          <h2 className="text-2xl font-bold">{t.more}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((n) => <NewsCard key={n.slug} item={n} lang={lang} readLabel={c.ui.readArticle} />)}
          </div>
        </div>
      </section>
    </>
  );
}

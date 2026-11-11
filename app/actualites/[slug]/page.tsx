import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsCard from "@/components/NewsCard";
import { Txt } from "@/components/ui";
import { news } from "@/content/site";
import { asset } from "@/lib/paths";

export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/actualites/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return item ? { title: item.title, description: item.excerpt, openGraph: { images: [asset(item.image)] } } : {};
}

export default async function ArticlePage({ params }: PageProps<"/actualites/[slug]">) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();
  const others = news.filter((n) => n.slug !== slug);

  return (
    <>
      <article className="pt-36">
        <header className="container-x max-w-4xl">
          <Link href="/actualites" className="text-[14px] font-semibold text-green hover:underline">← Toutes les actualités</Link>
          <p className="eyebrow mt-8 text-[11px] text-green">{item.category} <span className="text-body/60">· {item.dateLabel}</span></p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{item.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-body">{item.excerpt}</p>
        </header>
        <div className="container-x mt-12">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image src={item.image} alt="" fill sizes="100vw" preload className="object-cover" />
          </div>
          <p className="mt-3 text-[13px] text-body/70">Image d&apos;illustration.</p>
        </div>
        <div className="container-x max-w-3xl py-14">
          {item.body.map((p, i) => (
            <p key={i} className="mb-6 text-lg leading-relaxed text-ink"><Txt>{p}</Txt></p>
          ))}
        </div>
      </article>

      <section className="border-t border-line bg-paper py-20">
        <div className="container-x">
          <h2 className="text-2xl font-bold">À lire aussi</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((n) => <NewsCard key={n.slug} item={n} />)}
          </div>
        </div>
      </section>
    </>
  );
}

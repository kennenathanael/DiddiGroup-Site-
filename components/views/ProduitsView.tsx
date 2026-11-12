import BrandLogo from "@/components/BrandLogo";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero } from "@/components/ui";
import { getContent, localize, type Brand, type Lang } from "@/content";

function BrandCard({ b }: { b: Brand }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white">
      <div className="flex aspect-[4/3] items-center justify-center border-b border-line bg-white p-8">
        <BrandLogo brand={b} />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{b.name}</h3>
        <p className="mt-1 text-[15px] text-body">{b.category}</p>
        <p className="eyebrow mt-3 text-[10px] text-green">{b.company}</p>
      </div>
    </article>
  );
}

export default function ProduitsView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.ui.produits;
  const own = c.brands.filter((b) => !b.partner);
  const partners = c.brands.filter((b) => b.partner);
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} image="/images/cafe-torrefaction.webp" imageAlt="" />
      <section className="py-24">
        <div className="container-x">
          <Reveal><Eyebrow>{t.own}</Eyebrow></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {own.map((b, i) => (
              <Reveal key={b.name} delay={(i % 4) * 0.06}><BrandCard b={b} /></Reveal>
            ))}
          </div>

          <Reveal className="mt-16"><Eyebrow>{t.partner}</Eyebrow></Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((b) => <BrandCard key={b.name} b={b} />)}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg bg-paper p-8 md:p-10">
              <h2 className="text-2xl font-bold">{t.whereTitle}</h2>
              <p className="mt-3 leading-relaxed text-body">{c.pointsOfSale}</p>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-ink p-8 text-white md:p-10">
              <div>
                <h2 className="text-2xl font-bold">{t.proTitle}</h2>
                <p className="mt-2 text-white/70">{t.proText}</p>
              </div>
              <div className="mt-6"><ButtonLink href={`${localize(lang, "/contact")}?objet=1`}>{t.proCta}</ButtonLink></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

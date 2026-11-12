import Reveal from "@/components/Reveal";
import SectorCard from "@/components/SectorCard";
import { Eyebrow, PageHero } from "@/components/ui";
import { getContent, type Lang } from "@/content";

export default function ActivitesView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.ui.activites;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} image="/images/import-export-port.webp" imageAlt="" />
      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{c.sectors.length} {t.count}</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.sectors.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.08}>
                <SectorCard sector={s} index={i} lang={lang} discover={c.ui.discover} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

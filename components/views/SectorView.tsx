import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero } from "@/components/ui";
import { getContent, localize, type Lang } from "@/content";

export default function SectorView({ lang, slug }: { lang: Lang; slug: string }) {
  const c = getContent(lang);
  const t = c.ui.activites;
  const L = (p: string) => localize(lang, p);
  const index = c.sectors.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();
  const sector = c.sectors[index];
  const next = c.sectors[(index + 1) % c.sectors.length];
  const companies = c.subsidiaries.concat(c.cooperative).filter((s) => sector.companies.includes(s.name));

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={sector.title} intro={sector.short} image={sector.image} imageAlt={sector.imageAlt} />

      <section className="py-24 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Eyebrow>{t.overview}</Eyebrow>
            <p className="mt-6 text-xl leading-relaxed text-ink md:text-2xl">{sector.intro}</p>

            <h2 className="mt-14 text-2xl font-bold">{t.keyPoints}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {sector.points.map((e) => (
                <li key={e} className="flex gap-3 rounded-lg border border-line p-5">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green" aria-hidden />
                  <span className="text-ink">{e}</span>
                </li>
              ))}
            </ul>

            {sector.outlook && (
              <div className="mt-10 rounded-lg border-l-4 border-sand bg-paper p-6">
                <p className="eyebrow text-[11px] text-[#8a6d2f]">{t.outlook}</p>
                <p className="mt-2 leading-relaxed text-ink">{sector.outlook}</p>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-lg bg-paper p-8">
                <p className="eyebrow text-[11px] text-green">{t.companies}</p>
                <ul className="mt-4 space-y-4">
                  {companies.map((s) => (
                    <li key={s.slug} className="flex items-center gap-4">
                      {s.logo && (
                        <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded bg-white">
                          <Image src={s.logo} alt="" fill sizes="80px" className="object-contain p-1 mix-blend-multiply" />
                        </span>
                      )}
                      <span>
                        <span className="block font-display text-lg font-bold">{s.name}</span>
                        <span className="text-[14px] text-body">{s.city}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <hr className="my-6 border-line" />
                <p className="text-body">{t.asideText}</p>
                <div className="mt-6"><ButtonLink href={`${L("/contact")}?objet=1`}>{c.ui.contactCta}</ButtonLink></div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {sector.slug === "sucre" && (
        <section className="relative overflow-hidden bg-ink py-24">
          <Image src="/images/raffinerie-projet.webp" alt={c.project.imageAlt} fill sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" aria-hidden />
          <div className="container-x relative max-w-2xl">
            <Eyebrow onDark>{t.projectTitle}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold text-white md:text-4xl">{c.project.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{c.project.text}</p>
          </div>
        </section>
      )}

      <section className="border-t border-line">
        <Link href={L(`/activites/${next.slug}`)} className="group container-x flex items-center justify-between py-10">
          <span>
            <span className="eyebrow text-[11px] text-body">{t.next}</span>
            <span className="mt-1 block font-display text-2xl font-bold group-hover:text-green md:text-3xl">{next.title}</span>
          </span>
          <span className="text-3xl text-red transition-transform group-hover:translate-x-2" aria-hidden>→</span>
        </Link>
      </section>
    </>
  );
}

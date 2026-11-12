import Image from "next/image";
import Counter from "@/components/Counter";
import Media from "@/components/Media";
import NewsCard from "@/components/NewsCard";
import Pillars from "@/components/Pillars";
import Reveal from "@/components/Reveal";
import SectorCard from "@/components/SectorCard";
import BrandLogo from "@/components/BrandLogo";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { getContent, localize, type Lang } from "@/content";

export default function HomeView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.ui.home;
  const L = (p: string) => localize(lang, p);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-24 pt-40">
        <Media src="/images/hero-corridor.webp" alt="" preload />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden />
        <div className="container-x relative">
          <Eyebrow onDark>{t.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-[40px] font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-[70px]">{t.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">{t.sub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={L("/activites")}>{t.ctaActivities}</ButtonLink>
            <ButtonLink href={L("/contact")} variant="light">{c.ui.contactCta}</ButtonLink>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section aria-label={t.statsLabel} className="relative z-10 -mt-14">
        <div className="container-x">
          <div className="grid grid-cols-2 overflow-hidden rounded-lg bg-white shadow-[0_30px_60px_-30px_rgba(20,24,27,0.35)] lg:grid-cols-4">
            {c.stats.map((s, i) => (
              <div key={s.label} className={`p-6 md:p-10 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""} border-line`}>
                <p className="whitespace-nowrap font-display text-[32px] font-extrabold text-red sm:text-4xl md:text-5xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[14px] font-medium text-body md:text-[15px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le groupe en bref */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.groupEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">{t.groupTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">{c.description}</p>
            <p className="mt-4 leading-relaxed text-body">{t.groupMore}</p>
            <div className="mt-9">
              <ButtonLink href={L("/le-groupe")} variant="outline">{t.groupCta}</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/equipe-reunion.webp" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-4 hidden w-60 rounded-lg bg-green p-6 text-white shadow-xl sm:block md:-left-8">
              <p className="font-display text-4xl font-extrabold">9</p>
              <p className="mt-1 text-[14px] text-white/85">{t.badge}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Secteurs */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>{t.sectorsEyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">{t.sectorsTitle}</h2>
            </div>
            <ButtonLink href={L("/activites")} variant="outline">{t.sectorsCta}</ButtonLink>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.sectors.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.08}>
                <SectorCard sector={s} index={i} lang={lang} discover={c.ui.discover} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projet raffinerie */}
      <section className="relative overflow-hidden bg-ink py-28 md:py-36">
        <Media src="/images/raffinerie-projet.webp" alt={c.project.imageAlt} />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" aria-hidden />
        <div className="container-x relative">
          <Reveal className="max-w-xl">
            <Eyebrow onDark>{c.project.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">{c.project.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">{c.project.text}</p>
            <div className="mt-9"><ButtonLink href={L("/activites/sucre")}>{t.projectCta}</ButtonLink></div>
          </Reveal>
        </div>
      </section>

      {/* Marques */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>{t.brandsEyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">{t.brandsTitle}</h2>
            </div>
            <ButtonLink href={L("/produits")} variant="outline">{t.brandsCta}</ButtonLink>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {c.brands.filter((b) => b.logo).map((b) => (
              <div key={b.name} className="flex aspect-[4/3] items-center justify-center rounded-lg border border-line bg-white p-5">
                <BrandLogo brand={b} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>{t.engagementEyebrow}</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">{t.engagementTitle}</h2>
            </div>
            <p className="text-lg leading-relaxed text-body">{c.engagement.intro}</p>
          </Reveal>
          <div className="mt-14">
            <Pillars pillars={c.engagement.pillars} />
          </div>
        </div>
      </section>

      {/* Implantations */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>{t.presenceEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">{t.presenceTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">{t.presenceText}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-lg bg-ink p-8 text-white md:p-10">
              <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(80% 70% at 100% 0%, rgba(0,145,59,0.45), transparent 60%), repeating-radial-gradient(circle at 30% 120%, rgba(255,255,255,0.05) 0 1px, transparent 1px 28px)" }} aria-hidden />
              <ol className="relative">
                {c.presence.map((p, i) => (
                  <li key={p.country} className="relative flex gap-5 pb-10 last:pb-0">
                    {i === 0 && <span className="absolute left-[11px] top-7 h-full w-px border-l border-dashed border-white/30" aria-hidden />}
                    <span className={`relative mt-1 h-6 w-6 shrink-0 rounded-full border-4 bg-white ${i === 0 ? "border-red" : "border-green"}`} aria-hidden />
                    <div>
                      <p className="font-display text-2xl font-bold">{p.country}</p>
                      <p className="mt-2 leading-relaxed text-white/70">{p.places}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Actualités */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>{t.newsEyebrow}</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">{t.newsTitle}</h2>
            </div>
            <ButtonLink href={L("/actualites")} variant="outline">{t.newsCta}</ButtonLink>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {c.news.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.1}>
                <NewsCard item={n} lang={lang} readLabel={c.ui.readArticle} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-ink py-28 md:py-36">
        <Media src="/images/douala-skyline.webp" alt="" />
        <div className="absolute inset-0 bg-ink/70" aria-hidden />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="eyebrow text-white/80">{t.ctaEyebrow}</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">{t.ctaTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">{t.ctaText}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href={L("/contact")}>{c.ui.contactCta}</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

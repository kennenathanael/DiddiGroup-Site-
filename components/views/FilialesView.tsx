import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero } from "@/components/ui";
import { contact, getContent, localize, type Lang, type Subsidiary } from "@/content";

function Card({ s, lang, i }: { s: Subsidiary; lang: Lang; i?: number }) {
  const t = getContent(lang).ui.filiales;
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="relative flex h-20 w-32 items-center justify-center overflow-hidden rounded bg-white">
          {s.logo ? (
            <Image src={s.logo} alt={s.name} fill sizes="128px" className="object-contain mix-blend-multiply" />
          ) : (
            <span className="font-display text-sm font-bold text-green">{s.name}</span>
          )}
        </span>
        {i !== undefined && <span className="font-display text-sm font-bold text-red">{String(i + 1).padStart(2, "0")}</span>}
      </div>
      <h2 className="mt-5 text-xl font-bold">{s.name}</h2>
      {s.fullName && <p className="text-[14px] text-body">{s.fullName}</p>}
      <p className="eyebrow mt-3 text-[10px] text-green">
        {s.city}{s.since && ` · ${t.since} ${s.since}`}
      </p>
      <p className="mt-3 text-[15px] font-semibold text-ink">{s.activity}</p>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-body">{s.text}</p>
      <Link href={localize(lang, `/activites/${s.sector}`)} className="mt-5 text-[14px] font-semibold text-red hover:underline">
        {t.seeActivity} →
      </Link>
    </article>
  );
}

export default function FilialesView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.ui.filiales;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} image="/images/logistique-entrepot.webp" imageAlt="" />
      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 flex max-w-md flex-col items-center rounded-lg border border-line bg-white p-6 text-center">
            <Image src="/logo-diddi-group.png" alt={contact.legalName} width={263} height={99} className="h-12 w-auto" />
            <p className="eyebrow mt-3 text-[11px] text-body">Holding · {contact.legalName}</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.subsidiaries.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Card s={s} lang={lang} i={i} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Eyebrow>{t.coopEyebrow}</Eyebrow>
            <div className="mt-5 max-w-xl">
              <Card s={c.cooperative} lang={lang} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

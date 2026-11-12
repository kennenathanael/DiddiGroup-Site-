import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero } from "@/components/ui";
import { contact, getContent, type Lang } from "@/content";

export default function CarrieresView({ lang }: { lang: Lang }) {
  const t = getContent(lang).ui.carrieres;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} image="/images/logistique-entrepot.webp" imageAlt="" />

      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.whyEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">{t.whyTitle}</h2>
            <ul className="mt-10 space-y-8">
              {t.reasons.map((r, i) => (
                <li key={r.title} className="flex gap-5">
                  <span className="font-display text-sm font-bold text-red">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold">{r.title}</h3>
                    <p className="mt-1 text-body">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/equipe-reunion.webp" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-x">
          <div className="rounded-lg border border-line bg-white p-10 text-center">
            <p className="text-xl font-bold text-ink">{t.noOpenings}</p>
            <p className="mt-3 text-body">
              {t.noOpeningsText}{" "}
              <a className="font-semibold text-green underline" href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

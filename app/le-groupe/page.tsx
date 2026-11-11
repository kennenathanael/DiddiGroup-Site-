import type { Metadata } from "next";
import Image from "next/image";
import Pillars from "@/components/Pillars";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero, Todo } from "@/components/ui";
import { company, engagement, stats } from "@/content/site";

export const metadata: Metadata = {
  title: "Le Groupe",
  description: "DIDDI GROUP, conglomérat camerounais diversifié : histoire, engagement, gouvernance et nouveau siège de Garoua-Boulaï.",
};

const mvv = [
  { title: "Mission", text: "Mission officielle" },
  { title: "Vision", text: "Vision officielle" },
  { title: "Valeurs", text: "Valeurs officielles" },
];

export default function LeGroupePage() {
  return (
    <>
      <PageHero
        eyebrow="Le Groupe"
        title="Un groupe camerounais, une ambition panafricaine."
        intro={company.description}
        image="/images/equipe-reunion.png"
        imageAlt="Équipe de professionnels en réunion"
      />

      {/* Chiffres */}
      <section className="border-b border-line">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-10 ${i % 2 ? "pl-6" : "pr-6"} ${i > 0 ? "lg:border-l lg:pl-8" : ""} border-line`}>
              <p className="font-display text-4xl font-extrabold text-red">{s.prefix}{s.value}{s.suffix}</p>
              <p className="mt-1 text-[15px] text-body">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Histoire */}
      <section id="histoire" className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Eyebrow>Notre histoire</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Nés d&apos;une histoire humble.</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              Parti de Garoua-Boulaï, dans la Région de l&apos;Est du Cameroun, DIDDI GROUP s&apos;est développé jusqu&apos;à fédérer neuf filiales dans deux pays et plus de 800 collaborateurs directs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="relative border-l border-line pl-8">
              {[
                { year: "Année de création", text: "Fondation du groupe à Garoua-Boulaï" },
                { year: "Étape clé", text: "Développement des activités de transport (TLR Sarl)" },
                { year: "Étape clé", text: "Diversification : agroalimentaire, café, sucre, pétrole, mines, forêt" },
                { year: "2025", text: "Programme de formation commerciale et construction du nouveau siège" },
              ].map((step, i) => (
                <li key={i} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-4 border-white bg-green ring-1 ring-line" aria-hidden />
                  <p className="font-display text-lg font-bold text-ink">
                    {step.year === "2025" ? "2025" : <Todo>{step.year}</Todo>}
                  </p>
                  <p className="mt-1 text-body">{step.text}{i < 3 ? <> · <Todo>à confirmer</Todo></> : null}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Engagement */}
      <section id="engagement" className="relative overflow-hidden bg-ink py-24 md:py-32">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/sucre-champs.png" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" aria-hidden />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <Eyebrow onDark>Notre engagement</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">Servir les hommes et les territoires.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">{engagement.intro}</p>
          </Reveal>
          <div className="mt-14">
            <Pillars onDark />
          </div>
        </div>
      </section>

      {/* Mission / Vision / Valeurs */}
      <section className="bg-paper py-24 md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Mission · Vision · Valeurs</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">Ce qui nous guide.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {mvv.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} className="rounded-lg border border-line bg-white p-8">
                <p className="font-display text-sm font-bold text-red">0{i + 1}</p>
                <h3 className="mt-4 text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 text-body"><Todo>{b.text} — à compléter</Todo></p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section id="gouvernance" className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="flex aspect-[4/5] items-center justify-center rounded-lg border border-dashed border-sand bg-paper text-center">
              <div>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto text-sand" aria-hidden>
                  <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
                <p className="mt-4 text-[14px] text-body">Photo officielle du Président<br />à fournir</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Mot du Président</Eyebrow>
            <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
              « <Todo>Message du Président — à compléter</Todo> »
            </blockquote>
            <p className="mt-8 font-bold text-ink"><Todo>Nom du Président — à compléter</Todo></p>
            <p className="text-body"><Todo>Fonction — à compléter</Todo></p>
          </Reveal>
        </div>
      </section>

      {/* Nouveau siège */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/siege-chantier.png" alt="Nouveau siège en construction" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Infrastructures</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Un nouveau siège à Garoua-Boulaï.</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              Le groupe poursuit son expansion avec la construction de son nouveau siège social à Garoua-Boulaï, là où son histoire a commencé.
            </p>
            <p className="mt-4 text-body">Superficie : <Todo>à compléter</Todo> · Inauguration : <Todo>à compléter</Todo></p>
            <div className="mt-9"><ButtonLink href="/actualites/nouveau-siege-garoua-boulai" variant="outline">Lire l&apos;actualité</ButtonLink></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

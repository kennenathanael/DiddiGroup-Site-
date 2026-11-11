import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero, Todo } from "@/components/ui";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Carrières",
  description: "Rejoignez DIDDI GROUP : plus de 800 collaborateurs dans des secteurs stratégiques.",
};

const reasons = [
  { title: "Un groupe en croissance", text: "Plus de 800 collaborateurs directs, neuf filiales, deux pays." },
  { title: "La formation au cœur", text: "Des programmes comme la formation commerciale menée à Garoua-Boulaï en 2025." },
  { title: "Des métiers variés", text: "Transport, industrie, commerce, énergie, mines, forêt et fonctions support." },
];

export default function CarrieresPage() {
  return (
    <>
      <PageHero
        eyebrow="Carrières"
        title="Construisez votre avenir avec nous."
        intro="Rejoindre DIDDI GROUP, c'est contribuer au développement économique de nos territoires."
        image="/images/logistique-entrepot.png"
        imageAlt="Équipes au travail dans un entrepôt"
      />

      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Pourquoi nous rejoindre</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Des talents pour bâtir demain.</h2>
            <ul className="mt-10 space-y-8">
              {reasons.map((r, i) => (
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
            <Image src="/images/equipe-reunion.png" alt="Collaborateurs en réunion" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x">
          <Eyebrow>Offres d&apos;emploi</Eyebrow>
          <div className="mt-8 rounded-lg border border-dashed border-sand bg-white p-10 text-center">
            <p className="text-lg font-semibold text-ink">Aucune offre publiée pour le moment.</p>
            <p className="mt-2 text-body"><Todo>Offres d&apos;emploi — à compléter</Todo></p>
          </div>
        </div>
      </section>

      <section id="candidature" className="py-24">
        <div className="container-x max-w-3xl">
          <Eyebrow>Candidature spontanée</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold">Envoyez-nous votre candidature</h2>
          <p className="mt-3 text-body">
            Présentez-vous ci-dessous, puis envoyez votre CV à{" "}
            <a className="font-semibold text-green underline" href={`mailto:${company.email}?subject=${encodeURIComponent("Candidature spontanée")}`}>{company.email}</a>.
            Nous étudions chaque candidature avec attention.
          </p>
          <div className="mt-10">
            <ContactForm defaultSubject="Recrutement" />
          </div>
        </div>
      </section>
    </>
  );
}

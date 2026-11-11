import type { Metadata } from "next";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero, Todo } from "@/components/ui";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "Produits",
  description: "Sucre, café torréfié, produits agroalimentaires et produits pétroliers : aperçu des produits de DIDDI GROUP.",
};

export default function ProduitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Produits"
        title="Des produits du quotidien, faits avec exigence."
        intro="Un aperçu des familles de produits proposées par les sociétés du groupe."
        image="/images/cafe-torrefaction.png"
        imageAlt="Grains de café fraîchement torréfiés"
      />
      <section className="py-24">
        <div className="container-x">
          <Reveal><Eyebrow>Nos familles de produits</Eyebrow></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <article className="overflow-hidden rounded-lg border border-line">
                  <div className="relative aspect-[16/9] bg-ink">
                    <Media src={p.image} alt={p.title} label="Photo à venir" sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold">{p.title}</h2>
                    <p className="mt-3 text-body">{p.text}</p>
                    <p className="mt-4 text-[14px] text-body">Marques et formats : <Todo>à compléter</Todo></p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 rounded-lg bg-paper p-8 md:flex md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="text-2xl font-bold">Distributeur, revendeur ou grand compte ?</h2>
              <p className="mt-2 text-body">Contactez nos équipes commerciales pour toute demande.</p>
            </div>
            <div className="mt-6 md:mt-0"><ButtonLink href="/contact">Demande commerciale</ButtonLink></div>
          </div>
        </div>
      </section>
    </>
  );
}

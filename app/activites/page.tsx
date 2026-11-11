import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectorCard from "@/components/SectorCard";
import { Eyebrow, PageHero } from "@/components/ui";
import { sectors } from "@/content/site";

export const metadata: Metadata = {
  title: "Nos activités",
  description: "Transport & logistique, sucre, café, agroalimentaire, import-export, distribution pétrolière, mines et forêt : les activités de DIDDI GROUP.",
};

export default function ActivitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos activités"
        title="Des secteurs stratégiques pour l'économie réelle."
        intro="De la route à l'usine, de la terre au marché : DIDDI GROUP opère dans des secteurs essentiels au développement du Cameroun et de la région."
        image="/images/import-export-port.png"
        imageAlt="Port à conteneurs avec grues de chargement"
      />
      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{sectors.length} pôles d&apos;activité</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <SectorCard sector={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

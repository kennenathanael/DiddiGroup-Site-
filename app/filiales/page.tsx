import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero, Txt } from "@/components/ui";
import { subsidiaries } from "@/content/site";

export const metadata: Metadata = {
  title: "Nos filiales",
  description: "Les 9 filiales de DIDDI GROUP, dont TLR Sarl (transport & logistique).",
};

export default function FilialesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos filiales"
        title="Neuf sociétés, une même exigence."
        intro="DIDDI GROUP fédère neuf filiales réparties dans deux pays, chacune spécialisée dans son secteur."
        image="/images/logistique-entrepot.png"
        imageAlt="Entrepôt logistique moderne"
      />
      <section className="py-24">
        <div className="container-x">
          <Reveal><Eyebrow>{subsidiaries.length} filiales</Eyebrow></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((s, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <article className={`flex h-full flex-col rounded-lg border p-8 ${s.confirmed ? "border-green/30 bg-white shadow-sm" : "border-line bg-paper"}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-red">{String(i + 1).padStart(2, "0")}</span>
                    {s.confirmed && <span className="eyebrow rounded bg-green/10 px-2 py-1 text-[10px] text-green">Filiale</span>}
                  </div>
                  <h2 className="mt-6 text-xl font-bold"><Txt>{s.name}</Txt></h2>
                  <dl className="mt-4 space-y-1 text-[15px] text-body">
                    <div><dt className="inline">Secteur : </dt><dd className="inline"><Txt>{s.sector}</Txt></dd></div>
                    <div><dt className="inline">Pays : </dt><dd className="inline"><Txt>{s.country}</Txt></dd></div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

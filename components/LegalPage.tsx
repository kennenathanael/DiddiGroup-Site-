import type { ReactNode } from "react";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-ink pb-14 pt-36 text-white">
        <div className="container-x max-w-4xl">
          <p className="eyebrow text-white/70">Informations légales</p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">{title}</h1>
          <p className="mt-4 text-white/60">Dernière mise à jour : {updated}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-x max-w-4xl space-y-10 leading-relaxed text-body [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
          {children}
        </div>
      </section>
    </>
  );
}

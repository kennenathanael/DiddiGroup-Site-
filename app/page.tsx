import Image from "next/image";
import Counter from "@/components/Counter";
import Media from "@/components/Media";
import NewsCard from "@/components/NewsCard";
import Pillars from "@/components/Pillars";
import Reveal from "@/components/Reveal";
import SectorCard from "@/components/SectorCard";
import { ButtonLink, Eyebrow, Todo } from "@/components/ui";
import { company, engagement, news, sectors, stats } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-24 pt-40">
        <Media src="/images/hero-corridor.png" alt="Convoi de camions sur une route de latérite traversant les collines de l'Est-Cameroun au lever du soleil" preload />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden />
        <div className="container-x relative">
          <div>
            <Eyebrow onDark>Conglomérat camerounais · Vision panafricaine</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-[42px] font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-[76px]">
              Bâtir aujourd&apos;hui l&apos;économie africaine de demain.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Transport, énergie, agroalimentaire, commerce, mines et forêt : DIDDI GROUP rassemble des sociétés qui créent de la valeur au cœur des territoires.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/activites">Découvrir nos activités</ButtonLink>
              <ButtonLink href="/contact" variant="light">Nous contacter</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section aria-label="Chiffres clés" className="relative z-10 -mt-14">
        <div className="container-x">
          <div className="grid grid-cols-2 overflow-hidden rounded-lg bg-white shadow-[0_30px_60px_-30px_rgba(20,24,27,0.35)] lg:grid-cols-4">
            {stats.map((s, i) => (
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
            <Eyebrow>Le Groupe</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Un groupe diversifié, ancré dans ses territoires.</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">{company.description}</p>
            <p className="mt-4 leading-relaxed text-body">
              Depuis son siège de Garoua-Boulaï et son bureau opérationnel de Douala, le groupe fédère neuf filiales dans deux pays.
            </p>
            <div className="mt-9">
              <ButtonLink href="/le-groupe" variant="outline">Découvrir le groupe</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/equipe-reunion.png" alt="Équipe de professionnels en réunion" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-4 hidden w-60 rounded-lg bg-green p-6 text-white shadow-xl sm:block md:-left-8">
              <p className="font-display text-4xl font-extrabold">9</p>
              <p className="mt-1 text-[14px] text-white/85">filiales dans des secteurs stratégiques</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Secteurs */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Nos activités</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">Des secteurs stratégiques pour l&apos;économie réelle.</h2>
            </div>
            <ButtonLink href="/activites" variant="outline">Toutes nos activités</ButtonLink>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <SectorCard sector={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Focus TLR */}
      <section className="relative overflow-hidden bg-ink py-28 md:py-40">
        <Media src="/images/tlr-flotte.png" alt="Flotte de tracteurs routiers neufs" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" aria-hidden />
        <div className="container-x relative">
          <Reveal className="max-w-xl">
            <Eyebrow onDark>Filiale · Transport & Logistique</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">TLR Sarl, la force de mouvement du groupe.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Filiale transport de DIDDI GROUP, TLR Sarl exploite une flotte de tracteurs routiers Sinotruk, renforcée par l&apos;arrivée d&apos;une dizaine de véhicules neufs.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/activites/transport-logistique">Découvrir TLR Sarl</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>Notre engagement</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Une entreprise n&apos;a de valeur que si elle sert les hommes et les territoires.</h2>
            </div>
            <p className="text-lg leading-relaxed text-body">{engagement.intro}</p>
          </Reveal>
          <div className="mt-14">
            <Pillars />
          </div>
        </div>
      </section>

      {/* Implantations */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Implantations</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">De Garoua-Boulaï à Douala.</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              Le groupe est implanté dans deux pays. Au Cameroun, il s&apos;appuie sur son siège social à Garoua-Boulaï, dans la Région de l&apos;Est, et sur son bureau opérationnel à Douala.
            </p>
            <p className="mt-4 text-body">Second pays d&apos;implantation : <Todo>à compléter</Todo></p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-lg bg-ink p-8 text-white md:p-10">
              <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(80% 70% at 100% 0%, rgba(0,145,59,0.45), transparent 60%), repeating-radial-gradient(circle at 30% 120%, rgba(255,255,255,0.05) 0 1px, transparent 1px 28px)" }} aria-hidden />
              <ol className="relative space-y-0">
                {[
                  { place: "Garoua-Boulaï", role: "Siège social", detail: "Grand Marché · Région de l'Est" },
                  { place: "Douala", role: "Bureau opérationnel", detail: "Bonapriso · Région du Littoral" },
                ].map((l, i) => (
                  <li key={l.place} className="relative flex gap-5 pb-10 last:pb-0">
                    {i === 0 && <span className="absolute left-[11px] top-7 h-full w-px border-l border-dashed border-white/30" aria-hidden />}
                    <span className={`relative mt-1 h-6 w-6 shrink-0 rounded-full border-4 ${i === 0 ? "border-red bg-white" : "border-green bg-white"}`} aria-hidden />
                    <div>
                      <p className="eyebrow text-[11px] text-sand">{l.role}</p>
                      <p className="mt-1 font-display text-2xl font-bold">{l.place}</p>
                      <p className="mt-1 text-white/65">{l.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Actualités</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">La vie du groupe.</h2>
            </div>
            <ButtonLink href="/actualites" variant="outline">Toutes les actualités</ButtonLink>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {news.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.1}>
                <NewsCard item={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-ink py-28 md:py-36">
        <Media src="/images/douala-skyline.png" alt="Skyline de Douala à l'heure bleue" />
        <div className="absolute inset-0 bg-ink/70" aria-hidden />
        <div className="container-x relative text-center">
          <Reveal>
            <Eyebrow onDark><span className="mx-auto">Partenariats · Affaires · Presse</span></Eyebrow>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">Construisons ensemble.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">Partenaires, fournisseurs, institutions ou talents : nos équipes sont à votre écoute.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact">Nous contacter</ButtonLink>
              <ButtonLink href="/carrieres" variant="light">Nous rejoindre</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

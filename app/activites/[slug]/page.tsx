import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero, Txt } from "@/components/ui";
import { sectors } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/activites/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  return sector ? { title: sector.title, description: sector.short } : {};
}

export default async function SectorPage({ params }: PageProps<"/activites/[slug]">) {
  const { slug } = await params;
  const index = sectors.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();
  const sector = sectors[index];
  const next = sectors[(index + 1) % sectors.length];

  return (
    <>
      <PageHero eyebrow={sector.upcoming ? "Nos activités · Bientôt" : "Nos activités"} title={sector.title} intro={sector.short} image={sector.image} imageAlt={sector.imageAlt} />

      <section className="py-24 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Eyebrow>Présentation</Eyebrow>
            <p className="mt-6 text-xl leading-relaxed text-ink md:text-2xl">{sector.intro}</p>

            <h2 className="mt-14 text-2xl font-bold">Savoir-faire</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {sector.expertise.map((e) => (
                <li key={e} className="flex gap-3 rounded-lg border border-line p-5">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green" aria-hidden />
                  <span className="text-ink"><Txt>{e}</Txt></span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-lg bg-paper p-8 lg:sticky lg:top-28">
              <p className="eyebrow text-[11px] text-green">Filiale</p>
              <p className="mt-2 font-display text-2xl font-bold"><Txt>{sector.subsidiary}</Txt></p>
              <hr className="my-6 border-line" />
              <p className="text-body">Un projet, un partenariat ou une demande commerciale pour ce secteur ?</p>
              <div className="mt-6"><ButtonLink href={`/contact?objet=${encodeURIComponent("Commercial")}`}>Nous contacter</ButtonLink></div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <Link href={`/activites/${next.slug}`} className="group container-x flex items-center justify-between py-10">
          <span>
            <span className="eyebrow text-[11px] text-body">Activité suivante</span>
            <span className="mt-1 block font-display text-2xl font-bold group-hover:text-green md:text-3xl">{next.title}</span>
          </span>
          <span className="text-3xl text-red transition-transform group-hover:translate-x-2" aria-hidden>→</span>
        </Link>
      </section>
    </>
  );
}

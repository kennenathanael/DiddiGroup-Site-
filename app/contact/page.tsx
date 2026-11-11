import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Eyebrow, PageHero } from "@/components/ui";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez DIDDI GROUP : siège social à Garoua-Boulaï, bureau opérationnel à Douala-Bonapriso.",
};

export default function ContactPage() {
  const offices = [company.headOffice, company.operationalOffice];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        intro="Partenariat, demande commerciale, presse ou recrutement : écrivez-nous, nos équipes vous répondront."
        image="/images/douala-skyline.png"
        imageAlt="Skyline de Douala à l'heure bleue"
      />

      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Formulaire</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold">Envoyez-nous un message</h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-5">
            {offices.map((o) => (
              <div key={o.label} className="rounded-lg bg-paper p-7">
                <p className="eyebrow text-[11px] text-green">{o.label}</p>
                <address className="mt-3 not-italic leading-relaxed text-ink">
                  {o.lines.map((l) => <span key={l} className="block">{l}</span>)}
                </address>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[14px] font-semibold text-red hover:underline"
                >
                  Voir sur la carte →
                </a>
              </div>
            ))}
            <div className="rounded-lg bg-ink p-7 text-white">
              <p className="eyebrow text-[11px] text-sand">Joindre le groupe</p>
              <a href={company.phoneHref} className="mt-3 block font-display text-2xl font-bold hover:text-sand">{company.phone}</a>
              <a href={`mailto:${company.email}`} className="mt-1 block text-white/80 hover:text-white">{company.email}</a>
            </div>
          </aside>
        </div>
      </section>

      <section aria-label="Carte" className="h-[420px] w-full bg-paper">
        <iframe
          title="Carte : bureau opérationnel de DIDDI GROUP à Douala-Bonapriso"
          src={`https://www.google.com/maps?q=${encodeURIComponent(company.operationalOffice.mapQuery)}&output=embed`}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

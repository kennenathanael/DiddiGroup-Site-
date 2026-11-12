import ContactForm from "@/components/ContactForm";
import { Eyebrow, PageHero } from "@/components/ui";
import { contact, getContent, type Lang } from "@/content";

export default function ContactView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.ui.contact;
  const offices = [
    { ...c.headOffice, map: contact.headOfficeMap },
    { ...c.operationalOffice, map: contact.operationalOfficeMap },
  ];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} image="/images/douala-skyline.png" imageAlt="" />

      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>{t.formEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold">{t.formTitle}</h2>
            <div className="mt-10">
              <ContactForm lang={lang} />
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
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.map)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[14px] font-semibold text-red hover:underline"
                >
                  {t.map} →
                </a>
              </div>
            ))}
            <div className="rounded-lg bg-ink p-7 text-white">
              <p className="eyebrow text-[11px] text-sand">{t.reach}</p>
              <a href={contact.phoneHref} className="mt-3 block font-display text-2xl font-bold hover:text-sand">{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="mt-1 block text-white/80 hover:text-white">{contact.email}</a>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-1 block text-white/80 hover:text-white">WhatsApp</a>
            </div>
            <div className="rounded-lg border border-line p-7">
              <p className="eyebrow text-[11px] text-green">{t.hours}</p>
              <dl className="mt-3 space-y-2 text-[15px]">
                {c.hours.map(([d, h]) => (
                  <div key={d} className="flex justify-between gap-4">
                    <dt className="text-body">{d}</dt>
                    <dd className="font-semibold text-ink">{h}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section aria-label={t.mapTitle} className="h-[420px] w-full bg-paper">
        <iframe
          title={t.mapTitle}
          src={`https://www.google.com/maps?q=${encodeURIComponent(contact.operationalOfficeMap)}&output=embed`}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

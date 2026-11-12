import Image from "next/image";
import Pillars from "@/components/Pillars";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero } from "@/components/ui";
import { contact, getContent, localize, type Lang } from "@/content";

export default function GroupeView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.ui.groupe;
  const L = (p: string) => localize(lang, p);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={c.description} image="/images/equipe-reunion.png" imageAlt="" />

      {/* Chiffres */}
      <section className="border-b border-line">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {c.stats.map((s, i) => (
            <div key={s.label} className={`py-10 ${i % 2 ? "pl-6" : "pr-6"} ${i > 0 ? "lg:border-l lg:pl-8" : ""} border-line`}>
              <p className="font-display text-4xl font-extrabold text-red">{s.prefix}{s.value}{s.suffix}</p>
              <p className="mt-1 text-[15px] text-body">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mot du Président */}
      <section id="president" className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg bg-ink p-10 text-white lg:sticky lg:top-28">
              <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(90% 80% at 100% 0%, rgba(0,145,59,0.5), transparent 60%), radial-gradient(80% 70% at 0% 100%, rgba(228,40,28,0.35), transparent 60%)" }} aria-hidden />
              <div className="relative">
                <span className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-sand font-display text-3xl font-extrabold text-sand">OM</span>
                <p className="mt-8 font-display text-2xl font-bold">{contact.president}</p>
                <p className="mt-1 text-white/70">{c.president.title}</p>
                <p className="eyebrow mt-8 text-[11px] text-sand">{contact.legalName}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>{t.presidentEyebrow}</Eyebrow>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink">
              {c.president.message.map((p, i) => (
                <p key={i} className={i === 0 ? "font-display text-2xl font-semibold leading-snug md:text-[28px]" : ""}>
                  {i === 0 && "« "}{p}{i === c.president.message.length - 1 && " »"}
                </p>
              ))}
            </div>
            <p className="mt-8 font-bold text-ink">{contact.president}</p>
            <p className="text-body">{c.president.title}, {contact.name}</p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Valeurs */}
      <section className="bg-paper py-24 md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{t.mvvEyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">{t.mvvTitle}</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.mvv.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} className="rounded-lg border border-line bg-white p-8">
                <p className="font-display text-sm font-bold text-red">0{i + 1}</p>
                <h3 className="mt-4 text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section id="histoire" className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Eyebrow>{t.historyEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">{t.historyTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">{t.historyText}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="relative border-l border-line pl-8">
              {c.timeline.map((step) => (
                <li key={step.year} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-4 border-white bg-green ring-1 ring-line" aria-hidden />
                  <p className="font-display text-lg font-bold text-red">{step.year}</p>
                  <p className="mt-1 text-body">{step.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Engagement */}
      <section id="engagement" className="relative overflow-hidden bg-ink py-24 md:py-32">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/agriculture.png" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" aria-hidden />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <Eyebrow onDark>{t.engagementEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">{t.engagementTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">{c.engagement.intro}</p>
          </Reveal>
          <div className="mt-14">
            <Pillars pillars={c.engagement.pillars} onDark />
          </div>
        </div>
      </section>

      {/* Implantations */}
      <section className="py-24 md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{t.presenceEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">{t.presenceTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {c.presence.map((p, i) => (
              <Reveal key={p.country} delay={i * 0.08} className="rounded-lg border border-line p-8">
                <span className={`block h-1 w-12 ${i === 0 ? "bg-red" : "bg-green"}`} aria-hidden />
                <h3 className="mt-5 text-2xl font-bold">{p.country}</h3>
                <p className="mt-3 leading-relaxed text-body">{p.places}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nouveau siège */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/siege-chantier.png" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>{t.hqEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">{t.hqTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">{t.hqText}</p>
            <div className="mt-9"><ButtonLink href={L("/actualites/nouveau-siege-garoua-boulai")} variant="outline">{t.hqCta}</ButtonLink></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

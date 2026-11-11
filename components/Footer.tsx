import Link from "next/link";
import Logo from "./Logo";
import { company, sectors } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo onDark />
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed">
            Conglomérat camerounais diversifié, porté par une vision panafricaine.
          </p>
          <p className="eyebrow mt-6 text-sand">{company.tagline}</p>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-white">Le Groupe</h2>
          <ul className="space-y-3 text-[15px]">
            <li><Link className="hover:text-white" href="/le-groupe">Qui sommes-nous</Link></li>
            <li><Link className="hover:text-white" href="/le-groupe#engagement">Notre engagement</Link></li>
            <li><Link className="hover:text-white" href="/filiales">Nos filiales</Link></li>
            <li><Link className="hover:text-white" href="/actualites">Actualités</Link></li>
            <li><Link className="hover:text-white" href="/carrieres">Carrières</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-white">Activités</h2>
          <ul className="space-y-3 text-[15px]">
            {sectors.slice(0, 6).map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={`/activites/${s.slug}`}>{s.title}</Link></li>
            ))}
            <li><Link className="text-white hover:text-sand" href="/activites">Toutes nos activités →</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-white">Contact</h2>
          <address className="space-y-4 text-[15px] not-italic leading-relaxed">
            <p><span className="text-white">{company.headOffice.label}</span><br />{company.headOffice.lines.join(", ")}</p>
            <p><span className="text-white">{company.operationalOffice.label}</span><br />{company.operationalOffice.lines.join(", ")}</p>
            <p>
              <a className="hover:text-white" href={company.phoneHref}>{company.phone}</a><br />
              <a className="hover:text-white" href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link className="hover:text-white" href="/mentions-legales">Mentions légales</Link>
            <Link className="hover:text-white" href="/confidentialite">Confidentialité</Link>
            {company.socials.map((s) => (
              <a key={s.label} className="hover:text-white" href={s.href} aria-label={`${s.label} (lien à compléter)`}>{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

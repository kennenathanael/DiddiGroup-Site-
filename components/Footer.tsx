"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { contact, getContent, localize, splitPath } from "@/content";

export default function Footer() {
  const [lang] = splitPath(usePathname());
  const c = getContent(lang);
  const f = c.ui.footer;
  const L = (p: string) => localize(lang, p);

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr_1.3fr]">
        <div>
          <Logo onDark href={L("/")} />
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed">{f.tagline}</p>
          <p className="eyebrow mt-6 text-sand">{contact.tagline}</p>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-white">{f.group}</h2>
          <ul className="space-y-3 text-[15px]">
            <li><Link className="hover:text-white" href={L("/le-groupe")}>{f.about}</Link></li>
            <li><Link className="hover:text-white" href={`${L("/le-groupe")}#engagement`}>{f.engagement}</Link></li>
            {c.nav.slice(3).map((n) => (
              <li key={n.href}><Link className="hover:text-white" href={L(n.href)}>{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-white">{f.activities}</h2>
          <ul className="space-y-3 text-[15px]">
            {c.sectors.slice(0, 6).map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={L(`/activites/${s.slug}`)}>{s.title}</Link></li>
            ))}
            <li><Link className="text-white hover:text-sand" href={L("/activites")}>{f.allActivities}</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-white">{f.contact}</h2>
          <address className="space-y-4 text-[15px] not-italic leading-relaxed">
            <p><span className="text-white">{c.headOffice.label}</span><br />{c.headOffice.lines.join(", ")}</p>
            <p><span className="text-white">{c.operationalOffice.label}</span><br />{c.operationalOffice.lines.join(", ")}</p>
            <p>
              <a className="hover:text-white" href={contact.phoneHref}>{contact.phone}</a><br />
              <a className="hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="text-[14px]">{c.hours.slice(0, 2).map(([d, h]) => `${d}${lang === "fr" ? " : " : ": "}${h}`).join(" · ")}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {contact.legalName}. {f.rights}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link className="hover:text-white" href={L("/mentions-legales")}>{f.legal}</Link>
            <Link className="hover:text-white" href={L("/confidentialite")}>{f.privacy}</Link>
            <a className="hover:text-white" href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

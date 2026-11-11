import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { Todo } from "@/components/ui";
import { company } from "@/content/site";

export const metadata: Metadata = { title: "Mentions légales", robots: { index: false } };

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updated="octobre 2026">
      <div>
        <h2>Éditeur du site</h2>
        <p>
          Le site {company.url.replace("https://", "")} est édité par {company.legalName}, société anonyme de droit camerounais régie par l&apos;Acte uniforme OHADA,
          au capital de <Todo>montant — à compléter</Todo>, immatriculée au RCCM sous le numéro <Todo>RCCM — à compléter</Todo>, NIU <Todo>NIU — à compléter</Todo>.
        </p>
        <p className="mt-3">
          Siège social : {company.headOffice.lines.join(", ")}.<br />
          Bureau opérationnel : {company.operationalOffice.lines.join(", ")}.<br />
          Téléphone : {company.phone} · Email : {company.email}
        </p>
      </div>
      <div>
        <h2>Directeur de la publication</h2>
        <p><Todo>Nom et fonction — à compléter</Todo></p>
      </div>
      <div>
        <h2>Hébergement</h2>
        <p><Todo>Nom, adresse et contact de l&apos;hébergeur — à compléter</Todo></p>
      </div>
      <div>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des éléments du site (textes, logos, marques, images, graphismes) est la propriété de {company.legalName} ou de ses ayants droit.
          Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.
          Certaines images présentes sur le site sont des illustrations.
        </p>
      </div>
      <div>
        <h2>Responsabilité</h2>
        <p>
          {company.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site, sans pouvoir en garantir l&apos;exhaustivité.
          Les informations sont fournies à titre indicatif et peuvent être modifiées à tout moment.
        </p>
      </div>
      <div>
        <h2>Droit applicable</h2>
        <p>Les présentes mentions légales sont régies par le droit camerounais. Tout litige relève de la compétence des juridictions camerounaises.</p>
      </div>
    </LegalPage>
  );
}

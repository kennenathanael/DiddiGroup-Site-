import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/content/site";

export const metadata: Metadata = { title: "Politique de confidentialité", robots: { index: false } };

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updated="octobre 2026">
      <div>
        <h2>Responsable du traitement</h2>
        <p>{company.legalName}, {company.headOffice.lines.join(", ")}. Contact : {company.email}.</p>
      </div>
      <div>
        <h2>Données collectées</h2>
        <p>
          Via les formulaires du site, nous collectons les données que vous nous transmettez volontairement : nom, société, email, téléphone, objet,
          message et, pour les candidatures, votre CV.
        </p>
      </div>
      <div>
        <h2>Finalités</h2>
        <p>Ces données servent uniquement à répondre à votre demande (contact, demande commerciale, presse) ou à étudier votre candidature.</p>
      </div>
      <div>
        <h2>Conservation</h2>
        <p>Les données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées ou archivées conformément à la réglementation applicable.</p>
      </div>
      <div>
        <h2>Partage</h2>
        <p>Vos données ne sont ni vendues ni cédées. Elles peuvent être transmises aux sociétés du groupe concernées par votre demande.</p>
      </div>
      <div>
        <h2>Vos droits</h2>
        <p>
          Conformément à la loi camerounaise n° 2024/017 relative à la protection des données à caractère personnel, vous disposez d&apos;un droit d&apos;accès,
          de rectification, d&apos;opposition et de suppression. Pour l&apos;exercer, écrivez à {company.email}.
        </p>
      </div>
      <div>
        <h2>Cookies</h2>
        <p>Ce site n&apos;utilise pas de cookies publicitaires. La carte intégrée sur la page Contact est fournie par Google Maps, qui peut déposer ses propres cookies.</p>
      </div>
    </LegalPage>
  );
}

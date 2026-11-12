import LegalPage from "@/components/LegalPage";
import { Todo } from "@/components/ui";
import { contact, getContent, type Lang } from "@/content";

const host = "GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA (GitHub Pages)";

export function MentionsView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const domain = contact.url.replace(/^https?:\/\//, "");
  const hq = c.headOffice.lines.join(", ");
  const office = c.operationalOffice.lines.join(", ");
  const todo = lang === "fr" ? "à compléter" : "to be completed";

  if (lang === "en") {
    return (
      <LegalPage eyebrow={c.ui.legal.eyebrow} title={c.meta.mentions.title} updated={c.ui.legal.updated}>
        <div>
          <h2>Publisher</h2>
          <p>
            The website {domain} is published by {contact.legalName}, a public limited company incorporated under Cameroonian law and governed by the OHADA Uniform Act,
            with share capital of <Todo>{todo}</Todo>, registered with the Trade and Personal Property Credit Register (RCCM) under number <Todo>{todo}</Todo>, tax ID (NIU) <Todo>{todo}</Todo>.
          </p>
          <p className="mt-3">Head office: {hq}.<br />Operational office: {office}.<br />Phone: {contact.phone} · Email: {contact.email}</p>
        </div>
        <div><h2>Publication director</h2><p>{contact.publicationDirector}</p></div>
        <div><h2>Hosting</h2><p>{host}</p></div>
        <div>
          <h2>Intellectual property</h2>
          <p>All content on this website (text, logos, trademarks, images, graphics) is the property of {contact.legalName}, its subsidiaries or their rights holders. Any reproduction, representation or adaptation, in whole or in part, without prior written permission is prohibited. Some images on this website are illustrations.</p>
        </div>
        <div><h2>Liability</h2><p>{contact.legalName} strives to ensure the accuracy of the information on this website but cannot guarantee that it is complete. Information is provided for guidance and may change at any time.</p></div>
        <div><h2>Governing law</h2><p>This legal notice is governed by Cameroonian law. Any dispute falls under the jurisdiction of the Cameroonian courts.</p></div>
      </LegalPage>
    );
  }

  return (
    <LegalPage eyebrow={c.ui.legal.eyebrow} title={c.meta.mentions.title} updated={c.ui.legal.updated}>
      <div>
        <h2>Éditeur du site</h2>
        <p>
          Le site {domain} est édité par {contact.legalName}, société anonyme de droit camerounais régie par l&apos;Acte uniforme OHADA,
          au capital de <Todo>{todo}</Todo>, immatriculée au RCCM sous le numéro <Todo>{todo}</Todo>, NIU <Todo>{todo}</Todo>.
        </p>
        <p className="mt-3">Siège social : {hq}.<br />Bureau opérationnel : {office}.<br />Téléphone : {contact.phone} · Email : {contact.email}</p>
      </div>
      <div><h2>Directeur de la publication</h2><p>{contact.publicationDirector}</p></div>
      <div><h2>Hébergement</h2><p>{host}</p></div>
      <div>
        <h2>Propriété intellectuelle</h2>
        <p>L&apos;ensemble des éléments du site (textes, logos, marques, images, graphismes) est la propriété de {contact.legalName}, de ses filiales ou de leurs ayants droit. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite. Certaines images présentes sur le site sont des illustrations.</p>
      </div>
      <div><h2>Responsabilité</h2><p>{contact.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site, sans pouvoir en garantir l&apos;exhaustivité. Les informations sont fournies à titre indicatif et peuvent être modifiées à tout moment.</p></div>
      <div><h2>Droit applicable</h2><p>Les présentes mentions légales sont régies par le droit camerounais. Tout litige relève de la compétence des juridictions camerounaises.</p></div>
    </LegalPage>
  );
}

export function ConfidentialiteView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const hq = c.headOffice.lines.join(", ");

  if (lang === "en") {
    return (
      <LegalPage eyebrow={c.ui.legal.eyebrow} title={c.meta.confidentialite.title} updated={c.ui.legal.updated}>
        <div><h2>Data controller</h2><p>{contact.legalName}, {hq}. Contact: {contact.email}.</p></div>
        <div><h2>Data collected</h2><p>Through the contact form, we collect the information you choose to send us: name, company, email, phone, subject and message.</p></div>
        <div><h2>Purpose</h2><p>This data is used only to answer your enquiry (contact, business enquiry, press).</p></div>
        <div><h2>Retention</h2><p>Data is kept for as long as needed to handle your enquiry, then deleted or archived in line with applicable regulations.</p></div>
        <div><h2>Sharing</h2><p>Your data is never sold or transferred. It may be shared with the group companies concerned by your enquiry.</p></div>
        <div><h2>Your rights</h2><p>Under Cameroon&apos;s Law No. 2024/017 on the protection of personal data, you have the right to access, correct, object to and delete your data. To exercise these rights, write to {contact.email}.</p></div>
        <div><h2>Cookies</h2><p>This website does not use advertising cookies. The map embedded on the Contact page is provided by Google Maps, which may set its own cookies.</p></div>
      </LegalPage>
    );
  }

  return (
    <LegalPage eyebrow={c.ui.legal.eyebrow} title={c.meta.confidentialite.title} updated={c.ui.legal.updated}>
      <div><h2>Responsable du traitement</h2><p>{contact.legalName}, {hq}. Contact : {contact.email}.</p></div>
      <div><h2>Données collectées</h2><p>Via le formulaire de contact, nous collectons les données que vous nous transmettez volontairement : nom, société, email, téléphone, objet et message.</p></div>
      <div><h2>Finalités</h2><p>Ces données servent uniquement à répondre à votre demande (contact, demande commerciale, presse).</p></div>
      <div><h2>Conservation</h2><p>Les données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées ou archivées conformément à la réglementation applicable.</p></div>
      <div><h2>Partage</h2><p>Vos données ne sont ni vendues ni cédées. Elles peuvent être transmises aux sociétés du groupe concernées par votre demande.</p></div>
      <div><h2>Vos droits</h2><p>Conformément à la loi camerounaise n° 2024/017 relative à la protection des données à caractère personnel, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de suppression. Pour l&apos;exercer, écrivez à {contact.email}.</p></div>
      <div><h2>Cookies</h2><p>Ce site n&apos;utilise pas de cookies publicitaires. La carte intégrée sur la page Contact est fournie par Google Maps, qui peut déposer ses propres cookies.</p></div>
    </LegalPage>
  );
}

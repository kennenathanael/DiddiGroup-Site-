import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contact, getContent } from "@/content";
import { asset } from "@/lib/paths";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const fr = getContent("fr");

export const metadata: Metadata = {
  metadataBase: new URL(contact.url),
  title: { default: fr.meta.siteTitle, template: "%s | DIDDI GROUP" },
  description: fr.description,
  openGraph: {
    type: "website",
    siteName: contact.name,
    images: [{ url: asset("/images/hero-corridor.png"), width: 1376, height: 768, alt: "DIDDI GROUP" }],
  },
  icons: { icon: asset("/logo-diddi-group.png") },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: contact.legalName,
  url: contact.url,
  logo: `${contact.url}/logo-diddi-group.png`,
  foundingDate: String(contact.founded),
  founder: { "@type": "Person", name: contact.president },
  email: contact.email,
  telephone: contact.phone,
  sameAs: [contact.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grand Marché",
    addressLocality: "Garoua-Boulaï",
    addressRegion: "Est",
    addressCountry: "CM",
  },
  subOrganization: fr.subsidiaries.map((s) => ({ "@type": "Organization", name: s.name })),
};

// Layout commun aux deux langues ; la langue du document est ajustée côté client (Header).
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/content/site";
import { asset } from "@/lib/paths";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "DIDDI GROUP — Conglomérat camerounais diversifié",
    template: "%s | DIDDI GROUP",
  },
  description: company.description,
  openGraph: {
    type: "website",
    locale: "fr_CM",
    siteName: company.name,
    images: [{ url: asset("/images/hero-corridor.png"), width: 1376, height: 768, alt: "DIDDI GROUP" }],
  },
  icons: { icon: asset("/logo-diddi-group.png") },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  url: company.url,
  logo: `${company.url}/logo-diddi-group.png`,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grand Marché",
    addressLocality: "Garoua-Boulaï",
    addressRegion: "Est",
    addressCountry: "CM",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

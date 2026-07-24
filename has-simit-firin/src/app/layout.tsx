import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { business } from "@/data/site";

// Display / başlık — sıcak, zarif serif
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

// Gövde metni
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Rakam / saat / etiket aksanı — "fırın fişi" hissi
const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "swap",
});

// TODO(gerçek veri): Gerçek alan adınızı buraya yazın (OG görselleri için gereklidir).
const siteUrl = "https://www.hassimitfirin.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Has Simit & Fırın — Bağlıca, Etimesgut | Her Sabah Taze Simit",
  description:
    "Has Simit & Fırın — Bağlıca, Etimesgut/Ankara. Her sabah 06.00'dan itibaren sıcak Ankara simidi, tereyağlı simit, taze poğaça, börek, pide ve lahmacun. Her gün 06:00–19:30 açık.",
  keywords: [
    "Has Simit Fırın",
    "Bağlıca simit",
    "Etimesgut fırın",
    "Ankara simidi",
    "tereyağlı simit",
    "taze poğaça",
    "kır pidesi",
    "Bağlıca fırın",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: business.name,
    title: "Has Simit & Fırın — Bağlıca, Etimesgut",
    description:
      "Her sabah 06.00'dan itibaren sıcak simit, taze poğaça ve günün böreğiyle Bağlıca'da kapımız açık.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1600,
        height: 1067,
        alt: "Has Simit & Fırın — taze simitler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Has Simit & Fırın — Bağlıca, Etimesgut",
    description:
      "Her sabah taze simit, poğaça ve börek. Her gün 06:00–19:30, Bağlıca / Etimesgut.",
  },
  robots: { index: true, follow: true },
};

// JSON-LD — Bakery. aggregateRating BİLİNÇLİ olarak eklenmedi (Google politikası).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}/images/hero.jpg`,
  description:
    "Bağlıca, Etimesgut'ta mahalle fırını. Her sabah taze Ankara simidi, tereyağlı simit, poğaça, börek, ekmek, pide ve lahmacun.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bağlıca Mah., Mermeroğlu Cd. No:64/B-B",
    addressLocality: "Etimesgut",
    addressRegion: "Ankara",
    postalCode: "06790",
    addressCountry: "TR",
  },
  telephone: "+903125444004",
  servesCuisine: ["Simit", "Börek", "Poğaça", "Pide", "Lahmacun", "Ekmek"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "19:30",
    },
  ],
  sameAs: [business.googleProfileUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} bg-cream font-body text-ink antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

// Fraunces — zarif, sıcak serif; başlıklarda ve italik aksanlarda kullanılır.
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const siteUrl = "https://www.eniscoskun.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enis Coşkun Gayrimenkul | Eryaman & Ankara Emlak",
    template: "%s | Enis Coşkun Gayrimenkul",
  },
  description:
    "Enis Coşkun Gayrimenkul — Eryaman merkezli güvenilir emlak ofisi. Etimesgut, Sincan, Çankaya ve Gölbaşı'nda satılık & kiralık konut, işyeri ve arsa; sahibinden.com güvencesiyle profesyonel danışmanlık.",
  keywords: [
    "Enis Coşkun Gayrimenkul",
    "Eryaman emlak",
    "Eryaman satılık daire",
    "Etimesgut kiralık daire",
    "Sincan satılık",
    "Çankaya rezidans",
    "Gölbaşı ofis",
    "Ankara gayrimenkul danışmanı",
  ],
  authors: [{ name: "Enis Coşkun Gayrimenkul" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Enis Coşkun Gayrimenkul",
    title: "Enis Coşkun Gayrimenkul | Eryaman & Ankara Emlak",
    description:
      "Eryaman merkezli güvenilir emlak ofisi. Satılık & kiralık konut, işyeri ve arsa; Ankara'nın dört bir yanında profesyonel gayrimenkul danışmanlığı.",
    images: [
      {
        url: "/ilanlar/1322464141.jpg",
        width: 1200,
        height: 630,
        alt: "Enis Coşkun Gayrimenkul — Ankara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enis Coşkun Gayrimenkul | Eryaman & Ankara Emlak",
    description:
      "Eryaman merkezli güvenilir emlak ofisi. Satılık & kiralık konut, işyeri ve arsa.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Enis Coşkun Gayrimenkul",
  url: siteUrl,
  image: `${siteUrl}/ilanlar/1322464141.jpg`,
  description:
    "Eryaman merkezli güvenilir emlak ofisi. Etimesgut, Sincan, Çankaya ve Gölbaşı'nda satılık ve kiralık konut, işyeri ve arsa danışmanlığı.",
  areaServed: ["Etimesgut", "Sincan", "Çankaya", "Gölbaşı", "Ankara"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Eryaman Mah., Dil Devrimi Cd., Uzuner Apt. No:11/4",
    addressLocality: "Etimesgut",
    addressRegion: "Ankara",
    postalCode: "06824",
    addressCountry: "TR",
  },
  telephone: "+903122826026",
  email: "info@eniscoskun.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    reviewCount: "86",
    bestRating: "5",
  },
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
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://eniscoskun.sahibinden.com/",
    "https://maps.google.com/?cid=6426814148118837697",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${fraunces.variable} bg-porcelain font-body antialiased`}
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

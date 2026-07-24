import type { Metadata } from "next";
import { Inter, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = "https://www.uyggold.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UYG Gold Estate | Ankara'da Lüks Gayrimenkul",
    template: "%s | UYG Gold Estate",
  },
  description:
    "UYG Gold Estate — Ankara Bağlıca merkezli butik gayrimenkul ofisi. Satılık ve kiralık seçkin konutlar, güvenilir danışmanlık, sahibinden.com güvencesiyle ilan yönetimi.",
  keywords: [
    "UYG Gold Estate",
    "Bağlıca emlak",
    "Etimesgut satılık daire",
    "Ankara lüks gayrimenkul",
    "Bağlıca satılık villa",
    "Yenimahalle satılık daire",
    "Sincan yatırım fırsatı",
    "gayrimenkul danışmanlığı",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "UYG Gold Estate",
    title: "UYG Gold Estate | Ankara'da Lüks Gayrimenkul",
    description:
      "Seçkin konutlar, prestijli yatırımlar ve ayrıcalıklı bir gayrimenkul deneyimi — Ankara Bağlıca.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UYG Gold Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UYG Gold Estate | Ankara'da Lüks Gayrimenkul",
    description:
      "Seçkin konutlar, prestijli yatırımlar ve ayrıcalıklı bir gayrimenkul deneyimi — Ankara Bağlıca.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "UYG Gold Estate",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Ankara Bağlıca merkezli lüks gayrimenkul alım, satım ve kiralama danışmanlığı. Seçkin portföy, ayrıcalıklı hizmet.",
  areaServed: "Ankara",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bağlıca, Zirve Cd.",
    addressLocality: "Etimesgut",
    addressRegion: "Ankara",
    postalCode: "06790",
    addressCountry: "TR",
  },
  telephone: "+905304048394",
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
      opens: "08:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/uyggold_estate/",
    "https://uyggoldestate.sahibinden.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} ${cormorant.variable} bg-ink font-body antialiased`}
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

import type { Metadata, Viewport } from "next";
import { Barlow, Oswald } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/styles/brand";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
});

const title =
  "CCOM Locações | Bomba de Concreto e Estacas Escavadas em Brasília - DF";
const description =
  "Locação de bombas de concreto e perfuratrizes para estacas escavadas em Brasília e entorno. Equipamentos em obra, atendimento rápido. Solicite orçamento pelo WhatsApp (61) 99377-0763.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: "%s | CCOM Locações Brasília",
  },
  description,
  keywords: [
    "locação bomba de concreto Brasília",
    "bomba de concreto DF",
    "locação perfuratriz Brasília",
    "estacas escavadas Brasília",
    "perfuratriz estacas escavadas",
    "CCOM locações",
    "locação equipamentos construção civil DF",
    "bombeamento de concreto Brasília",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: "/images/obra-canteiro.png",
        width: 1200,
        height: 630,
        alt: "CCOM Locações — bomba de concreto e perfuratriz em obra em Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/obra-canteiro.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneE164,
  image: `${siteConfig.siteUrl}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -15.793889,
      longitude: -47.882778,
    },
    description: siteConfig.region,
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
  knowsAbout: [
    "Locação de bomba de concreto",
    "Locação de perfuratriz",
    "Estacas escavadas",
    "Fundações em construção civil",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        className={`${oswald.variable} ${barlow.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteName = "Damian Marrone – Portfolio";
const siteUrl = "https://damianmarrone.com";
const title = "Portfolio – Damian Marrone";
const description =
  "Portfolio – Damian Marrone. Next.js, Tailwind y Framer Motion. Proyectos, experiencia, skills y contacto.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.webmanifest",
  title: {
    default: title,
    template: "%s | Damian Marrone",
  },
  description,
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Damian Marrone",
    "Portfolio",
    "Frontend",
    "Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Desarrollador",
  ],
  authors: [{ name: "Damian Marrone", url: siteUrl }],
  creator: "Damian Marrone",
  publisher: "Damian Marrone",
  alternates: {
    canonical: siteUrl,
    languages: {
      es: siteUrl + "/",
      en: siteUrl + "/en",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    siteName,
    description,
    images: [
      {
        url: "/marrone_damian.png",
        width: 1200,
        height: 630,
        alt: "Portfolio – Damian Marrone",
      },
    ],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@damianmarrone",
    creator: "@damianmarrone",
    images: ["/marrone_damian.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_TOKEN", 
    yandex: "",
    me: ["mailto:marronedamian@gmail.com"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Damian Marrone",
    url: siteUrl,
    image: `${siteUrl}/marrone_damian.png`,
    jobTitle: "Software Engineer",
    worksFor: { "@type": "Organization", name: "Independiente" },
    sameAs: [
      "https://www.linkedin.com/in/damian-marrone/",
      "https://github.com/damianmarrone",
      siteUrl,
    ],
  };

  return (
    <html lang="es">
      <body className={inter.variable}>
        <div className="radiant"></div>
        <div className="grid-overlay"></div>
        {children}

        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify(jsonLdWebsite)}
        </Script>

        <Script id="ld-person" type="application/ld+json">
          {JSON.stringify(jsonLdPerson)}
        </Script>
      </body>
    </html>
  );
}

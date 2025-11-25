import { Footer } from "@shared/layout/Footer";
import { Navigation } from "@shared/layout/Navigation";
import { StickyArea } from "@shared/layout/StickyArea";
import { QueryProvider } from "@shared/providers/QueryProvider";
import { ThemeProvider } from "@shared/providers/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { STUDIO_NAME, SITE_ORIGIN, CONTACT_EMAIL, TELEGRAM_URL } from "@shared/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devmakers - Разработка сайтов, дизайн и AI для вашего бизнеса",
  description:
    "Разрабатываем сайты, создаем дизайн, внедряем AI-агентов и автоматизируем бизнес-процессы. От идеи до полной реализации.",
  keywords: "веб-разработка, дизайн, AI-агенты, автоматизация, создание сайтов, UI/UX дизайн, чат-боты, CRM системы",
  icons: {
    icon: [
      { url: "/logo-new.svg", type: "image/svg+xml" },
      { url: "/logo-new.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/logo-new.svg",
  },
  openGraph: {
    title: "devmakers - Разработка сайтов, дизайн и AI",
    description:
      "Разрабатываем сайты, создаем дизайн, внедряем AI-агентов и автоматизируем бизнес-процессы.",
    url: SITE_ORIGIN,
    siteName: STUDIO_NAME,
    images: [
      {
        url: SITE_ORIGIN + "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "devmakers - Разработка сайтов, дизайн и AI",
    description:
      "Разрабатываем сайты, создаем дизайн, внедряем AI-агентов и автоматизируем бизнес-процессы.",
    images: [SITE_ORIGIN + "/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: STUDIO_NAME,
    url: SITE_ORIGIN,
    logo: SITE_ORIGIN + "/logo-new.svg",
    description:
      "Студия веб-разработки, дизайна и AI-решений. Создаем сайты, дизайн, AI-агентов и автоматизируем бизнес-процессы.",
    address: { "@type": "PostalAddress", addressCountry: "RU" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: CONTACT_EMAIL,
      availableLanguage: ["Russian", "English"],
    },
    sameAs: [TELEGRAM_URL],
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-background">
              <Navigation />
              {children}
              <Footer />
              <StickyArea />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

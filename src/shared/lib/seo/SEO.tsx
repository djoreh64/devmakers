"use client";

import { useEffect } from "react";
import {
  STUDIO_NAME,
  SITE_ORIGIN,
  CONTACT_EMAIL,
  TELEGRAM_URL,
} from "@shared/lib/constants";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
  robots?: string;
}

import Head from "next/head";

export function SEO({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  structuredData,
}: SEOProps) {
  return (
    <Head>
      <title>
        {title} | {STUDIO_NAME}
      </title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={`${title} | ${STUDIO_NAME}`} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Head>
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: STUDIO_NAME,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo.png`,
  description:
    "Студия веб-разработки, дизайна и AI-решений. Создаем сайты, дизайн, AI-агентов и автоматизируем бизнес-процессы.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-XXX-XXX-XX-XX",
    contactType: "Customer Service",
    email: CONTACT_EMAIL,
    availableLanguage: ["Russian", "English"],
  },
  sameAs: [TELEGRAM_URL],
};

// Service Schema
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development & Design",
  provider: {
    "@type": "Organization",
    name: STUDIO_NAME,
  },
  areaServed: "RU",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги студии",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Веб-разработка",
          description:
            "Создание лендингов, корпоративных сайтов, интернет-магазинов и веб-приложений",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Дизайн",
          description: "UI/UX дизайн, логотипы, брендинг и дизайн-системы",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-агенты",
          description:
            "Разработка чат-ботов, голосовых ассистентов и автоматизация поддержки",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Автоматизация",
          description: "CRM системы, Email-маркетинг, интеграции и аналитика",
        },
      },
    ],
  },
};

// FAQ Schema Generator
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

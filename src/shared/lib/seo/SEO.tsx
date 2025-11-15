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
}

export function SEO({
  title,
  description,
  keywords = "веб-разработка, дизайн, AI-агенты, автоматизация, создание сайтов, UI/UX дизайн, чат-боты, CRM системы",
  ogType = "website",
  ogImage = `${SITE_ORIGIN}/og-image.jpg`,
  canonical,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | ${STUDIO_NAME}`;

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false,
    ) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`,
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", STUDIO_NAME);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph tags
    updateMetaTag("og:title", `${title} | ${STUDIO_NAME}`, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", STUDIO_NAME, true);
    updateMetaTag("og:locale", "ru_RU", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", `${title} | ${STUDIO_NAME}`);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.rel = "canonical";
        document.head.appendChild(linkElement);
      }
      linkElement.href = canonical;
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptElement = document.querySelector(
        'script[type="application/ld+json"]',
      ) as HTMLScriptElement;
      if (!scriptElement) {
        scriptElement = document.createElement("script") as HTMLScriptElement;
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [
    title,
    description,
    keywords,
    ogType,
    ogImage,
    canonical,
    structuredData,
  ]);

  return null;
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
  faqs: Array<{ question: string; answer: string }>,
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
  items: Array<{ name: string; url: string }>,
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

/**
 * Sitemap Generator Component
 * Этот компонент помогает генерировать динамический sitemap для SPA
 */
import { SITE_ORIGIN } from "@shared/lib/constants";

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

export const sitemapUrls: SitemapUrl[] = [
  // Главная страница
  {
    loc: `${SITE_ORIGIN}/`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 1.0,
  },

  // Основные страницы
  {
    loc: `${SITE_ORIGIN}/services`,
    lastmod: "2025-11-04",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    loc: `${SITE_ORIGIN}/ai-consultant`,
    lastmod: "2025-11-04",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/team`,
    lastmod: "2025-11-04",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: `${SITE_ORIGIN}/faq`,
    lastmod: "2025-11-04",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: `${SITE_ORIGIN}/contact`,
    lastmod: "2025-11-04",
    changefreq: "yearly",
    priority: 0.6,
  },

  // Категории портфолио - Веб-разработка
  {
    loc: `${SITE_ORIGIN}/portfolio/landings`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/corporate`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/ecommerce`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/webapps`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },

  // Категории портфолио - Дизайн
  {
    loc: `${SITE_ORIGIN}/portfolio/uiux`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/logos`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/branding`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/designsystems`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },

  // Категории портфолио - AI-агенты
  {
    loc: `${SITE_ORIGIN}/portfolio/chatbots`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/voiceassistants`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/aisupport`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },

  // Категории портфолио - Автоматизация
  {
    loc: `${SITE_ORIGIN}/portfolio/crm`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/emailmarketing`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/integrations`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${SITE_ORIGIN}/portfolio/analytics`,
    lastmod: "2025-11-04",
    changefreq: "weekly",
    priority: 0.8,
  },
];

/**
 * Генерирует XML sitemap
 */
export function generateSitemapXML(): string {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const urls = sitemapUrls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("");

  const footer = "\n</urlset>";

  return header + urls + footer;
}

/**
 * Генерирует HTML sitemap для пользователей
 */
export function HTMLSitemap() {
  const categories = {
    "Основные страницы": sitemapUrls.filter(
      (url) => !url.loc.includes("/portfolio/"),
    ),
    Портфолио: sitemapUrls.filter((url) => url.loc.includes("/portfolio/")),
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-foreground mb-8" style={{ fontSize: "2.5rem" }}>
        Карта сайта
      </h1>

      {Object.entries(categories).map(([category, urls]) => (
        <div key={category} className="mb-8">
          <h2 className="text-foreground mb-4" style={{ fontSize: "1.5rem" }}>
            {category}
          </h2>
          <ul className="space-y-2">
            {urls.map((url, index) => (
              <li key={index}>
                <a
                  href={url.loc}
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  {url.loc.replace(SITE_ORIGIN, "")}
                </a>
                <span className="text-muted-foreground ml-2">
                  (приоритет: {url.priority.toFixed(1)})
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-12 p-6 rounded-2xl border border-border bg-secondary/20">
        <h3 className="text-foreground mb-2">XML Sitemap</h3>
        <p className="text-muted-foreground">
          Для поисковых систем доступен XML sitemap по адресу:{" "}
          <a
            href={`${SITE_ORIGIN}/sitemap.xml`}
            className="text-accent hover:underline"
          >
            {`${SITE_ORIGIN}/sitemap.xml`}
          </a>
        </p>
      </div>
    </div>
  );
}

// Компонент не рендерится, только экспортирует данные
export default function SitemapGenerator() {
  return null;
}

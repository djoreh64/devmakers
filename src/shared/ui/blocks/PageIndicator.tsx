"use client";

import { motion } from "motion/react";
import { Home, ChevronRight } from "lucide-react";

type PageIndicatorProps = {
  currentPage: string;
  category?: string;
  onNavigate: (page: string) => void;
};

const pageNames: Record<string, string> = {
  home: "Главная",
  services: "Услуги",
  portfolio: "Портфолио",
  approach: "Подход",
  team: "Команда",
  faq: "FAQ",
  contact: "Контакты",
};

const categoryNames: Record<string, string> = {
  landings: "Лендинги",
  corporate: "Корпоративные сайты",
  ecommerce: "Интернет-магазины",
  webapps: "Веб-приложения",
  uiux: "UI/UX дизайн",
  logos: "Логотипы",
  branding: "Брендинг",
  designsystems: "Дизайн-системы",
  chatbots: "Чат-боты",
  voiceassistants: "Голосовые ассистенты",
  aisupport: "Автоматизация поддержки",
  crm: "CRM системы",
  emailmarketing: "Email-маркетинг",
  integrations: "Интеграции",
  analytics: "Аналитика",
};

export function PageIndicator({
  currentPage,
  category,
  onNavigate,
}: PageIndicatorProps) {
  if (currentPage === "home") return null;

  return (
    <div className="hidden lg:block fixed top-20 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border pointer-events-auto"
        >
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
          </button>

          <ChevronRight className="w-4 h-4 text-muted-foreground" />

          {currentPage === "portfolio" && category ? (
            <>
              <button
                onClick={() => onNavigate("portfolio")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {pageNames.portfolio}
              </button>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">{categoryNames[category]}</span>
            </>
          ) : (
            <span className="text-foreground">{pageNames[currentPage]}</span>
          )}
        </motion.div>
      </div>
    </div>
  );
}

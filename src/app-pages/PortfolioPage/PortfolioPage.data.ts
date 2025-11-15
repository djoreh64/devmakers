import { Globe, Palette, Bot, Workflow } from "lucide-react";

export const categories = [
  {
    icon: Globe,
    title: "Веб разработка",
    description:
      "Сайты любой сложности: от лендингов до сложных веб-приложений",
    projects: 48,
    image:
      "https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMTAyMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    subcategories: [
      { label: "Лендинги", key: "landings", count: 12 },
      { label: "Корпоративные сайты", key: "corporate", count: 15 },
      { label: "Интернет-магазины", key: "ecommerce", count: 10 },
      { label: "Веб-приложения", key: "webapps", count: 11 },
    ],
  },
  {
    icon: Palette,
    title: "Дизайн",
    description:
      "От логотипов до полных дизайн-систем и UI/UX для сложных продуктов",
    projects: 62,
    image:
      "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIwOTIyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    subcategories: [
      { label: "UI/UX дизайн", key: "uiux", count: 20 },
      { label: "Логотипы", key: "logos", count: 18 },
      { label: "Брендинг", key: "branding", count: 14 },
      { label: "Дизайн-системы", key: "designsystems", count: 10 },
    ],
  },
  {
    icon: Bot,
    title: "AI-агенты",
    description: "Умные помощники для автоматизации коммуникации и поддержки",
    projects: 42,
    image:
      "https://images.unsplash.com/photo-1601132359864-c974e79890ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxNzE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    subcategories: [
      { label: "Чат-боты", key: "chatbots", count: 15 },
      { label: "Telegram боты", key: "telegrambots", count: 8 },
      { label: "Голосовые ассистенты", key: "voiceassistants", count: 8 },
      { label: "Автоматизация поддержки", key: "aisupport", count: 11 },
    ],
  },
  {
    icon: Workflow,
    title: "Автоматизация",
    description: "Оптимизация бизнес-процессов и интеграция систем",
    projects: 41,
    image:
      "https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjIxMTM1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    subcategories: [
      { label: "CRM системы", key: "crm", count: 12 },
      { label: "Email-маркетинг", key: "emailmarketing", count: 10 },
      { label: "Интеграции", key: "integrations", count: 11 },
      { label: "Аналитика", key: "analytics", count: 8 },
    ],
  },
];

export const stats = [
  { value: "120+", label: "Завершенных проектов" },
  { value: "85%", label: "Клиентов возвращаются" },
  { value: "15+", label: "Специалистов в команде" },
  { value: "8", label: "Лет на рынке" },
];

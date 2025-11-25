import { ProjectDetail } from "@pages/ProjectDetailPage";
import { projectDetailsMap as baseProjects } from "./projectData";

// Extended project details for all categories
export const allProjectDetails: Record<string, ProjectDetail> = {
  ...baseProjects,

  "logos-0": {
    id: "logos-0",
    title: "Логотип финтех-стартапа",
    description:
      "Минималистичный логотип и фирменный стиль для финансового приложения.",
    tags: ["Illustrator", "Brand Identity", "Typography"],
    image: "/portfolio-default.png",
    results: "Узнаваемость бренда +300%",
    category: "logos",
    client: "FinPay",
    timeline: "4 недели",
    fullDescription:
      "Создали минималистичный и запоминающийся логотип для финтех-стартапа, специализирующегося на мгновенных переводах. Проект включал разработку визуальной айдентики, типографики, цветовой палитры и руководства по использованию бренда.",
    challenge:
      "Стартапу нужен был современный логотип, который бы отражал технологичность и надежность, при этом выделялся среди конкурентов в перенасыщенном финтех-сегменте.",
    solution:
      "Разработали геометрический логотип на основе символа быстрых транзакций. Выбрали современный шрифт без засечек с кастомными модификациями. Создали динамическую версию с анимацией для digital.",
    technologies: ["Adobe Illustrator", "Figma", "After Effects"],
    features: [
      "Адаптивные версии для разных контекстов",
      "Кастомная типографика",
      "Анимированная версия для digital",
      "Brand book на 40+ страниц",
    ],
    outcomes: ["Узнаваемость +300%", "10+ продуктов", "Победа в конкурсе"],
  },

  "branding-0": {
    id: "branding-0",
    title: "Брендинг косметического бренда",
    description:
      "Полная разработка визуального стиля: от логотипа до упаковки и маркетинговых материалов.",
    tags: ["Brand Identity", "Packaging", "Marketing Materials"],
    image: "/portfolio-default.png",
    results: "Запуск в 200+ магазинах",
    category: "branding",
    client: "Natura Beauty",
    timeline: "12 недель",
    fullDescription:
      "Создали полноценную визуальную айдентику для нового косметического бренда натуральной косметики. Работа включала логотип, фирменный стиль, дизайн упаковки для 15 продуктов и маркетинговые материалы.",
    challenge:
      "Запуск в высококонкурентном сегменте натуральной косметики. Необходимо было создать премиальный образ, выделяющийся на полке среди конкурентов.",
    solution:
      "Разработали минималистичную айдентику с акцентом на природные мотивы. Создали систему упаковки с экологичными материалами. Разработали паттерны на основе ботанических иллюстраций.",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "3D Mockups"],
    features: [
      "Логотип и фирменный знак",
      "Упаковка для 15 продуктов",
      "Фирменные паттерны",
      "Brand book на 80+ страниц",
    ],
    outcomes: [
      "200+ магазинов",
      "50K единиц за месяц",
      "Best Package Design 2024",
    ],
  },

  "designsystems-0": {
    id: "designsystems-0",
    title: "Дизайн-система для корпорации",
    description: "Комплексная дизайн-система для 50+ цифровых продуктов.",
    tags: ["Design System", "Figma", "Component Library"],
    image: "/portfolio-default.png",
    results: "Время разработки -40%",
    category: "designsystems",
    client: "TechCorp",
    timeline: "20 недель",
    fullDescription:
      "Разработали масштабируемую дизайн-систему для крупной технологической корпорации с 50+ продуктами. Проект включал библиотеку компонентов, токены и интеграцию с процессами разработки.",
    challenge:
      "Разрозненные продукты с несогласованным дизайном. Много времени тратилось на создание одинаковых компонентов.",
    solution:
      "Провели аудит продуктов, создали унифицированную систему компонентов. Разработали систему токенов. Создали библиотеку в Figma с автообновлением.",
    technologies: ["Figma", "Storybook", "React", "TypeScript"],
    features: [
      "200+ UI компонентов",
      "Система дизайн-токенов",
      "Интерактивная документация",
      "React библиотека",
    ],
    outcomes: ["Разработка -40%", "50+ продуктов", "Консистентность 95%"],
  },

  "voiceassistants-0": {
    id: "voiceassistants-0",
    title: "Голосовой помощник для колл-центра",
    description:
      "AI-ассистент для обработки входящих звонков с распознаванием речи.",
    tags: ["Voice AI", "Speech-to-Text", "NLP", "Twilio"],
    image: "/portfolio-default.png",
    results: "70% звонков без оператора",
    category: "voiceassistants",
    client: "CallCenter Pro",
    timeline: "8 недель",
    fullDescription:
      "Создали голосового ассистента для автоматизации входящих звонков. Система распознает речь, понимает запросы и переводит сложные случаи операторам.",
    challenge:
      "5000 звонков в день, 70% типовые. Очередь до 15 минут в часы пик.",
    solution:
      "Разработали голосового бота на базе Speech-to-Text и TTS. Обучили на реальных диалогах. Интегрировали с CRM.",
    technologies: ["Google Cloud Speech", "OpenAI", "Twilio", "Python"],
    features: [
      "Распознавание речи 95%",
      "Автообработка типовых запросов",
      "Идентификация клиента",
      "Умная маршрутизация",
    ],
    outcomes: ["70% без оператора", "Ожидание 15→2 мин", "Экономия ₽2M/год"],
  },

  "aisupport-0": {
    id: "aisupport-0",
    title: "AI-помощник для техподдержки SaaS",
    description: "Умный ассистент с базой знаний для решения типовых проблем.",
    tags: ["GPT-4", "Knowledge Base", "Zendesk"],
    image: "/portfolio-default.png",
    results: "Снижение нагрузки на 60%",
    category: "aisupport",
    client: "CloudSoft SaaS",
    timeline: "7 недель",
    fullDescription:
      "Разработали AI-помощника для техподдержки SaaS. Система автоматически обрабатывает обращения, отвечает на вопросы и создает тикеты для сложных случаев.",
    challenge: "500+ обращений в день, 60% повторяющиеся вопросы.",
    solution:
      "Создали AI-ассистента на GPT-4, обученного на базе знаний. Интегрировали с Zendesk. Настроили самообучение.",
    technologies: ["OpenAI GPT-4", "LangChain", "Zendesk API", "Python"],
    features: [
      "Ответы из базы знаний",
      "Интеграция с Zendesk",
      "Самообучение",
      "Аналитика проблем",
    ],
    outcomes: ["Нагрузка -60%", "Ответ 4ч→2мин", "CSAT 72%→89%"],
  },

  "crm-0": {
    id: "crm-0",
    title: "CRM для отдела продаж",
    description:
      "Кастомная CRM с автоматизацией воронки, телефонией и аналитикой.",
    tags: ["React", "PostgreSQL", "Telephony"],
    image: "/portfolio-default.png",
    results: "Продажи +55%, цикл -30%",
    category: "crm",
    client: "SalesBoost",
    timeline: "10 недель",
    fullDescription:
      "Создали CRM для отдела продаж B2B. Система включает управление лидами, автоматизацию воронки, интеграцию с телефонией и email.",
    challenge: "Excel для учета, потеря данных, нет анализа эффективности.",
    solution:
      "Разработали CRM с визуализацией воронки. Автоматизировали задачи. Интегрировали телефонию. Создали real-time дашборды.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Воронка с drag-and-drop",
      "Автозадачи",
      "IP-телефония",
      "Real-time аналитика",
    ],
    outcomes: ["Продажи +55%", "Цикл -30%", "Конверсия +40%"],
  },

  "emailmarketing-0": {
    id: "emailmarketing-0",
    title: "Автоматизация email-кампаний",
    description: "Триггерные цепочки с персонализацией и A/B тестированием.",
    tags: ["Mailchimp", "Automation", "Segmentation"],
    image: "/portfolio-default.png",
    results: "Open rate 45%, CTR 12%",
    category: "emailmarketing",
    client: "E-shop Fashion",
    timeline: "5 недель",
    fullDescription:
      "Создали систему автоматизированных email-кампаний. Проект включал триггерные цепочки, сегментацию, персонализацию и A/B тесты.",
    challenge:
      "Массовые рассылки без сегментации, low open rate (18%), много отписок.",
    solution:
      "Разработали стратегию с 12 автоцепочками. Настроили сегментацию по поведению. Создали персонализированные шаблоны.",
    technologies: ["Mailchimp", "Klaviyo", "HTML/CSS"],
    features: [
      "12 триггерных цепочек",
      "Сегментация по поведению",
      "Динамический контент",
      "A/B тесты",
    ],
    outcomes: ["Open rate 18%→45%", "CTR 12%", "Выручка +180%"],
  },

  "integrations-0": {
    id: "integrations-0",
    title: "Интеграция CRM и 1С",
    description:
      "Двухсторонняя синхронизация данных с обработкой заказов и оплат.",
    tags: ["1C", "API", "Sync", "Webhooks"],
    image: "/portfolio-default.png",
    results: "Автоматизация 100% заказов",
    category: "integrations",
    client: "TradeCorp",
    timeline: "6 недель",
    fullDescription:
      "Разработали двухстороннюю интеграцию CRM и 1С. Система синхронизирует клиентов, заказы, оплаты и остатки в реальном времени.",
    challenge:
      "Ручной перенос данных 3-4 часа в день, ошибки, неактуальные остатки.",
    solution:
      "Создали middleware для интеграции через API. Настроили автосинхронизацию каждые 15 минут и real-time для критичных событий.",
    technologies: ["Node.js", "1C Web Services", "REST API", "PostgreSQL"],
    features: [
      "Real-time синхронизация",
      "Перенос клиентов и заказов",
      "Синхронизация остатков",
      "Логирование операций",
    ],
    outcomes: ["100% автосинхронизация", "Экономия 20ч/нед", "Ошибки -95%"],
  },

  "analytics-0": {
    id: "analytics-0",
    title: "Дашборд бизнес-аналитики",
    description: "Комплексная система с визуализацией KPI и прогнозированием.",
    tags: ["Google Analytics", "Data Studio", "Power BI"],
    image: "/portfolio-default.png",
    results: "20+ метрик в реальном времени",
    category: "analytics",
    client: "DataDrive",
    timeline: "8 недель",
    fullDescription:
      "Создали систему бизнес-аналитики с интерактивными дашбордами. Система собирает данные из всех источников и визуализирует KPI в real-time.",
    challenge:
      "Отчеты раз в месяц в Excel, данные не связаны, неделя на один отчет.",
    solution:
      "Разработали централизованную систему сбора данных. Создали интерактивные дашборды. Настроили автоотчеты с insights.",
    technologies: ["Power BI", "Google Analytics", "BigQuery", "Python"],
    features: [
      "Real-time дашборды 20+ KPI",
      "10+ источников данных",
      "Автоотчеты и алерты",
      "Drill-down анализ",
    ],
    outcomes: ["20+ метрик real-time", "Отчеты -90%", "15+ инсайтов"],
  },
};

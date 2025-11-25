"use client";

import { fadeInUp } from "@shared/lib/motionConfig";
import { SEO, generateBreadcrumbSchema } from "@shared/lib/seo/SEO";
import { ContactModal } from "@shared/modals/ContactModal";
import { PageDescription, PageHeading } from "@shared/ui/lib/Typography";
import { CTASection } from "@widgets/CTASection";
import {
  ArrowRight,
  Bot,
  Check,
  Globe,
  Palette,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SITE_ORIGIN } from "../shared/lib/constants";

interface PricingPageProps {
  onNavigate?: (page: string) => void;
}

interface PricingTier {
  name: string;
  icon: any;
  priceFrom: string;
  description: string;
  features: string[];
  popular?: boolean;
  category: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Лендинг",
    icon: Globe,
    priceFrom: "150 000 ₽",
    description: "Продающая посадочная страница с современным дизайном",
    category: "Веб-разработка",
    features: [
      "Адаптивный дизайн под все устройства",
      "SEO оптимизация и быстрая загрузка",
      "Интеграция с CRM и аналитикой",
      "Формы обратной связи",
      "Анимации и микроинтеракции",
      "Техподдержка 1 месяц",
    ],
  },
  {
    name: "Корпоративный сайт",
    icon: Globe,
    priceFrom: "350 000 ₽",
    description: "Многостраничный сайт для вашего бизнеса",
    category: "Веб-разработка",
    popular: true,
    features: [
      "До 10 уникальных страниц",
      "Панель администратора (CMS)",
      "Мультиязычность",
      "Интеграция с внешними сервисами",
      "Блог и новостная лента",
      "Продвинутая аналитика",
      "Техподдержка 3 месяца",
    ],
  },
  {
    name: "Интернет-магазин",
    icon: Globe,
    priceFrom: "500 000 ₽",
    description: "E-commerce решение с полным функционалом",
    category: "Веб-разработка",
    features: [
      "Каталог товаров с фильтрами",
      "Корзина и оформление заказа",
      "Интеграция платежных систем",
      "Личный кабинет пользователя",
      "Система скидок и промокодов",
      "Интеграция с 1С и складом",
      "Техподдержка 6 месяцев",
    ],
  },
  {
    name: "Веб-приложение",
    icon: Globe,
    priceFrom: "800 000 ₽",
    description: "Сложное SaaS или enterprise решение",
    category: "Веб-разработка",
    features: [
      "Кастомная функциональность",
      "Масштабируемая архитектура",
      "Высокая производительность",
      "Система ролей и прав доступа",
      "API и интеграции",
      "Мобильная версия",
      "Техподдержка 12 месяцев",
    ],
  },
  {
    name: "UI/UX дизайн",
    icon: Palette,
    priceFrom: "100 000 ₽",
    description: "Современный дизайн интерфейса с фокусом на UX",
    category: "Дизайн",
    features: [
      "Исследование пользователей",
      "User flow и прототипы",
      "UI дизайн всех экранов",
      "Адаптив для всех устройств",
      "Интерактивный прототип",
      "Передача в Figma",
    ],
  },
  {
    name: "Дизайн-система",
    icon: Palette,
    priceFrom: "250 000 ₽",
    description: "Полная система компонентов для масштабирования",
    category: "Дизайн",
    popular: true,
    features: [
      "Библиотека UI компонентов",
      "Гайдлайны по использованию",
      "Цветовая палитра и типографика",
      "Иконки и иллюстрации",
      "Документация",
      "Поддержка и обновления",
    ],
  },
  {
    name: "Брендинг",
    icon: Palette,
    priceFrom: "200 000 ₽",
    description: "Создание уникального визуального стиля бренда",
    category: "Дизайн",
    features: [
      "Логотип и фирменный стиль",
      "Брендбук с гайдлайнами",
      "Визитки и деловая документация",
      "Шаблоны для соцсетей",
      "Упаковка и мерч (опционально)",
      "Исходники в векторе",
    ],
  },
  {
    name: "Чат-бот",
    icon: Bot,
    priceFrom: "120 000 ₽",
    description: "AI-помощник для автоматизации общения",
    category: "AI-агенты",
    features: [
      "Настройка под ваш бизнес",
      "Интеграция с мессенджерами",
      "База знаний и обучение",
      "Аналитика диалогов",
      "Передача живому оператору",
      "Обновление базы знаний",
    ],
  },
  {
    name: "Голосовой ассистент",
    icon: Bot,
    priceFrom: "180 000 ₽",
    description: "Голосовой AI для телефонии и IVR",
    category: "AI-агенты",
    features: [
      "Распознавание речи",
      "Естественный голос AI",
      "Интеграция с телефонией",
      "Сценарии диалогов",
      "Запись и анализ звонков",
      "Обучение и улучшение",
    ],
  },
  {
    name: "AI-поддержка",
    icon: Bot,
    priceFrom: "300 000 ₽",
    description: "Комплексная система AI поддержки клиентов",
    category: "AI-агенты",
    popular: true,
    features: [
      "Мультиканальная поддержка",
      "Автоматизация 70%+ запросов",
      "Интеграция с CRM и базами",
      "Обучение на ваших данных",
      "Аналитика и отчеты",
      "Постоянная оптимизация",
    ],
  },
  {
    name: "CRM система",
    icon: Workflow,
    priceFrom: "400 000 ₽",
    description: "Управление клиентами и продажами",
    category: "Автоматизация",
    features: [
      "Кастомная под ваш бизнес",
      "Воронка продаж и лиды",
      "Автоматизация процессов",
      "Интеграция с внешними системами",
      "Отчеты и аналитика",
      "Мобильное приложение",
    ],
  },
  {
    name: "Интеграции API",
    icon: Workflow,
    priceFrom: "150 000 ₽",
    description: "Связь систем и автоматизация данных",
    category: "Автоматизация",
    features: [
      "Интеграция любых сервисов",
      "Синхронизация данных",
      "Автоматическая обработка",
      "Мониторинг и логирование",
      "Обработка ошибок",
      "Документация API",
    ],
  },
];

const categories = [
  { id: "all", name: "Все услуги" },
  { id: "Веб-разработка", name: "Веб-разработка" },
  { id: "Дизайн", name: "Дизайн" },
  { id: "AI-агенты", name: "AI-агенты" },
  { id: "Автоматизация", name: "Автоматизация" },
];

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const filteredTiers =
    selectedCategory === "all"
      ? pricingTiers
      : pricingTiers.filter((tier) => tier.category === selectedCategory);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Главная", url: SITE_ORIGIN },
    { name: "Цены", url: `${SITE_ORIGIN}/pricing` },
  ]);

  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO
        title="Цены на разработку"
        description="Прозрачное ценообразование на веб-разработку, дизайн, AI-агенты и автоматизацию. Лендинги от 150 000₽, интернет-магазины от 500 000₽, AI-боты от 120 000₽. Фиксированная стоимость без скрытых платежей."
        keywords="цены на разработку сайтов, стоимость лендинга, цена интернет-магазина, разработка сайта под ключ цена, стоимость AI-бота, дизайн сайта цена"
        canonical={`${SITE_ORIGIN}/pricing`}
        structuredData={breadcrumbSchema}
      />

      {/* Hero Section */}
      <div className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent">Прозрачные цены</span>
            </motion.div>

            <PageHeading variants={fadeInUp}>Стоимость проектов</PageHeading>
            <PageDescription variants={fadeInUp}>
              Фиксированные цены без скрытых платежей.
              <br />
              Оплата по этапам с гарантией результата.
            </PageDescription>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-accent text-accent-foreground border-accent shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    : "bg-secondary/30 text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Pricing Cards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`relative group rounded-2xl border backdrop-blur-sm transition-all duration-300 flex flex-col ${
                    tier.popular
                      ? "bg-accent/5 border-accent/50 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                      : "bg-background/50 border-border hover:border-accent/30"
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="px-4 py-1 rounded-full bg-accent text-accent-foreground border border-accent shadow-lg">
                        Популярное
                      </div>
                    </div>
                  )}

                  <div className="p-8 flex flex-col grow">
                    {/* Icon & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-secondary/50 border border-border">
                        {tier.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3
                      style={{ fontSize: "1.75rem" }}
                      className="text-foreground mb-3"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 min-h-12">
                      {tier.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8 pb-8 border-b border-border">
                      <div className="flex items-baseline gap-2">
                        <span className="text-muted-foreground">от</span>
                        <span
                          style={{
                            fontSize: "2.5rem",
                            lineHeight: "1",
                            letterSpacing: "-0.02em",
                          }}
                          className="text-foreground"
                        >
                          {tier.priceFrom.split(" ")[0]}
                        </span>
                        <span
                          className="text-muted-foreground"
                          style={{ fontSize: "1.25rem" }}
                        >
                          ₽
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 grow">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className={`w-full py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto ${
                        tier.popular
                          ? "bg-accent text-accent-foreground hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                          : "bg-secondary/50 text-foreground border border-border hover:bg-accent/10 hover:border-accent/50"
                      }`}
                    >
                      <span>Оставить заявку</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hover Glow */}
                  {!tier.popular && (
                    <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Price Examples Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2
              style={{
                fontSize: "2rem",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
              }}
              className="text-foreground mb-8 text-center"
            >
              Примеры реализованных проектов
            </h2>
            <div className="relative overflow-hidden">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />

              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

              <div className="flex gap-6 animate-marquee">
                {/* First set */}
                {[
                  {
                    project: "Лендинг для стартапа",
                    price: "180 000 ₽",
                    time: "2 недели",
                  },
                  {
                    project: "Корпоративный сайт банка",
                    price: "650 000 ₽",
                    time: "6 недель",
                  },
                  {
                    project: "Интернет-магазин одежды",
                    price: "750 000 ₽",
                    time: "8 недель",
                  },
                  {
                    project: "SaaS платформа",
                    price: "1 200 000 ₽",
                    time: "12 недель",
                  },
                  {
                    project: "UI/UX для мобильного приложения",
                    price: "220 000 ₽",
                    time: "3 недели",
                  },
                  {
                    project: "Дизайн-система для корпорации",
                    price: "480 000 ₽",
                    time: "5 недель",
                  },
                  {
                    project: "AI чат-бот для e-commerce",
                    price: "280 000 ₽",
                    time: "4 недели",
                  },
                  {
                    project: "Голосовой ассистент для колл-центра",
                    price: "520 000 ₽",
                    time: "7 недель",
                  },
                  {
                    project: "CRM система для агентства",
                    price: "890 000 ₽",
                    time: "10 недель",
                  },
                ].map((example, index) => (
                  <div
                    key={`first-${index}`}
                    className="shrink-0 p-6 rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm min-w-[340px]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <p
                        className="text-foreground"
                        style={{ fontSize: "1.125rem" }}
                      >
                        {example.project}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-accent"
                        style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}
                      >
                        {example.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {example.time}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {[
                  {
                    project: "Лендинг для стартапа",
                    price: "180 000 ₽",
                    time: "2 недели",
                  },
                  {
                    project: "Корпоративный сайт банка",
                    price: "650 000 ₽",
                    time: "6 недель",
                  },
                  {
                    project: "Интернет-магазин одежды",
                    price: "750 000 ₽",
                    time: "8 недель",
                  },
                  {
                    project: "SaaS платформа",
                    price: "1 200 000 ₽",
                    time: "12 недель",
                  },
                  {
                    project: "UI/UX для мобильного приложения",
                    price: "220 000 ₽",
                    time: "3 недели",
                  },
                  {
                    project: "Дизайн-система для корпорации",
                    price: "480 000 ₽",
                    time: "5 недель",
                  },
                  {
                    project: "AI чат-бот для e-commerce",
                    price: "280 000 ₽",
                    time: "4 недели",
                  },
                  {
                    project: "Голосовой ассистент для колл-центра",
                    price: "520 000 ₽",
                    time: "7 недель",
                  },
                  {
                    project: "CRM система для агентства",
                    price: "890 000 ₽",
                    time: "10 недель",
                  },
                ].map((example, index) => (
                  <div
                    key={`second-${index}`}
                    className="shrink-0 p-6 rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm min-w-[340px]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <p
                        className="text-foreground"
                        style={{ fontSize: "1.125rem" }}
                      >
                        {example.project}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-accent"
                        style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}
                      >
                        {example.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {example.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            <div className="p-6 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm">
              <h3 className="text-foreground mb-2">Гибкая оплата</h3>
              <p className="text-muted-foreground">
                Оплата по этапам: 30% старт, 40% разработка, 30% завершение
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm">
              <h3 className="text-foreground mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">
                Бесплатные правки в течение гарантийного периода
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm">
              <h3 className="text-foreground mb-2">Индивидуальный подход</h3>
              <p className="text-muted-foreground">
                Финальная цена зависит от сложности и требований проекта
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <CTASection onNavigate={onNavigate} />

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Готовы начать проект?"
        description="Оставьте заявку и мы свяжемся с вами в течение 24 часов"
      />
    </div>
  );
}

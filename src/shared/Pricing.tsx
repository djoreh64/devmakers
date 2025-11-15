"use client";

import { motion } from "motion/react";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "./ui/lib/button";

interface PricingProps {
  onContactClick?: () => void;
}

interface PricingPlan {
  name: string;
  icon: React.ElementType;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const plans: PricingPlan[] = [
  {
    name: "Старт",
    icon: Zap,
    price: "от 50 000₽",
    period: "за проект",
    description: "Идеально для MVP и лендингов",
    features: [
      "Лендинг или простой сайт",
      "Адаптивный дизайн",
      "SEO оптимизация",
      "Базовая аналитика",
      "2 недели разработки",
      "1 месяц поддержки",
    ],
    cta: "Начать",
  },
  {
    name: "Бизнес",
    icon: Sparkles,
    price: "от 150 000₽",
    period: "за проект",
    description: "Для серьезных корпоративных проектов",
    features: [
      "Корпоративный сайт",
      "CRM интеграция",
      "Админ панель",
      "Продвинутая аналитика",
      "4-6 недель разработки",
      "3 месяца поддержки",
      "Консультации и обучение",
      "Техническая документация",
    ],
    highlighted: true,
    cta: "Популярный выбор",
  },
  {
    name: "Энтерпрайз",
    icon: Crown,
    price: "от 500 000₽",
    period: "за проект",
    description: "Комплексные решения для крупного бизнеса",
    features: [
      "Веб-приложение или платформа",
      "AI-интеграция",
      "Микросервисная архитектура",
      "DevOps и CI/CD",
      "8-16 недель разработки",
      "Годовая поддержка 24/7",
      "Выделенная команда",
      "SLA гарантии",
      "Масштабируемость",
    ],
    cta: "Обсудить проект",
  },
];

export function Pricing({ onContactClick }: PricingProps) {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Тарифы</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Прозрачные цены
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий пакет или запросите индивидуальное предложение
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative ${plan.highlighted ? "lg:-mt-4" : ""}`}
            >
              <div
                className={`relative h-full p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-accent/10 border-2 border-accent shadow-2xl shadow-accent/20"
                    : "bg-secondary/30 border border-border hover:bg-secondary/50 hover:border-accent/50"
                }`}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm">
                    Популярный
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    plan.highlighted ? "bg-accent/20" : "bg-accent/10"
                  }`}
                >
                  <plan.icon
                    className={`w-7 h-7 ${
                      plan.highlighted ? "text-accent" : "text-accent"
                    }`}
                  />
                </div>

                {/* Header */}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl mb-1">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">
                    {plan.period}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={onContactClick}
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? "bg-accent hover:bg-accent/90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  asChild
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </Button>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.highlighted ? "bg-accent/20" : "bg-accent/10"
                        }`}
                      >
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover glow */}
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-2xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-2xl" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-2">Нужно что-то особенное?</p>
          <button
            onClick={onContactClick}
            className="text-accent hover:text-accent/80 transition-colors underline"
          >
            Запросите индивидуальное предложение
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Zap,
  Shield,
  Smartphone,
  Code2,
  Palette,
  Bot,
  Rocket,
} from "lucide-react";

interface BentoGridProps {
  onContactClick?: () => void;
}

const features = [
  {
    icon: Sparkles,
    title: "AI-интеграция",
    description:
      "Внедряем GPT-4, Claude и кастомные ML-модели для автоматизации",
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Zap,
    title: "Молниеносная разработка",
    description: "MVP за 2-4 недели с Agile",
    className: "md:col-span-1",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Сертификация и защита данных",
    className: "md:col-span-1",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile-first дизайн",
    description: "Адаптивные интерфейсы для любых устройств",
    className: "md:col-span-1 md:row-span-2",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Code2,
    title: "Чистый код",
    description: "TypeScript, React, Next.js — современный стек",
    className: "md:col-span-2",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Palette,
    title: "Премиум дизайн",
    description: "Figma → Код с точностью до пикселя",
    className: "md:col-span-1",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Bot,
    title: "AI-агенты",
    description: "Автоматизация поддержки и бизнес-процессов",
    className: "md:col-span-1",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

export function BentoGrid({ onContactClick }: BentoGridProps) {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Возможности</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Всё для вашего успеха
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к разработке с использованием передовых
            технологий
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group ${feature.className}`}
            >
              <div className="relative h-full min-h-[200px] p-6 sm:p-8 rounded-2xl bg-secondary/30 border border-border backdrop-blur-sm hover:bg-secondary/50 hover:border-accent/50 transition-all duration-300 overflow-hidden">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-accent/5 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Готовы обсудить ваш проект?
          </p>
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            <Rocket className="w-5 h-5" />
            Запустить проект
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

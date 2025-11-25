"use client";

import { motion } from "motion/react";
import { Bot, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";
import { sampleQuestions } from "./AIConsultantPreview.data";

interface AIConsultantPreviewProps {
  onNavigate?: () => void;
}

export function AIConsultantPreview({ onNavigate }: AIConsultantPreviewProps) {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-6">
            <Bot className="w-7 h-7 text-accent" />
          </div>
          <h2
            style={{
              fontSize: "3.15rem",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
            className="text-foreground mb-6"
          >
            AI-консультант
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            style={{ fontSize: "1.125rem" }}
          >
            Получите мгновенные ответы на вопросы о наших услугах, ценах и
            сроках. Наш AI-помощник работает 24/7 и знает всё о студии.
          </p>
        </motion.div>

        {/* Interactive Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl border border-border bg-secondary/20 md:backdrop-blur-sm overflow-hidden min-h-[650px]">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative p-8 lg:p-12 flex flex-col justify-between min-h-[650px]">
              {/* AI Welcome Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 mb-10"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Bot className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="px-6 py-5 rounded-xl bg-background/50 border border-border">
                    <p className="text-foreground text-lg leading-relaxed">
                      Привет! 👋 Я AI-консультант студии. Задайте мне любой
                      вопрос о наших услугах, ценах, сроках или выберите
                      популярный вопрос ниже.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Questions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-10 grow"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="text-foreground text-lg">
                    Популярные вопросы
                  </h3>
                </div>
                <div className="space-y-5">
                  {sampleQuestions.map((question, index) => (
                    <Link
                      key={question}
                      href="/ai-consultant"
                      onClick={onNavigate}
                      className="block"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{
                          x: 4,
                          scale: 1.01,
                          transition: { duration: 0.15 },
                        }}
                        whileTap={{ scale: 0.99 }}
                        className="flex items-center gap-3 w-full px-6 py-4 rounded-xl border border-border bg-secondary/30 text-muted-foreground hover:border-accent/50 hover:text-foreground hover:bg-secondary/50 transition-all duration-150 group cursor-pointer"
                      >
                        <MessageCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="flex-1 text-left text-base">
                          {question}
                        </span>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex justify-center"
              >
                <Link href="/ai-consultant" onClick={onNavigate}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] cursor-pointer"
                  >
                    <Bot className="w-5 h-5" />
                    <span>Начать диалог с AI-консультантом</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid md:grid-cols-3 gap-4 mt-6"
          >
            {[
              {
                icon: "🧠",
                title: "Знает всё о студии",
                desc: "Полная информация об услугах",
              },
              {
                icon: "🎯",
                title: "Точные данные",
                desc: "Актуальные цены, сроки, технологии",
              },
              {
                icon: "🕐",
                title: "Работает 24/7",
                desc: "Консультация в любое время",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                className="p-5 rounded-xl border border-border bg-secondary/10 md:backdrop-blur-sm text-center"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h4 className="text-foreground mb-1">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

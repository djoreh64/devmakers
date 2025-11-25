"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { SEO, generateFAQSchema } from "@shared/lib/seo/SEO";
import { STUDIO_NAME, SITE_ORIGIN, TELEGRAM_URL } from "@shared/lib/constants";
import { PageHeading, PageDescription } from "@shared/ui/lib/Typography";
import { useState } from "react";
import { ContactModal } from "@shared/modals/ContactModal";
import { faq } from "./FAQPage.data";
import { trackButtonClick } from "@shared/lib/analytics";
import { fadeInUp } from "@shared/lib/motionConfig";
import { ButtonContainer } from "@widgets/Hero/Hero.styles";
import { useAnimationConfig } from "@shared/lib/hooks";

interface FAQPageProps {
  onNavigate?: (page: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const faqSchema = generateFAQSchema(faq);
  const animConfig = useAnimationConfig();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO
        title="FAQ — Частые вопросы"
        description={`Ответы на популярные вопросы о работе с ${STUDIO_NAME}: сроки разработки, стоимость проектов, технологии, техподдержка. Узнайте больше о сотрудничестве с нашей студией.`}
        keywords="частые вопросы веб-разработка, стоимость создания сайта, сроки разработки, техподдержка сайтов, договор на разработку, работа с регионами"
        canonical={`${SITE_ORIGIN}/faq`}
        structuredData={faqSchema}
      />

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="w-10 h-10 text-accent" />
          </div>
          <PageHeading>Частые вопросы</PageHeading>
          <PageDescription>
            Ответы на самые популярные вопросы о работе с нами
          </PageDescription>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faq.map((item) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 will-change-transform will-change-opacity"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1">
                  <h3
                    style={{ fontSize: "1.25rem" }}
                    className="text-foreground mb-3"
                  >
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-16 p-8 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm text-center will-change-transform will-change-opacity"
        >
          <h3
            style={{ fontSize: "1.5rem" }}
            className="text-foreground mb-4 text-balance"
          >
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-muted-foreground mb-10 text-balance">
            Напишите нам и мы ответим в течение нескольких часов
          </p>
          <div className="w-8/10 mx-auto">
            <ButtonContainer variants={fadeInUp}>
              <motion.button
                onClick={() => {
                  trackButtonClick("Оставить заявку", "hero");
                  setIsContactModalOpen(true);
                }}
                whileHover={
                  animConfig.shouldAnimate ? { scale: 1.05 } : undefined
                }
                whileTap={
                  animConfig.shouldAnimate ? { scale: 0.95 } : undefined
                }
                className="group relative px-10 text-center cursor-pointer justify-center py-3 bg-accent text-accent-foreground rounded-full transition-all duration-300 md:hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] flex items-center gap-3 overflow-hidden text-lg font-semibold shine"
                aria-label="Оставить заявку"
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Оставить заявку</span>
              </motion.button>

              <motion.a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackButtonClick("Telegram", "hero")}
                whileHover={
                  animConfig.shouldAnimate ? { scale: 1.05 } : undefined
                }
                whileTap={
                  animConfig.shouldAnimate ? { scale: 0.95 } : undefined
                }
                className="group px-10 py-3 border-2 justify-center  border-accent/50 bg-background/50 md:backdrop-blur-sm text-foreground rounded-full transition-all duration-300 hover:border-accent hover:bg-accent/10 md:hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] flex items-center gap-3 text-lg font-semibold"
                aria-label="Написать в Telegram"
              >
                <MessageSquare className="w-5 h-5" />
                Написать в Telegram
              </motion.a>
            </ButtonContainer>
          </div>
        </motion.div>
      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Задайте ваш вопрос"
        description="Напишите нам и мы ответим в течение нескольких часов"
      />
    </div>
  );
}

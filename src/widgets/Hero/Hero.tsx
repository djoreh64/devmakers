"use client";

import {
  GradientText,
  PageDescription,
  PageHeading,
} from "@shared/ui/lib/Typography";
import { trackButtonClick } from "@shared/lib/analytics";
import { TELEGRAM_URL } from "@shared/lib/constants";
import { fadeIn, fadeInUp } from "@shared/lib/motionConfig";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ContactModal } from "@shared/modals/ContactModal";

import { ButtonContainer } from "./Hero.styles";
import { keyframes } from "./HeroAnimations";
import { useAnimationConfig } from "@shared/lib/hooks";

export function Hero() {
  const animConfig = useAnimationConfig();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <style>{keyframes}</style>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        role="banner"
        aria-label="Главная секция"
      >
        <div
          className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={animConfig.shouldAnimate ? "visible" : "hidden"}
            transition={{ duration: animConfig.duration }}
          >
            <motion.div
              variants={fadeIn}
              className="inline-block mb-6 px-4 py-2 rounded-full border border-border bg-secondary/50 md:backdrop-blur-sm"
            >
              <span className="text-muted-foreground">
                Digital & AI Solutions
              </span>
            </motion.div>

            <PageHeading variants={fadeInUp}>
              Сайты, дизайн и<br />
              <GradientText>AI для вашего бизнеса</GradientText>
            </PageHeading>

            <PageDescription variants={fadeInUp}>
              Разрабатываем сайты, создаем дизайн, внедряем AI-агентов и
              автоматизируем бизнес-процессы. От идеи до полной реализации.
            </PageDescription>

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
                className="group relative px-10 text-center cursor-pointer justify-center py-4 bg-accent text-accent-foreground rounded-full transition-all duration-300 md:hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] flex items-center gap-3 overflow-hidden text-lg font-semibold shine"
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
                className="group px-10 py-4 border-2 justify-center  border-accent/50 bg-background/50 md:backdrop-blur-sm text-foreground rounded-full transition-all duration-300 hover:border-accent hover:bg-accent/10 md:hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] flex items-center gap-3 text-lg font-semibold"
                aria-label="Написать в Telegram"
              >
                <MessageSquare className="w-5 h-5" />
                Написать в Telegram
              </motion.a>
            </ButtonContainer>

            {animConfig.complexAnimations && (
              <>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float-slower" />
              </>
            )}
          </motion.div>
        </div>

        <ContactModal
          open={isContactModalOpen}
          onOpenChange={setIsContactModalOpen}
          title="Готовы начать проект?"
          description="Оставьте заявку и мы свяжемся с вами в течение 24 часов"
        />
      </section>
    </>
  );
}

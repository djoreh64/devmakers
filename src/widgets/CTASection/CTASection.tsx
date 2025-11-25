"use client";

import { TELEGRAM_URL } from "@shared/lib/constants";
import { ContactModal } from "@shared/modals/ContactModal";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { motion, Transition } from "motion/react";
import { useState } from "react";

import {
  Badge,
  CTAButtonContainer,
  CTADescription,
  CTAHeading,
  FloatingBlobA,
  FloatingBlobB,
  TrustBadges,
} from "./CTASection.styles";

import { trackButtonClick } from "@shared/lib/analytics";
import { useAnimationConfig } from "@shared/lib/hooks";
import { fadeInUp } from "@shared/lib/motionConfig";
import { ButtonContainer } from "../Hero/Hero.styles";
import { blobAnimation, shineAnimation } from "./CTAAnimations";

/* ----------------------------------------
   CTASection Component
---------------------------------------- */
interface CTASectionProps {
  onNavigate?: (page: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  /* ----------------------------------------
     Motion Transitions
  ---------------------------------------- */
  const fadeUp: Transition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };
  const spring: Transition = { type: "spring", stiffness: 200, damping: 20 };

  const animConfig = useAnimationConfig();

  return (
    <>
      {/* Global animations */}
      <style>{blobAnimation}</style>
      <style>{shineAnimation}</style>

      <section className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-accent/5 border-t border-white/5" />

        {/* Floating blobs */}
        <FloatingBlobA />
        <FloatingBlobB />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={fadeUp}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={spring}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8"
            >
              <Sparkles className="w-8 h-8 text-accent" />
            </motion.div>

            {/* Heading */}
            <CTAHeading>Готовы начать проект?</CTAHeading>

            {/* Description */}
            <CTADescription>
              Давайте обсудим вашу идею и создадим что-то невероятное вместе.
              Первая консультация — бесплатно.
            </CTADescription>

            {/* CTA Buttons */}
            <CTAButtonContainer>
              <div className="w-6/10 mx-auto">
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
              </div>
            </CTAButtonContainer>

            {/* Trust badges */}
            <TrustBadges
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Badge>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Бесплатная консультация
              </Badge>
              <Badge>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                NDA по запросу
              </Badge>
              <Badge>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Ответ в течение 24 часов
              </Badge>
            </TrustBadges>
          </motion.div>
        </div>
      </section>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Готовы начать проект?"
        description="Давайте обсудим вашу идею и создадим что-то невероятное вместе"
      />
    </>
  );
}

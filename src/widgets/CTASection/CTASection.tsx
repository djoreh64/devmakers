"use client";

import { motion, Transition } from "motion/react";
import { Sparkles, ArrowRight, MessageSquare } from "lucide-react";
import { useState } from "react";
import { TELEGRAM_URL } from "@shared/lib/constants";
import { ContactModal } from "@shared/modals/ContactModal";

import {
  CTAHeading,
  CTADescription,
  CTAButtonContainer,
  TrustBadges,
  Badge,
  FloatingBlobA,
  FloatingBlobB,
} from "./CTASection.styles";

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

  return (
    <>
      {/* Global animations */}
      <style>{blobAnimation}</style>
      <style>{shineAnimation}</style>

      <section className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-accent/5" />

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
              <motion.button
                onClick={() => setIsContactModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="shine group relative px-8 py-4 rounded-xl bg-accent text-accent-foreground transition-all duration-300 flex items-center gap-2 overflow-hidden hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                aria-label="Оставить заявку"
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Оставить заявку</span>
              </motion.button>

              <motion.a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-border bg-background/50 md:backdrop-blur-sm text-foreground hover:border-accent/50 transition-all flex items-center gap-2"
                aria-label="Написать в Telegram"
              >
                <MessageSquare className="w-5 h-5" />
                Написать в Telegram
              </motion.a>
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

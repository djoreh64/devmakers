"use client";

import { motion } from "motion/react";
import { TELEGRAM_URL, CONTACT_EMAIL } from "@shared/lib/constants";

export function InfoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl border border-border bg-accent/5 backdrop-blur-sm"
    >
      <p className="text-muted-foreground text-center text-sm sm:text-base">
        Не нашли ответ на свой вопрос? Свяжитесь с нами напрямую через{" "}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Telegram
        </a>{" "}
        или{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-accent hover:underline"
        >
          Email
        </a>
      </p>
    </motion.div>
  );
}

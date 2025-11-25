"use client";

import { motion } from "motion/react";
import { Bot } from "lucide-react";

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-12"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 mb-4 sm:mb-6">
        <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
      </div>
      <h1
        style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
        }}
        className="text-foreground mb-3 sm:mb-4"
      >
        AI-консультант
      </h1>
      <p
        className="text-muted-foreground max-w-2xl mx-auto px-4"
        style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}
      >
        Получите мгновенные ответы на ваши вопросы о наших услугах
      </p>
    </motion.div>
  );
}

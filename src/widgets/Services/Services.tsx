"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { services } from "./Services.data";
import { useAnimationConfig } from "@shared/lib/hooks";

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const animConfig = useAnimationConfig();

  const handleCardClick = () => {
    onNavigate?.("portfolio");
  };

  return (
    <section
      id="services"
      className="relative py-20 sm:py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/5 to-transparent" />

      {/* Animated background orbs - only on capable devices */}
      {animConfig.complexAnimations && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            style={{ willChange: "transform, opacity" }}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            style={{ willChange: "transform, opacity" }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animConfig.duration }}
          className="text-center mb-20"
        >
          <motion.div
            initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animConfig.duration, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Наши услуги</span>
          </motion.div>

          <h2
            style={{
              fontSize: "3rem",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
            className="text-foreground mb-4"
          >
            Что мы делаем
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Комплексные digital-решения для вашего бизнеса
          </p>
        </motion.div>

        {/* Services grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr"
          style={
            animConfig.complexAnimations ? { perspective: "1000px" } : undefined
          }
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

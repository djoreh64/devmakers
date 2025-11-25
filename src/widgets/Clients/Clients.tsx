"use client";

import { motion } from "motion/react";
import { clients } from "./Clients.data";
import { useAnimationConfig } from "@shared/lib/hooks";

export function Clients() {
  const animConfig = useAnimationConfig();

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden border-y border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animConfig.duration }}
          className="text-center mb-12"
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            Нам доверяют
          </p>
          <h3 className="text-2xl sm:text-3xl">
            Более 150 компаний по всему миру
          </h3>
        </motion.div>

        {/* Marquee animation */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 sm:gap-16 whitespace-nowrap"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center px-6 py-4 rounded-xl bg-secondary/30 border border-border md:backdrop-blur-sm hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300 min-w-[200px]"
                >
                  <span className="text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors">
                    {client}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center px-6 py-4 rounded-xl bg-secondary/30 border border-border md:backdrop-blur-sm hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300 min-w-[200px]"
                >
                  <span className="text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors">
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Stats below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl text-accent mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Проектов</div>
          </div>
          <div className="text-center border-x border-border">
            <div className="text-3xl sm:text-4xl text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Лет опыта</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

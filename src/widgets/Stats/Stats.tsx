"use client";

import { useAnimationConfig } from "@shared/lib/hooks";
import { TrendingUp } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { stats } from "./Stats.data";

function AnimatedNumber({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animConfig = useAnimationConfig();

  useEffect(() => {
    if (!isInView) return;

    if (animConfig.reducedMotion) {
      setCount(value);
      return;
    }

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, value, duration, animConfig.reducedMotion]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const animConfig = useAnimationConfig();

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animConfig.duration }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Статистика</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Цифры говорят сами
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Результаты нашей работы в цифрах — реальные показатели эффективности
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: animConfig.duration, delay: index * 0.1 }}
              whileHover={animConfig.shouldAnimate ? { scale: 1.05 } : {}}
              className="relative group h-full"
            >
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-secondary/30 border border-border md:backdrop-blur-sm hover:bg-secondary/50 hover:border-accent/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>

                {/* Value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 text-foreground">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedNumber value={stat.value} />
                  <span className="text-accent">{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </p>

                {/* Hover glow effect - only on capable devices */}
                {animConfig.complexAnimations && (
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 md:blur-xl" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

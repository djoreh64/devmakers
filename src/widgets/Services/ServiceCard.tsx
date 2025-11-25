"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useState } from "react";
import { useAnimationConfig } from "@shared/lib/hooks";

interface ServiceCardProps {
  service: Service;
  index: number;
  onClick?: () => void;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  glowColor?: string;
}

export function ServiceCard({ service, index, onClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const animConfig = useAnimationConfig();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!animConfig.complexAnimations) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!animConfig.complexAnimations) return;
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={animConfig.shouldAnimate ? { opacity: 0, y: 30 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: animConfig.duration,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        animConfig.complexAnimations
          ? { rotateX, rotateY, transformStyle: "preserve-3d" }
          : undefined
      }
      className="group relative h-full cursor-pointer"
    >
      {/* Gradient glow effect, только если complexAnimations */}
      {animConfig.complexAnimations && (
        <motion.div
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute -inset-0.5 bg-linear-to-r ${service.gradient} rounded-2xl blur-xl`}
        />
      )}

      {/* Main card */}
      <motion.div
        whileHover={animConfig.shouldAnimate ? { y: -8 } : {}}
        transition={{ duration: 0.2 }}
        className="relative h-full p-8 lg:p-10 rounded-2xl border border-border bg-background/80 backdrop-blur-xl overflow-hidden flex flex-col"
        style={{ willChange: animConfig.shouldAnimate ? "transform" : "auto" }}
      >
        {/* Background animations только на capable devices */}
        {animConfig.complexAnimations && (
          <>
            {/* Animated gradient */}
            <motion.div
              animate={{
                backgroundPosition: isHovered
                  ? ["0% 0%", "100% 100%"]
                  : "0% 0%",
              }}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
              }}
              className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Shine effect */}
            <motion.div
              animate={{ x: isHovered ? ["0%", "200%"] : "0%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
            />
          </>
        )}

        {/* Icon + content */}
        <div className="relative flex flex-col h-full">
          <div className="mb-6 relative">
            <div
              className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300`}
            >
              <service.icon
                className={`w-8 h-8 ${service.iconColor} relative z-10`}
              />
            </div>
          </div>

          <h3
            style={{ fontSize: "1.5rem" }}
            className="text-foreground mb-3 relative"
          >
            {service.title}
          </h3>

          <p className="text-muted-foreground mb-6 leading-relaxed grow">
            {service.description}
          </p>

          {/* Hover indicator */}
          <div
            className={`flex items-center gap-2 text-accent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-sm">Узнать больше</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Corner accent */}
        <div
          className={`absolute top-4 right-4 w-2 h-2 bg-accent rounded-full transition-all duration-300 ${
            isHovered ? "scale-100" : "scale-0"
          }`}
        />
      </motion.div>
    </motion.div>
  );
}

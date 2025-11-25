"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useAnimationConfig } from "@shared/lib/hooks";

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const animConfig = useAnimationConfig();

  useEffect(() => {
    if (!isLoading) return;

    // Simulate loading progress
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          {/* Background gradient orbs */}
          {animConfig.complexAnimations && (
            <>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
              />
            </>
          )}

          <div className="relative max-w-md w-full px-8">
            {/* Logo/Icon */}
            <motion.div
              initial={
                animConfig.shouldAnimate ? { scale: 0, rotate: -180 } : false
              }
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="flex justify-center mb-12"
            >
              {/* Geometric loader icon */}
              <div className="relative w-20 h-20">
                {/* Outer ring */}
                <motion.div
                  animate={animConfig.shouldAnimate ? { rotate: 360 } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-2xl border-2 border-accent/30"
                  style={{
                    borderRadius: "30%",
                  }}
                />

                {/* Inner ring */}
                <motion.div
                  animate={animConfig.shouldAnimate ? { rotate: -360 } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-2 rounded-xl border-2 border-accent/50"
                  style={{
                    borderRadius: "25%",
                  }}
                />

                {/* Center square */}
                <motion.div
                  animate={
                    animConfig.complexAnimations
                      ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 90, 180, 270, 360],
                        }
                      : {}
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-4 rounded-lg bg-linear-to-br from-accent to-purple-500"
                  style={{
                    boxShadow: "0 0 40px rgba(99, 102, 241, 0.4)",
                  }}
                />

                {/* Glow effect */}
                {animConfig.complexAnimations && (
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl"
                  />
                )}
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2
                className="text-foreground mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Загрузка
              </h2>
              <p className="text-muted-foreground text-sm">
                Подготавливаем для вас лучший опыт
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Background track */}
              <div className="h-1 bg-border rounded-full overflow-hidden">
                {/* Progress fill */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-linear-to-r from-accent to-purple-500 relative"
                >
                  {/* Shimmer effect */}
                  {animConfig.complexAnimations && (
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-white/30 to-transparent"
                    />
                  )}
                </motion.div>
              </div>

              {/* Progress percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-between items-center mt-4 text-xs text-muted-foreground"
              >
                <span>Загружается...</span>
                <span className="text-accent">{Math.round(progress)}%</span>
              </motion.div>
            </motion.div>

            {/* Dots animation */}
            <motion.div
              initial={animConfig.shouldAnimate ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-2 mt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={
                    animConfig.shouldAnimate
                      ? {
                          y: [0, -8, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-accent/50"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

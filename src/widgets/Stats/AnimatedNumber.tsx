"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useInView } from "motion/react";
import { useAnimationConfig } from "@shared/lib/hooks";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

export function AnimatedNumber({ value, duration = 2 }: AnimatedNumberProps) {
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

      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isInView, value, duration, animConfig.reducedMotion]);

  return <span ref={ref}>{count}</span>;
}

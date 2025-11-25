import { useState, useEffect } from "react";

export const useAnimationConfig = () => {
  const [config, setConfig] = useState({
    shouldAnimate: true,
    reducedMotion: true,
    duration: 0.2,
    complexAnimations: false,
  });

  useEffect(() => {
    const isMobileDevice = (): boolean => {
      if (typeof navigator === "undefined") return false;
      return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    const prefersReducedMotion = (): boolean => {
      if (typeof window === "undefined") return true;
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    };

    const isLowEndDevice = (): boolean => {
      if (typeof navigator === "undefined") return true;

      const cores = navigator.hardwareConcurrency || 2;
      if (cores <= 2) return true;

      const deviceMemory = (navigator as any).deviceMemory;
      if (deviceMemory && deviceMemory <= 4) return true;

      const connection = (navigator as any).connection;
      if (connection) {
        const slowConnections = ["slow-2g", "2g", "3g"];
        if (slowConnections.includes(connection.effectiveType)) return true;
      }

      return false;
    };

    const shouldReduceMotion = prefersReducedMotion();
    const isLowEnd = isLowEndDevice();
    const isMobile = isMobileDevice();

    const complexAnimations = !shouldReduceMotion && !isLowEnd && !isMobile;

    setConfig({
      shouldAnimate: !shouldReduceMotion && !isLowEnd,
      reducedMotion: shouldReduceMotion || isLowEnd || isMobile,
      duration: shouldReduceMotion || isLowEnd || isMobile ? 0.2 : 0.5,
      complexAnimations,
    });
  }, []);

  return config;
};

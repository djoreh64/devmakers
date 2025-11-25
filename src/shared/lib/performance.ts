"use client";

// Performance utilities for optimizing animations and rendering

/**
 * Check if user is on a mobile device
 */
export const isMobileDevice = (): boolean => {
  if (typeof navigator === "undefined" || typeof window === "undefined")
    return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Detect if device is low-end based on various metrics
 */
export const isLowEndDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 2;
  if (cores <= 2) return true;

  // Check device memory if available
  const deviceMemory = (navigator as any).deviceMemory;
  if (deviceMemory && deviceMemory <= 4) return true;

  // Check connection type
  const connection = (navigator as any).connection;
  if (connection) {
    const slowConnections = ["slow-2g", "2g", "3g"];
    if (slowConnections.includes(connection.effectiveType)) return true;
  }

  return false;
};

/**
 * Get optimized animation config based on device capabilities
 */
export const getAnimationConfig = () => {
  const shouldReduceMotion = prefersReducedMotion();
  const isLowEnd = isLowEndDevice();
  const isMobile = isMobileDevice();

  const complexAnimations = !shouldReduceMotion && !isLowEnd && !isMobile;

  return {
    shouldAnimate: true,
    reducedMotion: shouldReduceMotion || isLowEnd,
    duration: shouldReduceMotion || isLowEnd ? 0.2 : 0.5,
    complexAnimations,
  };
};

/**
 * Throttle function for scroll/resize events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function for expensive operations
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

/**
 * Lazy load component with intersection observer
 */
export const useLazyLoad = (options?: IntersectionObserverInit) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "50px",
    threshold: 0.01,
    ...options,
  };

  return defaultOptions;
};

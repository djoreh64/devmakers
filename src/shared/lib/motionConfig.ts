/**
 * Optimized Motion/Framer Motion configuration
 * Provides performance-optimized animation variants and transitions
 */

import { Variants, Transition } from "motion/react";
import { getAnimationConfig } from "./performance";

// Get animation config once
const animConfig = getAnimationConfig();

/**
 * Optimized transition with reduced motion support
 */
export const optimizedTransition: Transition = {
  duration: animConfig.duration,
  ease: "easeOut",
};

/**
 * Fast transition for quick interactions
 */
export const fastTransition: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

/**
 * Smooth transition for page transitions
 */
export const smoothTransition: Transition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1], // Custom easing curve
};

/**
 * Fade in animation variant
 */
export const fadeIn: Variants = {
  hidden: animConfig.shouldAnimate ? { opacity: 0 } : { opacity: 1 },
  visible: {
    opacity: 1,
    transition: optimizedTransition,
  },
};

/**
 * Fade in up animation variant
 */
export const fadeInUp: Variants = {
  hidden: animConfig.shouldAnimate
    ? { opacity: 0, y: 20 }
    : { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: optimizedTransition,
  },
};

/**
 * Fade in down animation variant
 */
export const fadeInDown: Variants = {
  hidden: animConfig.shouldAnimate
    ? { opacity: 0, y: -20 }
    : { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: optimizedTransition,
  },
};

/**
 * Fade in left animation variant
 */
export const fadeInLeft: Variants = {
  hidden: animConfig.shouldAnimate
    ? { opacity: 0, x: -20 }
    : { opacity: 1, x: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: optimizedTransition,
  },
};

/**
 * Fade in right animation variant
 */
export const fadeInRight: Variants = {
  hidden: animConfig.shouldAnimate
    ? { opacity: 0, x: 20 }
    : { opacity: 1, x: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: optimizedTransition,
  },
};

/**
 * Scale animation variant
 */
export const scaleIn: Variants = {
  hidden: animConfig.shouldAnimate
    ? { opacity: 0, scale: 0.9 }
    : { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: optimizedTransition,
  },
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
  hidden: { opacity: animConfig.shouldAnimate ? 0 : 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Optimized hover scale animation
 * Only applies scale if complex animations are enabled
 */
export const hoverScale = animConfig.complexAnimations
  ? { scale: 1.05, transition: fastTransition }
  : {};

/**
 * Optimized tap scale animation
 */
export const tapScale = animConfig.shouldAnimate
  ? { scale: 0.95, transition: fastTransition }
  : {};

/**
 * Viewport animation props for scroll-triggered animations
 */
export const viewportProps = {
  once: true,
  amount: 0.3 as const,
  margin: "-100px",
};

/**
 * Layout transition for smooth layout changes
 * Only use when absolutely necessary for performance
 */
export const layoutTransition: Transition = {
  layout: {
    duration: 0.3,
    ease: "easeOut",
  },
};

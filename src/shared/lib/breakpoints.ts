/**
 * Emotion CSS Breakpoints Utility
 * Provides consistent responsive design breakpoints across the application
 */

export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultrawide: 1536,
};

export const mediaQueries = {
  mobile: `@media (min-width: ${breakpoints.mobile}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  wide: `@media (min-width: ${breakpoints.wide}px)`,
  ultrawide: `@media (min-width: ${breakpoints.ultrawide}px)`,
};

// Helper for max-width queries
export const maxMediaQueries = {
  mobile: `@media (max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `@media (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `@media (max-width: ${breakpoints.wide - 1}px)`,
};

// Type-safe breakpoint helper
export type Breakpoint = keyof typeof breakpoints;

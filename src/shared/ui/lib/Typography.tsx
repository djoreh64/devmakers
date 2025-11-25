"use client";

import styled from "@emotion/styled";
import { motion } from "motion/react";
import { mediaQueries } from "@shared/lib/breakpoints";

/**
 * Universal page heading component
 * Responsive typography that scales across all breakpoints
 */
export const PageHeading = styled(motion.h1)`
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  /* Mobile: 2rem (32px) */
  font-size: 2rem;

  /* Tablet: 3.5rem (56px) */
  ${mediaQueries.tablet} {
    font-size: 3.5rem;
  }

  /* Desktop: 4.25rem (68px) */
  ${mediaQueries.desktop} {
    font-size: 4.25rem;
  }

  /* Wide: 5rem (80px) */
  ${mediaQueries.wide} {
    font-size: 5rem;
  }
`;

/**
 * Section heading component (h2)
 * Slightly smaller than page heading
 */
export const SectionHeading = styled(motion.h2)`
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  /* Mobile: 1.75rem (28px) */
  font-size: 1.75rem;

  /* Tablet: 2.5rem (40px) */
  ${mediaQueries.tablet} {
    font-size: 2.5rem;
  }

  /* Desktop: 3.5rem (56px) */
  ${mediaQueries.desktop} {
    font-size: 3.5rem;
  }

  /* Wide: 4rem (64px) */
  ${mediaQueries.wide} {
    font-size: 4rem;
  }
`;

/**
 * Gradient text component for accent words
 */
export const GradientText = styled.span`
  background: linear-gradient(to right, var(--accent, #6366f1), #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

/**
 * Page description component
 * Responsive typography for subtitle/description text
 */
export const PageDescription = styled(motion.p)`
  color: var(--muted-foreground);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 30rem;
  text-wrap: balance;

  /* Mobile: 1rem (16px) */
  font-size: 1rem;

  /* Tablet: 1.125rem (18px) */
  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }

  /* Desktop: 1.25rem (20px) */
  ${mediaQueries.desktop} {
    font-size: 1.25rem;
    max-width: 42rem;
  }
`;

/**
 * Section description component
 * Slightly smaller max-width for section descriptions
 */
export const SectionDescription = styled(motion.p)`
  color: var(--muted-foreground);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 28rem;
  text-wrap: balance;

  /* Mobile: 1rem (16px) */
  font-size: 1rem;

  /* Tablet: 1.125rem (18px) */
  ${mediaQueries.tablet} {
    font-size: 1.125rem;
    max-width: 36rem;
  }

  /* Desktop: 1.125rem (18px) */
  ${mediaQueries.desktop} {
    font-size: 1.125rem;
    max-width: 40rem;
  }
`;

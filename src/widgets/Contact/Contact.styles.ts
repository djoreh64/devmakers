import styled from "@emotion/styled";
import { mediaQueries } from "@shared/lib/breakpoints";
import { motion } from "motion/react";

// Styled Components for Contact Section
export const ContactHeading = styled(motion.h2)`
  color: var(--foreground);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;

  /* Mobile: 2rem (32px) */
  font-size: 2rem;

  /* Tablet: 2.5rem (40px) */
  ${mediaQueries.tablet} {
    font-size: 2.5rem;
  }

  /* Desktop: 3.5rem (56px) */
  ${mediaQueries.desktop} {
    font-size: 3.5rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, var(--accent, #6366f1), #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

export const ContactDescription = styled.p`
  color: var(--muted-foreground);
  margin-bottom: 1.5rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;

  /* Mobile: 1rem (16px) */
  font-size: 1rem;

  /* Tablet: 1.125rem (18px) */
  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }
`;

export const FeatureCard = styled(motion.div)`
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  background: var(--secondary-30);
  backdrop-filter: blur(8px);
  text-align: center;
`;

export const FeatureTitle = styled.h3`
  color: var(--foreground);
  margin-bottom: 0.5rem;

  /* Mobile: 1rem (16px) */
  font-size: 1rem;

  /* Tablet: 1.125rem (18px) */
  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }
`;

export const FeatureDescription = styled.p`
  color: var(--muted-foreground);

  /* Mobile: 0.875rem (14px) */
  font-size: 0.875rem;

  /* Tablet: 1rem (16px) */
  ${mediaQueries.tablet} {
    font-size: 1rem;
  }
`;

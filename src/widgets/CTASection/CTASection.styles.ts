import styled from "@emotion/styled";
import { motion } from "motion/react";
import { mediaQueries } from "@shared/lib/breakpoints";

/* ----------------------------------------
   Styled Components for CTA Section
---------------------------------------- */
export const CTAHeading = styled.h2`
  color: var(--foreground);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-size: 2rem;

  ${mediaQueries.tablet} {
    font-size: 2.5rem;
  }
  ${mediaQueries.desktop} {
    font-size: 3rem;
  }
`;

export const CTADescription = styled.p`
  color: var(--muted-foreground);
  max-width: 42rem;
  margin: 0 auto 3rem;
  font-size: 1rem;

  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }
`;

export const CTAButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-direction: column;

  ${mediaQueries.tablet} {
    flex-direction: row;
  }
`;

export const TrustBadges = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 0.875rem;
  color: var(--muted-foreground);

  ${mediaQueries.mobile} {
    gap: 1rem;
    font-size: 0.75rem;
  }
  ${mediaQueries.tablet} {
    gap: 2rem;
    font-size: 0.875rem;
  }
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  ${mediaQueries.tablet} {
    font-size: 1rem;
  }
`;

/* ----------------------------------------
   Floating blobs
---------------------------------------- */
export const FloatingBlobA = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  width: 24rem;
  height: 24rem;
  background-color: rgba(var(--accent-rgb), 0.2);
  border-radius: 9999px;
  filter: blur(60px);
  animation: floatBlobA 8s ease-in-out infinite;
  will-change: transform, opacity;
`;

export const FloatingBlobB = styled.div`
  position: absolute;
  bottom: 0;
  right: 25%;
  width: 24rem;
  height: 24rem;
  background-color: rgba(168, 85, 247, 0.2);
  border-radius: 9999px;
  filter: blur(60px);
  animation: floatBlobB 10s ease-in-out infinite;
  will-change: transform, opacity;
`;

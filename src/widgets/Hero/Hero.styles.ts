import styled from "@emotion/styled";
import { motion } from "motion/react";
import { mediaQueries } from "@shared/lib/breakpoints";

/* ----------------------------------------
   Hero Styled Components
---------------------------------------- */
export const ButtonContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  gap: 1rem;
  flex-direction: column;

  ${mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BadgeContainer = styled(motion.div)`
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
`;

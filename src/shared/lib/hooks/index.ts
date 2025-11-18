import { useState } from "react";
import { getAnimationConfig } from "../performance";

export const useAnimationConfig = () => {
  const [animConfig] = useState(() => {
    if (typeof window === "undefined") {
      return {
        shouldAnimate: false,
        reducedMotion: false,
        duration: 0.2,
        complexAnimations: false,
      };
    }

    return getAnimationConfig();
  });

  return animConfig;
};

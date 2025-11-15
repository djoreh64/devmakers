"use client";

import Image from "next/image";
import { STUDIO_NAME } from "@shared/lib/constants";

interface LogoProps {
  width?: number;
  height?: number;
  showText?: boolean;
  className?: string;
}

export function Logo({
  width = 40,
  height = 40,
  showText = true,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="transition-opacity duration-300">
        <Image
          src="/logo-new.svg"
          alt={`${STUDIO_NAME} logo`}
          width={width}
          height={height}
          priority
        />
      </div>
      {showText && (
        <span className="text-xl font-bold text-foreground">{STUDIO_NAME}</span>
      )}
    </div>
  );
}

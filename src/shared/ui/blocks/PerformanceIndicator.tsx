"use client";

import { useState, useEffect } from "react";
import { useAnimationConfig } from "@shared/lib/hooks";

export function PerformanceIndicator() {
  const [fps, setFps] = useState(60);
  const [show, setShow] = useState(false);
  const animConfig = useAnimationConfig();

  useEffect(() => {
    // Show only in development
    if (process.env.NODE_ENV !== "development") return;

    let frameCount = 0;
    let lastTime = performance.now();
    let rafId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }

      rafId = requestAnimationFrame(measureFPS);
    };

    rafId = requestAnimationFrame(measureFPS);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Toggle with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setShow((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  if (!show) return null;

  const fpsColor =
    fps >= 55 ? "bg-green-500" : fps >= 30 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 rounded-lg bg-black/90 border border-white/20 backdrop-blur-sm text-white text-sm font-mono space-y-2">
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${fpsColor}`} />
        <span>FPS: {fps}</span>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${animConfig.shouldAnimate ? "bg-green-500" : "bg-yellow-500"}`}
        />
        <span>Animations: {animConfig.shouldAnimate ? "ON" : "OFF"}</span>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${animConfig.complexAnimations ? "bg-green-500" : "bg-yellow-500"}`}
        />
        <span>Complex: {animConfig.complexAnimations ? "ON" : "OFF"}</span>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${animConfig.reducedMotion ? "bg-yellow-500" : "bg-green-500"}`}
        />
        <span>Reduced: {animConfig.reducedMotion ? "YES" : "NO"}</span>
      </div>

      {typeof navigator !== "undefined" && (
        <>
          <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
            Cores: {navigator.hardwareConcurrency || "N/A"}
          </div>

          {(navigator as any).deviceMemory && (
            <div className="text-xs text-gray-400">
              Memory: {(navigator as any).deviceMemory}GB
            </div>
          )}

          {(navigator as any).connection && (
            <div className="text-xs text-gray-400">
              Network: {(navigator as any).connection.effectiveType}
            </div>
          )}
        </>
      )}

      <div className="text-xs text-gray-500 pt-2 border-t border-white/10">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}

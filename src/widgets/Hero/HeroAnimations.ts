// Hero Animations

export const floatSlow = "floatBlob 10s ease-in-out infinite";
export const floatSlower = "floatBlob 15s ease-in-out infinite";

export const keyframes = `
@keyframes floatBlob {
  0% { transform: translateY(0) scale(1); opacity: 0.3; }
  50% { transform: translateY(-20px) scale(1.05); opacity: 0.5; }
  100% { transform: translateY(0) scale(1); opacity: 0.3; }
}

@keyframes shineMove {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

.shine::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 50%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent);
  animation: shineMove 2s ease-in-out infinite;
  animation-delay: 1s;
  will-change: transform;
}
`;

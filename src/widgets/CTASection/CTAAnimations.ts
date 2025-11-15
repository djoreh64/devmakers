export const blobAnimation = `
  @keyframes floatBlobA {
    0% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.5; }
    100% { transform: scale(1); opacity: 0.3; }
  }

  @keyframes floatBlobB {
    0% { transform: scale(1.2); opacity: 0.2; }
    50% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(1.2); opacity: 0.2; }
  }
`;

export const shineAnimation = `
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

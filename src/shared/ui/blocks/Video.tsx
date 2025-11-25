import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function Video({ project }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mb-16 rounded-2xl overflow-hidden border border-border bg-background p-2 group cursor-pointer"
      style={{ maxHeight: "500px" }}
      onClick={isPlaying ? handleStop : handlePlay}
    >
      <div className="w-full aspect-16/10 overflow-visible">
        <video
          ref={videoRef}
          src="/video.mp4"
          muted
          loop
          playsInline
          className={`
        absolute inset-0 w-full h-full object-contain
        transition-opacity duration-500
        ${isPlaying ? "opacity-100" : "opacity-0"}
      `}
        />
        {!isPlaying && (
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        )}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/25 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>

      {!isPlaying && (
        <div
          className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        opacity-100 md:opacity-0 md:group-hover:opacity-100
        transition-opacity duration-500
        z-10
      "
        >
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
}

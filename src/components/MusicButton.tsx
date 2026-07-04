import { useState, useEffect, useRef } from "react";
import { ASSETS } from "@/config/assets";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(ASSETS.bgm);
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    const attemptAutoPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setShowHint(false);
        }).catch(() => {
          const handleFirstInteraction = () => {
            if (audioRef.current && !isPlaying) {
              audioRef.current.play().then(() => {
                setIsPlaying(true);
                setShowHint(false);
              }).catch(() => {});
            }
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("touchstart", handleFirstInteraction);
            document.removeEventListener("scroll", handleFirstInteraction);
            document.removeEventListener("keydown", handleFirstInteraction);
          };

          document.addEventListener("click", handleFirstInteraction);
          document.addEventListener("touchstart", handleFirstInteraction);
          document.addEventListener("scroll", handleFirstInteraction, { once: true });
          document.addEventListener("keydown", handleFirstInteraction);
        });
      }
    };

    attemptAutoPlay();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowHint(false);
      }).catch(() => {});
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: "rgba(251, 247, 240, 0.85)",
        borderColor: "rgba(107, 78, 49, 0.25)",
        color: "#6B4E31",
      }}
      aria-label={isPlaying ? "暂停音乐" : "播放音乐"}
    >
      {showHint && (
        <span
          className="absolute -left-20 top-1/2 -translate-y-1/2 text-[10px] tracking-wider whitespace-nowrap"
          style={{ color: "#6B5E54" }}
        >
          ♪ 点击播放
        </span>
      )}
      <svg
        className={`w-4 h-4 transition-transform duration-700 ${isPlaying ? "animate-spin-slow" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    </button>
  );
}

import { useState, useEffect, useRef } from "react";
import { withBaseAsset } from "@/config/assets";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(withBaseAsset("assets/audio/bgm.mp3"));
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    // 尝试自动播放（现代浏览器可能阻止）
    const attemptAutoPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setShowHint(false);
        }).catch(() => {
          // 自动播放被阻止，监听用户首次交互
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

    // 页面加载后立即尝试
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
      className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-champagne-300/50 bg-ivory-100/80 backdrop-blur-sm transition-all duration-300 hover:bg-champagne-300/20"
      aria-label={isPlaying ? "暂停音乐" : "播放音乐"}
    >
      {showHint && (
        <span className="absolute -left-20 top-1/2 -translate-y-1/2 text-xs text-champagne-400 whitespace-nowrap animate-pulse-soft">
          ♪ 点击播放
        </span>
      )}
      <svg
        className={`w-4 h-4 text-champagne-400 transition-transform duration-300 ${isPlaying ? "animate-spin-slow" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isPlaying ? (
          <>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </>
        ) : (
          <>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </>
        )}
      </svg>
    </button>
  );
}

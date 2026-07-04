import { useEffect, useState } from "react";
import { ASSETS } from "@/config/assets";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("invitation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ivory-100">
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster=""
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: mounted ? 0.7 : 0, transition: "opacity 2s ease" }}
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
      )}

      {(videoError) && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, #F0EBE1 0%, #F8F5F0 50%, #FDFBF7 100%)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        />
      )}

      <div
        className="absolute inset-0 bg-ivory-100/25"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 1.5s ease" }}
      />

      <div className="relative z-10 text-center px-6">
        <p
          className="font-display text-champagne-500 text-xs sm:text-sm tracking-[0.4em] uppercase mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          SAVE THE DATE
        </p>

        <h1
          className="mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.4s",
          }}
        >
          <div className="flex justify-center items-center gap-6 sm:gap-10 mb-6">
            <span className="font-art text-charcoal-300 text-5xl sm:text-6xl md:text-7xl font-light">邵</span>
            <span className="font-art text-charcoal-300 text-5xl sm:text-6xl md:text-7xl font-light">翔</span>
          </div>

          <div className="text-champagne-400 text-2xl sm:text-3xl font-display mb-6">
            &amp;
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-8">
            <span className="font-art text-charcoal-300 text-5xl sm:text-6xl md:text-7xl font-light">周</span>
            <span className="font-art text-charcoal-300 text-5xl sm:text-6xl md:text-7xl font-light">钰</span>
            <span className="font-art text-charcoal-300 text-5xl sm:text-6xl md:text-7xl font-light">瑶</span>
          </div>
        </h1>

        <div
          className="flex items-center justify-center gap-4 mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
        >
          <div className="w-24 h-px bg-champagne-300/60" />
          <div className="w-3 h-3 rotate-45 bg-champagne-300" />
          <div className="w-24 h-px bg-champagne-300/60" />
        </div>

        <div
          className="space-y-3"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 1s",
          }}
        >
          <p className="font-art text-charcoal-300 text-lg sm:text-xl tracking-wider">
            二〇二六年九月十二日
          </p>
          <p className="font-display text-champagne-500 text-xs sm:text-sm tracking-[0.3em] uppercase">
            SEPTEMBER 12, 2026
          </p>
          <p className="font-serif text-charcoal-200 text-xs sm:text-sm mt-4 tracking-wide">
            农历八月初二 · 星期六
          </p>
        </div>

        <button
          onClick={scrollToContent}
          className="mt-16 text-champagne-500 text-sm animate-float"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 1.5s",
          }}
        >
          <p className="font-serif tracking-wider mb-3">向下滑动</p>
          <svg
            className="w-5 h-5 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

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
    <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden bg-black">
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster=""
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 1.5s ease" }}
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
      )}

      {videoError && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, #F0EBE1 0%, #F8F5F0 50%, #FDFBF7 100%)",
          }}
        />
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.7) 100%)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.5s ease",
        }}
      />

      <div className="relative z-10 w-full px-8 pb-24 sm:pb-32 md:pb-40">
        <div className="text-center">
          <p
            className="text-champagne-100 text-base sm:text-lg font-light mb-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "all 0.8s ease 0.3s",
              fontFamily: '"Long Cang", "Ma Shan Zheng", cursive, serif',
              letterSpacing: "0.15em",
            }}
          >
            2026.09.12
          </p>

          <h1
            className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-2"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.5s",
              fontFamily: '"Long Cang", "Ma Shan Zheng", cursive, serif',
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              lineHeight: 1.1,
              letterSpacing: "0.05em",
            }}
          >
            我们的婚礼
          </h1>

          <div
            className="relative w-full max-w-[280px] sm:max-w-[340px] mx-auto mb-2"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.7s",
              height: "24px",
            }}
          >
            <svg
              viewBox="0 0 400 40"
              className="w-full h-full"
              style={{ overflow: "visible" }}
            >
              <path
                d="M0,20 Q100,0 200,20 T400,20"
                fill="none"
                stroke="#C9A96E"
                strokeWidth="1.5"
                opacity="0.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p
            className="text-champagne-100 text-lg sm:text-xl font-light -mt-1"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "all 0.8s ease 0.8s",
              fontFamily: '"Long Cang", "Ma Shan Zheng", cursive, serif',
              letterSpacing: "0.1em",
            }}
          >
            our wedding
          </p>

          <div
            className="flex items-center justify-center gap-3 sm:gap-5 mt-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "all 0.8s ease 1s",
            }}
          >
            <span
              className="text-white text-lg sm:text-xl font-light"
              style={{
                fontFamily: '"Ma Shan Zheng", "Noto Serif SC", serif',
              }}
            >
              邵翔
            </span>
            <span className="text-red-400 text-xl sm:text-2xl font-bold" style={{ fontFamily: '"Ma Shan Zheng", serif' }}>
              囍
            </span>
            <span
              className="text-white text-lg sm:text-xl font-light"
              style={{
                fontFamily: '"Ma Shan Zheng", "Noto Serif SC", serif',
              }}
            >
              周钰瑶
            </span>
          </div>

          <button
            onClick={scrollToContent}
            className="mt-12 text-white/70 text-xs animate-float"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 1.3s",
            }}
          >
            <p className="tracking-widest mb-2">向上滑动</p>
            <svg
              className="w-4 h-4 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

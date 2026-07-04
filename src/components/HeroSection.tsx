import { useEffect, useState } from "react";
import { ASSETS } from "@/config/assets";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

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
      <img
        src={ASSETS.heroPoster}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease" }}
      />

      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={ASSETS.heroPoster}
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          onError={() => {
            setVideoError(true);
            setVideoReady(false);
          }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: mounted && videoReady ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
      )}

      <img
        src={ASSETS.heroTitleOverlay}
        alt=""
        className="hero-title-overlay"
        style={{
          position: "absolute",
          left: "50%",
          top: "46%",
          width: "min(92vw, 760px)",
          height: "auto",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          pointerEvents: "none",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.5s ease 0.3s",
        }}
      />

      <style>{`
        @media (max-width: 480px) {
          .hero-title-overlay {
            top: 51% !important;
            width: 96vw !important;
          }
        }
      `}</style>

      <button
        onClick={scrollToContent}
        className="relative z-10 mt-auto mb-8 text-white/80 text-xs animate-float"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1s",
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
    </section>
  );
}

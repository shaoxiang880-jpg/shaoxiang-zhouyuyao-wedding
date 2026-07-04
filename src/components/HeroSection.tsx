import { useEffect, useState } from "react";
import { ASSETS } from "@/config/assets";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-cream overflow-hidden">
      {/* 顶部英文标题 */}
      <header
        className="relative z-20 pt-10 pb-5 text-center"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 0.2s",
        }}
      >
        <p className="font-display text-[11px] sm:text-xs tracking-[0.35em] uppercase text-charcoal-200">
          Wedding Invitation
        </p>
      </header>

      {/* 主视觉照片 */}
      <div className="relative flex-1 w-full px-5 sm:px-8 flex items-center justify-center">
        <div
          className="relative w-full max-h-[70vh] overflow-hidden"
          style={{
            transform: mounted ? "scale(1)" : "scale(1.04)",
            transition: "transform 1.6s ease 0.2s",
          }}
        >
          <img
            src={ASSETS.coupleMainPreview}
            alt=""
            className="w-full h-auto object-contain"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            aria-hidden="true"
          />
          <img
            src={ASSETS.coupleMain}
            alt="邵翔与周钰瑶"
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.45s ease",
            }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>

      {/* 新人信息 */}
      <div
        className="relative z-20 px-8 pt-8 pb-6"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 0.9s",
        }}
      >
        <div className="flex items-start justify-between max-w-sm mx-auto">
          {/* 新郎 */}
          <div className="text-center flex-1">
            <p className="font-serif text-[10px] tracking-[0.25em] text-charcoal-200 mb-2">
              新郎
            </p>
            <p className="font-serif text-xl sm:text-2xl text-charcoal-300 tracking-[0.12em] mb-1">
              邵翔
            </p>
            <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-charcoal-200">
              SHAOXIANG
            </p>
            <p
              className="mt-2 text-[13px] italic tracking-wide"
              style={{ fontFamily: '"Cormorant Garamond", serif', color: "#A85D50" }}
            >
              Groom
            </p>
          </div>

          {/* 连接符 */}
          <div className="pt-8 px-2">
            <span
              className="text-lg italic"
              style={{ fontFamily: '"Cormorant Garamond", serif', color: "#A85D50" }}
            >
              &
            </span>
          </div>

          {/* 新娘 */}
          <div className="text-center flex-1">
            <p className="font-serif text-[10px] tracking-[0.25em] text-charcoal-200 mb-2">
              新娘
            </p>
            <p className="font-serif text-xl sm:text-2xl text-charcoal-300 tracking-[0.12em] mb-1">
              周钰瑶
            </p>
            <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-charcoal-200">
              ZHOUYUYAO
            </p>
            <p
              className="mt-2 text-[13px] italic tracking-wide"
              style={{ fontFamily: '"Cormorant Garamond", serif', color: "#A85D50" }}
            >
              Bride
            </p>
          </div>
        </div>
      </div>

      {/* 竖排日期 */}
      <div
        className="pb-10 text-center"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 1.1s",
        }}
      >
        <div
          className="inline-flex flex-col items-center text-charcoal-300"
          style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif' }}
        >
          <span className="text-[26px] sm:text-[30px] leading-none">12</span>
          <span className="text-base sm:text-lg my-1 text-charcoal-200">/</span>
          <span className="text-[26px] sm:text-[30px] leading-none">09</span>
        </div>
      </div>
    </section>
  );
}

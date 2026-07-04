import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { ASSETS } from "@/config/assets";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-24 px-6 overflow-hidden">
      {/* ⑥ 封底背景图 */}
      <SmartImage
        src={ASSETS.footerBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        placeholderClassName="hidden"
      />
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-ivory-100/85" />

      <div className="relative z-10 max-w-md mx-auto text-center">
        <Reveal>
          <div className="ornament mb-10">
            <span className="text-champagne-400">❦</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-art text-charcoal-300 text-3xl font-light tracking-widest mb-4">
            感谢有你
          </h3>
        </Reveal>

        <Reveal delay={250}>
          <div className="font-serif text-charcoal-100 text-sm leading-loose mb-10 space-y-2">
            <p>感谢您一路以来的陪伴与祝福。</p>
            <p>人生许多重要时刻，</p>
            <p>因有人见证，才显得格外郑重。</p>
            <p>这一日，愿与您同喜，</p>
            <p>也愿这份欢喜，被岁月长久珍藏。</p>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="font-display text-champagne-500 text-3xl font-light tracking-wider mb-6">
            S &amp; Z
          </div>
        </Reveal>

        <Reveal delay={450}>
          <p className="font-serif text-charcoal-100 text-xs mb-16">
            邵翔 &amp; 周钰瑶 · 敬邀
          </p>
        </Reveal>

        <Reveal delay={550}>
          <div className="space-y-2 text-charcoal-100 text-xs font-serif">
            <p>
              <span className="text-champagne-500">新郎联系</span> · 邵先生
            </p>
            <p>
              <span className="text-champagne-500">新娘联系</span> · 周女士
            </p>
          </div>
        </Reveal>

        <Reveal delay={700}>
          <button
            onClick={scrollToTop}
            className="mt-12 inline-flex flex-col items-center text-champagne-500 text-xs font-serif"
          >
            <svg
              className="w-5 h-5 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            返回顶部
          </button>
        </Reveal>

        <Reveal delay={850}>
          <p className="mt-16 text-champagne-400/60 text-xs font-display tracking-wider">
            2026.09.12
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-200/50 to-transparent" />
    </footer>
  );
}

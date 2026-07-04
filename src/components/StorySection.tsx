import { useState, useEffect, useCallback } from "react";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { ASSETS } from "@/config/assets";

export default function StorySection() {
  const photos = ASSETS.storyPhotos;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-ivory-50 to-ivory-100">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <p className="font-display text-champagne-500 text-sm tracking-[0.3em] uppercase text-center mb-4">
            Our Story
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-art text-charcoal-300 text-2xl sm:text-3xl font-light tracking-wider text-center mb-3">
            爱情故事
          </h3>
        </Reveal>

        <Reveal delay={250}>
          <div className="font-serif text-charcoal-100 text-sm text-center mb-12 leading-loose">
            <p className="mb-3">每一张照片，都是时光替我们留下的信。</p>
            <p>从初见的心动，到后来的笃定，</p>
            <p>我们慢慢懂得，爱不是一瞬的热烈，</p>
            <p>而是四季更迭里，仍愿与彼此同路。</p>
          </div>
        </Reveal>

        {/* ③ 照片轮播 - 全宽完整展示 */}
        <Reveal delay={350}>
          <div className="relative -mx-6 sm:-mx-12">
            <div className="relative w-full">
              <SmartImage
                key={currentIndex}
                src={photos[currentIndex]}
                alt={`爱情故事 ${currentIndex + 1}`}
                placeholder={`故事 ${currentIndex + 1}`}
                className="w-full h-auto"
                placeholderClassName="w-full aspect-[3/4]"
              />
            </div>

            {/* 左右切换按钮 */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory-100/80 backdrop-blur-sm border border-champagne-200/40 flex items-center justify-center text-champagne-500 hover:bg-champagne-300/20 transition-all"
              aria-label="上一张"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory-100/80 backdrop-blur-sm border border-champagne-200/40 flex items-center justify-center text-champagne-500 hover:bg-champagne-300/20 transition-all"
              aria-label="下一张"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Reveal>

        {/* 指示器 */}
        <Reveal delay={500}>
          <div className="flex justify-center gap-2 mt-8">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-champagne-400"
                    : "w-2 bg-champagne-200/50"
                }`}
                aria-label={`第 ${index + 1} 张`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={650}>
          <p className="font-serif text-charcoal-100 text-xs text-center mt-6 italic">
            {currentIndex + 1} / {photos.length}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

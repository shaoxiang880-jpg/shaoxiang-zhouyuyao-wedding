import Reveal from "./Reveal";

export default function InfoSection() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-cream">
      <div className="max-w-sm mx-auto">
        {/* 标题 */}
        <Reveal>
          <div className="section-title">
            <span className="script">Wedding date</span>
            <span className="cn">· 婚礼日期 ·</span>
          </div>
        </Reveal>

        {/* 日期卡 */}
        <Reveal delay={150}>
          <div className="paper-card p-6 sm:p-8">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {/* 年份 */}
              <div className="text-center">
                <p
                  className="text-sm sm:text-base tracking-[0.1em]"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
                >
                  SEP
                </p>
                <p
                  className="text-sm sm:text-base tracking-[0.1em]"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
                >
                  2026
                </p>
              </div>

              {/* 分隔线 */}
              <div className="w-px h-12 bg-charcoal-200/20" />

              {/* 主日期 */}
              <div className="text-center">
                <p
                  className="text-[44px] sm:text-[56px] leading-none tracking-wide"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#2C2C2C" }}
                >
                  09.12
                </p>
                <p
                  className="text-[10px] sm:text-xs tracking-[0.15em] mt-1"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
                >
                  SEP 12, 2026
                </p>
              </div>

              {/* 分隔线 */}
              <div className="w-px h-12 bg-charcoal-200/20" />

              {/* 星期 */}
              <div className="text-center">
                <p
                  className="text-sm sm:text-base tracking-[0.1em]"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
                >
                  SAT
                </p>
                <p className="font-serif text-xs sm:text-sm text-charcoal-200 tracking-widest">
                  星期六
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 地点 */}
        <Reveal delay={300}>
          <div className="text-center mt-10 space-y-2">
            <p className="font-serif text-base sm:text-lg text-charcoal-300 tracking-wide">
              【天港禧悦 · 宴会中心】
            </p>
            <p className="font-serif text-sm text-charcoal-200">
              海曙丽园南路店
            </p>
            <p className="font-serif text-xs text-charcoal-100">
              浙江省宁波市海曙区丽园南路
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

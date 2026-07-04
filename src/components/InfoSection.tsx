import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { ASSETS } from "@/config/assets";

export default function InfoSection() {
  return (
    <section className="relative py-24 px-6 bg-ivory-50 overflow-hidden">
      {/* ④ 背景装饰图 */}
      <SmartImage
        src={ASSETS.infoBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        placeholderClassName="hidden"
      />
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-50/95 via-ivory-50/90 to-ivory-50/95" />

      <div className="relative z-10 max-w-md mx-auto">
        <Reveal>
          <p className="font-display text-champagne-500 text-sm tracking-[0.3em] uppercase text-center mb-4">
            Wedding Details
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-art text-charcoal-300 text-2xl sm:text-3xl font-light tracking-wider text-center mb-12">
            婚礼详情
          </h3>
        </Reveal>

        <div className="space-y-12">
          <Reveal delay={250}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 mb-6">
                <svg
                  className="w-6 h-6 text-champagne-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="font-serif text-charcoal-300 text-base mb-6 leading-loose">
                良辰已定，佳期将至。
              </p>
              <div className="gold-line w-16 mx-auto my-6" />
              <div className="space-y-3 font-serif text-sm text-charcoal-200 leading-loose">
                <p className="text-champagne-500 text-lg">
                  二〇二六年九月十二日
                </p>
                <p>
                  农历八月初二，星期六
                </p>
                <p className="mt-4">
                  <span className="text-champagne-500">十一时八分</span>，行礼成约
                </p>
                <p>
                  <span className="text-champagne-500">十二时八分</span>，设宴同欢
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="ornament">
              <span className="text-champagne-300">✦</span>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 mb-6">
                <svg
                  className="w-6 h-6 text-champagne-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="font-serif text-charcoal-300 text-lg mb-2">
                天港禧悦 · 宴会中心
              </p>
              <p className="font-serif text-charcoal-100 text-sm mb-1">
                海曙丽园南路店
              </p>
              <p className="font-serif text-charcoal-100 text-xs">
                浙江省宁波市海曙区丽园南路
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

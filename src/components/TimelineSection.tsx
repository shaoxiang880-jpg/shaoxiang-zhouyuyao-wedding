import Reveal from "./Reveal";

const timelineItems = [
  {
    title: "宾客入场",
    en: "Guest admission",
    time: "AM 10:30",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "婚礼仪式",
    en: "Wedding ceremony",
    time: "AM 11:08",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "婚礼午宴",
    en: "Wedding luncheon",
    time: "PM 12:08",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function TimelineSection() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-cream">
      <div className="max-w-sm mx-auto">
        <Reveal>
          <div className="section-title">
            <span className="script">Wedding Process</span>
            <span className="cn">· 婚礼流程 ·</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative flex justify-between items-start">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex-1 text-center relative">
                {/* 标题 */}
                <p className="font-serif text-xs sm:text-sm text-charcoal-300 mb-1">
                  {item.title}
                </p>
                <p
                  className="text-[9px] sm:text-[10px] mb-4"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
                >
                  {item.en}
                </p>

                {/* 图标 */}
                <div className="flex justify-center mb-4 text-charcoal-200">
                  {item.icon}
                </div>

                {/* 时间 */}
                <p
                  className="text-xs sm:text-sm tracking-wider"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#2C2C2C" }}
                >
                  {item.time}
                </p>

                {/* 连接线 */}
                {index < timelineItems.length - 1 && (
                  <div className="absolute top-[86px] left-1/2 w-full h-px bg-charcoal-200/15" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* 餐桌插画装饰 */}
        <Reveal delay={300}>
          <div className="mt-12 flex justify-center text-charcoal-200/40">
            <svg width="240" height="48" viewBox="0 0 240 48" fill="none" stroke="currentColor" strokeWidth="0.8">
              <ellipse cx="120" cy="36" rx="80" ry="8" />
              <path d="M60 36 L60 28" />
              <path d="M180 36 L180 28" />
              <circle cx="90" cy="30" r="5" />
              <circle cx="150" cy="30" r="5" />
              <path d="M120 18 L120 28" />
              <path d="M110 14 Q120 8 130 14" />
              <circle cx="120" cy="18" r="3" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

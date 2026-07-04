import Reveal from "./Reveal";

const tips = [
  "我们希望这是一场能让您感到“有些不一样的”婚礼",
  "期待您提前到场，与我们叙旧合影",
  "合照区准备了 PHOTOBOOTH，欢迎大家互动留念",
  "迎宾区准备了甜品和饮品，供您稍作休息",
  "希望您能享受过程，并在婚礼各个环节多多互动分享",
  "出发前请提前查询天气状况，注意穿衣保暖",
];

const palette = ["#6B4E31", "#C4B6A6", "#FFFFFF", "#E8DCC8"];

export default function TipsSection() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-cream">
      <div className="max-w-sm mx-auto">
        <Reveal>
          <div className="section-title">
            <span className="script">Wedding tips</span>
            <span className="cn">· 婚礼指南 ·</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="space-y-4 text-center">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="font-serif text-[12px] sm:text-[13px] leading-[2] tracking-wide"
                style={{ color: "#6B5E54" }}
              >
                / {tip} /
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 text-center">
            <p className="font-serif text-[11px] text-charcoal-200 mb-4 tracking-wider">
              婚礼主色调为米棕，穿以下颜色更出片
            </p>
            <div className="flex justify-center gap-3">
              {palette.map((color, index) => (
                <span
                  key={index}
                  className="w-6 h-6 rounded-full border border-black/5"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

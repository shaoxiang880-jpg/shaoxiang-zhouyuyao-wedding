import Reveal from "./Reveal";
import { ASSETS } from "@/config/assets";

export default function EnvelopeSection() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-cream overflow-hidden">
      <div className="max-w-sm mx-auto">
        <Reveal>
          <div
            className="relative mx-auto"
            style={{
              transform: "rotate(-2deg)",
            }}
          >
            {/* 信封主体 */}
            <div
              className="relative paper-card p-6 sm:p-8"
              style={{
                background: "#FBF7F0",
                borderRadius: "4px 4px 16px 16px",
              }}
            >
              {/* 信封翻盖装饰 */}
              <div
                className="absolute -top-[1px] left-0 right-0 h-24 overflow-hidden"
                style={{
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-32"
                  style={{
                    background: "linear-gradient(180deg, #EDE8DE 0%, #FBF7F0 100%)",
                    clipPath: "polygon(0 0, 50% 65%, 100% 0)",
                  }}
                />
              </div>

              {/* 照片 */}
              <div className="relative z-10 pt-10">
                <div
                  className="relative overflow-hidden"
                  style={{
                    transform: "rotate(-3deg)",
                  }}
                >
                  <img
                    src={ASSETS.envelopePhoto}
                    alt="爱情故事"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* 文字 */}
              <div className="relative z-10 text-center mt-8">
                <p
                  className="text-2xl sm:text-3xl italic mb-2"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#A85D50" }}
                >
                  Love
                </p>
                <p className="font-serif text-[10px] tracking-[0.3em] text-charcoal-200 uppercase mb-3">
                  INVITATION
                </p>
                <p
                  className="text-xs italic"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
                >
                  A letter addressed to love
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

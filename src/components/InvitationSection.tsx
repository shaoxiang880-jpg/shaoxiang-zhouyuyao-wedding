import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { ASSETS } from "@/config/assets";

export default function InvitationSection() {
  return (
    <section id="invitation" className="py-24 px-6 bg-ivory-100">
      <div className="max-w-lg mx-auto text-center">
        <Reveal>
          <p className="font-display text-champagne-500 text-sm tracking-[0.3em] uppercase mb-6">
            The Wedding Invitation
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h2 className="font-art text-charcoal-300 text-3xl sm:text-4xl font-light tracking-wider mb-10">
            诚挚邀请
          </h2>
        </Reveal>

        <Reveal delay={250}>
          <div className="ornament mb-10">
            <span className="text-champagne-400">❧</span>
          </div>
        </Reveal>

        {/* ② 新人主合照 - 全宽展示 */}
        <Reveal delay={350}>
          <div className="mt-12 mb-16 -mx-6 sm:-mx-12 md:-mx-20">
            <SmartImage
              src={ASSETS.coupleMain}
              alt="新人合照"
              placeholder="新人合照"
              className="w-full h-auto object-cover"
              placeholderClassName="w-full aspect-[3/4]"
            />
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="space-y-6 text-charcoal-200 font-serif leading-loose text-sm sm:text-base">
            <p>谨定于二〇二六年九月十二日，</p>
            <p className="text-champagne-500 text-lg">
              邵翔先生与周钰瑶小姐，
            </p>
            <p>以婚礼为约，以余生为期。</p>
            <p className="text-charcoal-100 text-sm">
              诚邀您拨冗莅临，
            </p>
            <p className="text-charcoal-100 text-sm">
              见证我们把相爱，写进漫长岁月里。
            </p>
          </div>
        </Reveal>

        <Reveal delay={700}>
          <div className="mt-12 space-y-3 text-charcoal-100 font-serif italic text-sm">
            <p className="text-champagne-500">
              愿此后岁月温柔，
            </p>
            <p className="text-champagne-500">
              山河有归处，晨昏有良人，
            </p>
            <p className="text-champagne-500">
              回首是深情，并肩是白头。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

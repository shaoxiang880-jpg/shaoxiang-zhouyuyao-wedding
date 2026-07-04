import Reveal from "./Reveal";

export default function InvitationSection() {
  return (
    <section className="py-20 sm:py-24 px-8 bg-cream">
      <div className="max-w-sm mx-auto text-center">
        <Reveal>
          <div className="space-y-3 font-serif text-charcoal-300 text-[15px] sm:text-base leading-[2.4] tracking-wide">
            <p>诚挚地邀请您参加</p>
            <p className="text-lg sm:text-xl tracking-[0.12em]">我们的婚礼</p>
            <p>期待与您相见，在我们最重要的一天</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="my-8 flex justify-center">
            <span
              className="text-xl italic"
              style={{ fontFamily: '"Cormorant Garamond", serif', color: "#A85D50" }}
            >
              /
            </span>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div
            className="space-y-2 text-[12px] sm:text-[13px] leading-[2] tracking-wide"
            style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
          >
            <p>Sincerely invite you to participate</p>
            <p>Our wedding</p>
            <p>Looking forward to meeting you on</p>
            <p>our most important day</p>
          </div>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-12 flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-charcoal-200/40 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

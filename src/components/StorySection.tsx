import Reveal from "./Reveal";
import { ASSETS } from "@/config/assets";

export default function StorySection() {
  const photos = ASSETS.storyPhotos;

  return (
    <section className="py-16 sm:py-20 bg-cream overflow-hidden">
      {/* 宽幅照片 1 */}
      <Reveal>
        <div className="px-5 sm:px-8 mb-6">
          <img
            src={photos[0]}
            alt="故事 1"
            className="w-full h-auto object-contain"
          />
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="text-center px-8 py-10">
          <p className="font-serif text-charcoal-300 text-base sm:text-lg leading-[2.2] tracking-wide">
            故事的开始
            <br />
            往往始于一场不期而遇的心动
          </p>
          <p
            className="mt-4 text-[11px] sm:text-xs leading-[1.9] tracking-wide"
            style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
          >
            The beginning of a story
            <br />
            often begins with an unexpected heartbeat
          </p>
        </div>
      </Reveal>

      {/* 双列网格 */}
      <Reveal delay={250}>
        <div className="grid grid-cols-2 gap-2 px-5 sm:px-8 mb-6">
          <img
            src={photos[1]}
            alt="故事 2"
            className="w-full aspect-[3/4] object-cover"
          />
          <img
            src={photos[2]}
            alt="故事 3"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={350}>
        <div className="text-center px-8 py-10">
          <p className="font-serif text-charcoal-300 text-base sm:text-lg leading-[2.2] tracking-wide">
            余生的漫漫
            <br />
            皆为此后三餐四季温柔的相逢
          </p>
          <p
            className="mt-4 text-[11px] sm:text-xs leading-[1.9] tracking-wide"
            style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
          >
            My remaining long years
            <br />
            all for gentle seasons' encounters
          </p>
        </div>
      </Reveal>

      {/* 四宫格 */}
      <Reveal delay={450}>
        <div className="grid grid-cols-2 gap-1.5 px-5 sm:px-8 mb-6">
          <img
            src={photos[3]}
            alt="故事 4"
            className="w-full aspect-[3/4] object-cover"
          />
          <img
            src={photos[4]}
            alt="故事 5"
            className="w-full aspect-[3/4] object-cover"
          />
          <img
            src={photos[5]}
            alt="故事 6"
            className="w-full aspect-[3/4] object-cover"
          />
          <img
            src={photos[6]}
            alt="故事 7"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={550}>
        <div className="text-center px-8 py-8">
          <p
            className="text-sm sm:text-base leading-[2] tracking-wide"
            style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
          >
            Love is not just a feeling,
            <br />
            but a promise we choose to keep
            <br />
            every single day.
          </p>
        </div>
      </Reveal>

      {/* 宽幅照片 2 */}
      <Reveal delay={650}>
        <div className="px-5 sm:px-8 mb-6">
          <img
            src={photos[7]}
            alt="故事 8"
            className="w-full aspect-[16/9] object-cover"
          />
        </div>
      </Reveal>

      {/* 宝丽来照片 */}
      <Reveal delay={750}>
        <div className="flex justify-center px-6 py-6">
          <div
            className="bg-white p-2 pb-8 shadow-md"
            style={{ transform: "rotate(-2deg)", maxWidth: "260px" }}
          >
            <img
              src="/assets/images/story/story-0-polaroid.jpg"
              alt="Polaroid"
              className="w-full h-auto object-contain"
            />
            <p
              className="text-center text-[11px] mt-3 tracking-wider"
              style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
            >
              S & Z
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

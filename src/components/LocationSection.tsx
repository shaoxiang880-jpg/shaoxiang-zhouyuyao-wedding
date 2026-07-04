import Reveal from "./Reveal";

export default function LocationSection() {
  const openAmap = () => {
    const url = `https://uri.amap.com/marker?position=121.5392,29.8633&name=天港禧悦宴会中心(海曙丽园南路店)&src=wedding-invitation&coordinate=gaode&callnative=1`;
    window.open(url, "_blank");
  };

  const openBaidu = () => {
    const url = `https://api.map.baidu.com/marker?location=29.8633,121.5392&title=天港禧悦宴会中心&content=海曙丽园南路店&output=html&src=wedding-invitation`;
    window.open(url, "_blank");
  };

  return (
    <section id="location" className="py-12 sm:py-16 px-6 bg-cream">
      <div className="max-w-sm mx-auto text-center">
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openAmap}
              className="px-8 py-3 rounded-full text-xs tracking-[0.2em] text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#6B4E31" }}
            >
              高德导航
            </button>
            <button
              onClick={openBaidu}
              className="px-8 py-3 rounded-full text-xs tracking-[0.2em] transition-all duration-300 hover:bg-charcoal-300 hover:text-white"
              style={{ backgroundColor: "transparent", color: "#6B4E31", border: "1px solid #6B4E31" }}
            >
              百度导航
            </button>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-serif text-[11px] text-charcoal-100 mt-5">
            点击上方按钮，一键导航至婚礼现场
          </p>
        </Reveal>
      </div>
    </section>
  );
}

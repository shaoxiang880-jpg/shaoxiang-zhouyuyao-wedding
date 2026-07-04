import Reveal from "./Reveal";

export default function LocationSection() {
  const address = "浙江省宁波市海曙区丽园南路 天港禧悦宴会中心";

  const openAmap = () => {
    const url = `https://uri.amap.com/marker?position=121.5392,29.8633&name=天港禧悦宴会中心(海曙丽园南路店)&src=wedding-invitation&coordinate=gaode&callnative=1`;
    window.open(url, "_blank");
  };

  const openBaidu = () => {
    const url = `https://api.map.baidu.com/marker?location=29.8633,121.5392&title=天港禧悦宴会中心&content=海曙丽园南路店&output=html&src=wedding-invitation`;
    window.open(url, "_blank");
  };

  return (
    <section id="location" className="py-24 px-6 bg-ivory-100">
      <div className="max-w-md mx-auto">
        <Reveal>
          <p className="font-display text-champagne-400 text-sm tracking-[0.3em] uppercase text-center mb-4">
            Location
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-art text-charcoal-300 text-2xl sm:text-3xl font-light tracking-wider text-center mb-10">
            婚礼地点
          </h3>
        </Reveal>

        <Reveal delay={250}>
          <div className="relative bg-ivory-200/50 border border-champagne-200/40 p-8 mb-8">
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-l border-t border-champagne-300" />
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-r border-t border-champagne-300" />
            <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-l border-b border-champagne-300" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-r border-b border-champagne-300" />

            <div className="text-center space-y-4">
              <h4 className="font-serif text-charcoal-300 text-lg">
                天港禧悦 · 宴会中心
              </h4>
              <p className="font-serif text-charcoal-100 text-sm leading-relaxed">
                海曙丽园南路店
              </p>
              <div className="gold-line w-12 mx-auto" />
              <p className="font-serif text-charcoal-100 text-xs leading-relaxed">
                {address}
              </p>
              <p className="font-serif text-charcoal-100 text-sm italic leading-loose pt-4">
                盼您循光而来，
              </p>
              <p className="font-serif text-charcoal-100 text-sm italic leading-loose">
                共赴这一场关于爱与团圆的约。
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openAmap}
              className="btn-gold btn-gold-filled flex-1 max-w-[160px] mx-auto"
            >
              高德导航
            </button>
            <button
              onClick={openBaidu}
              className="btn-gold flex-1 max-w-[160px] mx-auto"
            >
              百度导航
            </button>
          </div>
        </Reveal>

        <Reveal delay={550}>
          <p className="text-center text-charcoal-100 text-xs font-serif mt-6">
            点击上方按钮，即可一键导航至婚礼现场
          </p>
        </Reveal>
      </div>
    </section>
  );
}

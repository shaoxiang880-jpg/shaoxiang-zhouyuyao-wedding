import { useState, useEffect } from "react";
import Reveal from "./Reveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-09-12T11:28:00+08:00").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = weddingDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "天", value: timeLeft.days },
    { label: "时", value: timeLeft.hours },
    { label: "分", value: timeLeft.minutes },
    { label: "秒", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-ivory-100 to-ivory-50">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="font-display text-champagne-400 text-sm tracking-[0.3em] uppercase mb-4">
            Countdown
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-serif text-charcoal-300 text-xl font-light tracking-wider mb-10">
            距离婚礼还有
          </h3>
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {timeBlocks.map((block, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-full aspect-square border border-champagne-200/60 flex items-center justify-center bg-ivory-100/80">
                    <span className="font-display text-champagne-500 text-2xl sm:text-3xl font-light">
                      {String(block.value).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-champagne-300/50" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-champagne-300/50" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-champagne-300/50" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-champagne-300/50" />
                </div>
                <p className="font-serif text-charcoal-100 text-xs mt-3 tracking-widest">
                  {block.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

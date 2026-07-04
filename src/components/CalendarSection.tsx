import Reveal from "./Reveal";

export default function CalendarSection() {
  const addToCalendar = () => {
    const startDate = new Date("2026-09-12T11:00:00+08:00");
    const endDate = new Date("2026-09-12T14:00:00+08:00");

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Wedding Invitation//CN",
      "BEGIN:VEVENT",
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      "SUMMARY:邵翔 & 周钰瑶 婚礼",
      "DESCRIPTION:诚邀您参加邵翔先生与周钰瑶小姐的婚礼",
      "LOCATION:天港禧悦宴会中心（海曙丽园南路店）",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "邵翔&周钰瑶-婚礼.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-ivory-100 to-ivory-50">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <div className="inline-block p-6 border border-champagne-200/50 bg-ivory-100 mb-6">
            <svg
              className="w-8 h-8 text-champagne-400 mx-auto mb-3"
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
            <p className="font-serif text-charcoal-300 text-base">
              2026年9月12日
            </p>
            <p className="font-serif text-charcoal-100 text-xs mt-1">
              星期六 · 11:00
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h3 className="font-serif text-charcoal-300 text-lg font-light tracking-wider mb-3">
            添加日程提醒
          </h3>
        </Reveal>

        <Reveal delay={350}>
          <p className="font-serif text-charcoal-100 text-sm mb-6">
            不错过我们的重要时刻
          </p>
        </Reveal>

        <Reveal delay={500}>
          <button onClick={addToCalendar} className="btn-gold">
            添加到日历
          </button>
        </Reveal>
      </div>
    </section>
  );
}

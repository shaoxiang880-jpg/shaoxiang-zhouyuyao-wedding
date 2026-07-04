import { useState } from "react";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { ASSETS } from "@/config/assets";

interface RSVPFormData {
  name: string;
  attend: string;
  guests: string;
  message: string;
  phone: string;
}

export default function RSVPSection() {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: "",
    attend: "yes",
    guests: "1",
    message: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("wedding-rsvp") || "[]");
      existing.push(savedData);
      localStorage.setItem("wedding-rsvp", JSON.stringify(existing));
    } catch (err) {
      console.error("RSVP save error:", err);
    }

    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 px-6 bg-ivory-50">
      <div className="max-w-md mx-auto">
        <Reveal>
          <p className="font-display text-champagne-400 text-sm tracking-[0.3em] uppercase text-center mb-4">
            RSVP
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-serif text-charcoal-300 text-xl font-light tracking-wider text-center mb-3">
            回执
          </h3>
        </Reveal>

        <Reveal delay={250}>
          <p className="font-serif text-charcoal-100 text-sm text-center mb-12">
            敬请于 2026年8月30日 前回复
          </p>
        </Reveal>

        {/* ⑤ RSVP装饰小图 */}
        <Reveal delay={300}>
          <div className="flex justify-center mb-10">
            <SmartImage
              src={ASSETS.rsvpDecoration}
              alt="装饰"
              placeholder="装饰图"
              className="w-32 h-20 object-cover"
              placeholderClassName="w-32 h-20"
            />
          </div>
        </Reveal>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <Reveal delay={350}>
            <div>
              <label className="block font-serif text-charcoal-200 text-sm mb-2">
                您的姓名 <span className="text-champagne-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-underline"
                placeholder="请输入您的姓名"
              />
            </div>
            </Reveal>

            <Reveal delay={450}>
            <div>
              <label className="block font-serif text-charcoal-200 text-sm mb-4">
                是否出席 <span className="text-champagne-400">*</span>
              </label>
              <div className="flex gap-4">
                {[
                  { value: "yes", label: "欣然出席" },
                  { value: "no", label: "遗憾缺席" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex-1 py-3 text-center cursor-pointer border transition-all duration-300 font-serif text-sm ${
                      formData.attend === option.value
                        ? "border-champagne-300 bg-champagne-300/10 text-champagne-500"
                        : "border-champagne-200/50 text-charcoal-100 hover:border-champagne-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attend"
                      value={option.value}
                      checked={formData.attend === option.value}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
            </Reveal>

            <Reveal delay={550}>
            <div>
              <label className="block font-serif text-charcoal-200 text-sm mb-2">
                出席人数
              </label>
              <div className="relative">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-underline pr-8 cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} 人
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            </Reveal>

            <Reveal delay={650}>
            <div>
              <label className="block font-serif text-charcoal-200 text-sm mb-2">
                联系电话
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-underline"
                placeholder="方便我们与您联系"
              />
            </div>
            </Reveal>

            <Reveal delay={750}>
            <div>
              <label className="block font-serif text-charcoal-200 text-sm mb-2">
                祝福寄语
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="input-underline resize-none"
                placeholder="写下您对新人的祝福..."
              />
            </div>
            </Reveal>

            <Reveal delay={850}>
            <div className="text-center pt-4">
              <button type="submit" className="btn-gold btn-gold-filled px-16">
                提交回执
              </button>
            </div>
            </Reveal>
          </form>
        ) : (
          <Reveal>
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-champagne-300 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-champagne-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
              <h4 className="font-serif text-charcoal-300 text-lg mb-3">
                回执已收到
              </h4>
              <p className="font-serif text-charcoal-100 text-sm">
                感谢您的回复，我们期待与您相见
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

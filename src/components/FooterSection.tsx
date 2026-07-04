import { useState } from "react";
import Reveal from "./Reveal";
import { ASSETS } from "@/config/assets";

export default function FooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    count: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`感谢 ${formData.name} 的回复！\n出席：${formData.attending === "yes" ? "是" : "否"}\n人数：${formData.count}\n留言：${formData.message}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-cream pb-12">
      {/* 结尾照片 + 心形卡片 */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-sm mx-auto">
          <Reveal>
            <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 items-center mb-10">
              <img
                src={ASSETS.closingPhoto}
                alt="爱的启程"
                className="w-full h-auto object-contain"
              />
              <div
                className="paper-card p-5 flex items-center justify-center"
                style={{
                  borderRadius: "50% 50% 48% 52% / 42% 42% 58% 58%",
                  aspectRatio: "1 / 1.05",
                }}
              >
                <p
                  className="text-[10px] sm:text-[11px] leading-[1.9] text-center px-2"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
                >
                  This is not a day for asking questions,
                  <br />
                  but a day for giving thanks.
                  <br />
                  For the love that brought us here,
                  <br />
                  and the love that will carry us forward.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="text-center space-y-3 mb-4">
              <p className="font-serif text-charcoal-300 text-base sm:text-lg leading-[2.2] tracking-wide">
                邀请最挚爱的您来一场关于爱的旅行
                <br />
                见证我们 爱的启程
              </p>
              <p
                className="text-[11px] sm:text-xs leading-[1.9] tracking-wide"
                style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
              >
                Thank you my friend for traveling afar
                <br />
                to witness the moment of our lifetime.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="text-center mt-8">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-3 border"
                style={{ borderColor: "#A85D50", color: "#A85D50" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <p
                className="text-lg italic tracking-wide"
                style={{ fontFamily: '"Cormorant Garamond", serif', color: "#A85D50" }}
              >
                Shao Xiang & Zhou Yu Yao
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RSVP 表单 */}
      <section className="px-6">
        <div className="max-w-sm mx-auto">
          <Reveal>
            <div className="section-title">
              <span className="script">RSVP</span>
              <span className="cn">· 回执 ·</span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-serif text-xs text-charcoal-300 mb-2">
                  1. 姓名 <span className="text-wine">*</span>
                  <span className="en-sub ml-2">Your full name</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-[#D6CFC5] font-serif text-charcoal-300 outline-none focus:border-[#A85D50] transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label className="block font-serif text-xs text-charcoal-300 mb-3">
                  2. 您是否有空参加我们的婚礼？ <span className="text-wine">*</span>
                  <span className="en-sub ml-2">Are you available?</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 font-serif text-sm text-charcoal-300 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === "yes"}
                      onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                      className="accent-[#A85D50]"
                    />
                    是 Yes
                  </label>
                  <label className="flex items-center gap-2 font-serif text-sm text-charcoal-300 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === "no"}
                      onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                      className="accent-[#A85D50]"
                    />
                    否 No
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-serif text-xs text-charcoal-300 mb-2">
                  3. 出席人数 <span className="text-wine">*</span>
                  <span className="en-sub ml-2">Attendance</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.count}
                  onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-[#D6CFC5] font-serif text-charcoal-300 outline-none focus:border-[#A85D50] transition-colors"
                  placeholder="例如：2人"
                />
              </div>

              <div>
                <label className="block font-serif text-xs text-charcoal-300 mb-2">
                  4. 欢迎留言 <span className="text-wine">*</span>
                  <span className="en-sub ml-2">Message blessings</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-[#D6CFC5] font-serif text-charcoal-300 outline-none focus:border-[#A85D50] transition-colors resize-none"
                  placeholder="写下您对我们的祝福..."
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="px-12 py-3 rounded-full text-sm tracking-[0.15em] text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#6B4E31" }}
                >
                  提交 submit
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 底部返回顶部 */}
      <div className="mt-16 text-center">
        <button
          onClick={scrollToTop}
          className="inline-flex flex-col items-center text-charcoal-200 text-[10px] font-serif tracking-widest hover:text-[#A85D50] transition-colors"
        >
          <svg className="w-4 h-4 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          返回顶部
        </button>
        <p
          className="mt-8 text-[10px] tracking-[0.15em]"
          style={{ fontFamily: '"Cormorant Garamond", serif', color: "#6B5E54" }}
        >
          2026.09.12
        </p>
      </div>
    </footer>
  );
}

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ivory: {
          50: "#FDFBF7",
          100: "#F8F5F0",
          200: "#F0EBE1",
        },
        champagne: {
          50: "#F5ECD9",
          100: "#E8D9B8",
          200: "#DCC5A0",
          300: "#C9A96E",
          400: "#B8956D",
          500: "#A07D4E",
        },
        charcoal: {
          100: "#6B6B6B",
          200: "#4A4A4A",
          300: "#2C2C2C",
        },
        rose: {
          dust: "#D4B5A8",
        },
      },
      fontFamily: {
        serif: [
          '"Noto Serif SC"',
          '"Source Han Serif SC"',
          '"Songti SC"',
          "SimSun",
          "serif",
        ],
        display: [
          '"Ma Shan Zheng"',
          '"Long Cang"',
          '"Noto Serif SC"',
          "Georgia",
          "serif",
        ],
        art: [
          '"Ma Shan Zheng"',
          '"Long Cang"',
          "serif",
        ],
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "slide-down": "slideDown 0.8s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

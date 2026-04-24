import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#00d4ff",
          "blue-dim": "#0099cc",
          "blue-glow": "rgba(0, 212, 255, 0.15)",
          orange: "#ff6b2b",
          "orange-dim": "#cc4400",
          "orange-glow": "rgba(255, 107, 43, 0.15)",
        },
        surface: {
          900: "#050508",
          800: "#0a0a10",
          700: "#10101a",
          600: "#1a1a2e",
          500: "#24243a",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out",
        "fade-in": "fade-in 1s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

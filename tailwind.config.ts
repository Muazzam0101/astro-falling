import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-container": "#ff5e00",
        "primary": "#a63b00",
        "on-primary": "#ffffff",
        "on-primary-container": "#531900",
        surface: "#fff8f6",
        "on-surface": "#271812",
        "surface-container": "#ffe9e2",
        "surface-container-high": "#ffe2d8",
        "surface-container-highest": "#f9dcd2",
        "surface-variant": "#f9dcd2",
        "on-surface-variant": "#5b4137",
        outline: "#8f7065",
        "outline-variant": "#e4bfb1",
        secondary: "#5e5e5e",
        "on-secondary": "#ffffff",
        "secondary-container": "#e2e2e2",
        tertiary: "#5d5f5f",
        error: "#ba1a1a",
        "on-error": "#ffffff",
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
      fontFamily: {
        epilogue: ["var(--font-epilogue)", "Epilogue", "sans-serif"],
        display: ["var(--font-epilogue)", "Epilogue", "sans-serif"],
      },
      fontSize: {
        "display": ["80px", { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "900" }],
        "headline-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-md": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "800" }],
        "body-lg": ["20px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],
        "label-bold": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "700" }],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

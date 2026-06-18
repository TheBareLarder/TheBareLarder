import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Near-black warm ink — primary text, dark sections, buttons */
        ink: {
          DEFAULT: "#1A1A18",
          deep: "#111110",
          mid: "#2A2520",
          muted: "#6B6158",
          pale: "#A89E95",
        },
        /** Kraft paper — hero background, packaging tone */
        kraft: {
          DEFAULT: "#EDE1C1",
          warm: "#F0E8D0",
          light: "#F8F4EC",
          border: "#C8BFA5",
        },
        /** Warm off-white — body sections, cards */
        cream: {
          DEFAULT: "#FEFCF7",
          warm: "#FAF7F0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "75rem", // 1200px
      },
      boxShadow: {
        stamp: "8px 8px 0 rgba(26,26,24,0.12)",
        "stamp-sm": "4px 4px 0 rgba(26,26,24,0.09)",
      },
    },
  },
  plugins: [],
};

export default config;

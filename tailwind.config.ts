import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Deep hunter green — primary brand, headings, buttons, dark sections */
        forest: {
          DEFAULT: "#1B3A28",
          deep: "#0F2318",
          mid: "#2D5040",
          light: "#4A7A5E",
          pale: "#C8DDD1",
          mist: "#E8F3EC",
        },
        /** Warm amber/gold — premium accent, badges, hover highlights */
        honey: {
          DEFAULT: "#C89B2A",
          deep: "#9E7B1C",
          light: "#DDB84A",
          pale: "#F5E8C0",
          glow: "#FBF6E8",
        },
        /** Warm off-white surfaces — backgrounds, section bands */
        stone: {
          DEFAULT: "#FAFAF6",
          warm: "#F4EFE6",
          soft: "#EDE7DB",
          mid: "#E0D9CE",
          border: "#CEC6B8",
        },
        /** Terracotta — appetite accent, secondary CTAs */
        clay: {
          DEFAULT: "#C4522B",
          soft: "#E07A54",
          deep: "#A0431F",
          pale: "#FAEDE7",
          glow: "#FBF2EE",
        },
        /** Warm charcoal — body copy */
        ink: {
          DEFAULT: "#252220",
          soft: "#3D3935",
          muted: "#6B6560",
          pale: "#A8A19A",
        },
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        lift: "0 18px 50px -24px rgba(15, 35, 24, 0.22)",
        card: "0 4px 24px -6px rgba(15, 35, 24, 0.08)",
        "card-hover": "0 20px 48px -12px rgba(15, 35, 24, 0.15)",
        float: "0 1px 0 rgba(15, 35, 24, 0.05), 0 24px 60px -28px rgba(15, 35, 24, 0.10)",
        "float-hover": "0 1px 0 rgba(15, 35, 24, 0.07), 0 32px 70px -28px rgba(15, 35, 24, 0.17)",
        glow: "0 0 30px rgba(200, 155, 42, 0.22), 0 4px 16px rgba(200, 155, 42, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;

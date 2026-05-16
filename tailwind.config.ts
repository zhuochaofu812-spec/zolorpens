import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        champagne: "#d7b56d",
        antique: "#a57b33",
        graphite: "#171717",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 30px 100px rgba(215,181,109,0.22)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.14), 0 24px 80px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(120deg, #7a5520 0%, #f4d995 35%, #9a6d26 55%, #fff3c9 70%, #6c4818 100%)",
        "radial-gold": "radial-gradient(circle at 50% 20%, rgba(215,181,109,0.34), transparent 35%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(-1deg)" },
          "50%": { transform: "translate3d(0, -22px, 0) rotate(1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-220% 0" },
          "100%": { backgroundPosition: "220% 0" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(26px)", filter: "blur(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        orb: {
          "0%, 100%": { transform: "translate(-12%, 10%) scale(1)" },
          "50%": { transform: "translate(10%, -8%) scale(1.12)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 4.5s linear infinite",
        reveal: "reveal 0.9s ease-out both",
        orb: "orb 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

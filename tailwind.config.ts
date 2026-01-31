import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rojeh: {
          red: "#d70025",
          orange: "#FFB347",
          blue: "#7EC8E3",
          cream: "#FFF9F0",
          pink: "#FFE5EC",
          charcoal: "#2D2D2D",
        },
      },
      fontFamily: {
        heading: ["var(--font-fredoka)", "Fredoka One", "sans-serif"],
        body: ["var(--font-nunito)", "Nunito", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(215, 0, 37, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(215, 0, 37, 0.6)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

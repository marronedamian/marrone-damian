import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D53F4",
        secondary: "#242424",
        grayx: "#797979",
        lightgray: "#F4F5F9"
      },
      fontFamily: {
        inter: ["var(--font-inter)"]
      },
      boxShadow: {
        neon: "0 0 20px rgba(109,83,244,0.6)",
        soft: "0 10px 40px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
} satisfies Config;
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-6px)" },
          "40%": { transform: "translateX(6px)" },
          "60%": { transform: "translateX(-6px)" },
          "80%": { transform: "translateX(6px)" },
        },
        pulseRotate: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-25deg)" },
          "20%": { transform: "rotate(25deg)" },
          "30%": { transform: "rotate(-25deg)" },
          "40%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake 0.6s ease-in-out infinite",
        pulseRotate: "pulseRotate 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

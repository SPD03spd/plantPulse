/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-green": "#2fb407",
      },
      keyframes: {
        slightShake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-3px)" } /* Increased shake */,
          "50%": { transform: "translateX(3px)" },
          "75%": { transform: "translateX(-2px)" },
        },
      },
      animation: {
        slightShake: "slightShake 0.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

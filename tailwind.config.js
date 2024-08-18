/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        ours: {
          primary: "#03AED2",
          gray: "#4B515F",
          yellow: "#D2D204",
          orange: "#D27103",
          pink: "#D203AC",
          green: "#45D203",
        },
      },
    },
  },
  plugins: [],
};
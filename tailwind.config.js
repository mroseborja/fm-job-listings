/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["League Spartan", "sans-serif"],
      },
    },
    colors: {
      primary: "hsl(180 29% 50%)",
      secondary: "hsl(180, 14% 20%)",
      neutral: "#ffffff",
      cyan: {
        100: "hsl(180 52% 96%)",
        200: "hsl(180 31% 95%)",
        300: "hsl(180 8% 52%)",
      },
    },
  },
  plugins: [],
};

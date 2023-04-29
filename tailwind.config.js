/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app-grid": "1fr 2.5fr 1fr",
      },
    },
  },
  plugins: [],
};


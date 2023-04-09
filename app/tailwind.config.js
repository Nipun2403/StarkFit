/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#F2F2F2",
        "secondary-100": "#8758FF",
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#f3f3f3",
        "custom-black": "#000000",
      },
    },
  },
  plugins: [],
};

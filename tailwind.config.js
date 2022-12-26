/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [{ pattern: /bg-(red|emerald)-(200|300)/ }],
  theme: {
    extend: {},
  },
  plugins: [],
};

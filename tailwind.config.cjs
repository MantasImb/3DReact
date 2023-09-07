/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "main": "#100720",
        // "secondary": "#31087B",
        // "tertiary": "#FA2FB5",
        // "extra": "#FFC23C",
        "main": "#000000",
        "secondary": "#FFFFFF",
        "tertiary": "#a7a6ba",
        "extra": "#a5a3bd",
      },
      fontFamily: {
        "montez": ["montez"],
        "space-mono": ["space-mono"],
      },
    },
  },
  plugins: [],
}

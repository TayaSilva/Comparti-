/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        general: "#F1F5F9",
        brand: {
          navy: "#12304A",
          dark: "#0B2239",
          orange: "#F97316",
          "orange-light": "#FFF1E8",
          green: "#22A06B",
          "green-light": "#E8F7EF",
        },
      },
    },
  },
  plugins: [],
};

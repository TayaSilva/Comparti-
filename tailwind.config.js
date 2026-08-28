/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        general: "#FEFEFE",
        brand: {
          navy: "#12304A",
          dark: "#0B2239",
          textosP: "#0B2B66",
          azulS: "#30467B", 
          orange: "#F97316",
          azulfundos: "#EAF2FD",
          "orange-light": "#FFF1E8",
          green: "#22A06B",
          "green-light": "#E8F7EF",
        },
      },
      fontFamily: {
        nunito: ["NunitoSans_400Regular"],
        "nunito-semibold": ["NunitoSans_600SemiBold"],
        "nunito-bold": ["NunitoSans_700Bold"],
      },
    },
  },
  plugins: [],
};

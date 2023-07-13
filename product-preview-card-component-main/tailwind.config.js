/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cream-bg": "#F2EAE2",
        "aurometal-saurus": "#6C7289",
        gunmetal: "#1C232B",
        "deep-aquamarine": "#3D8168",
        "deep-aquamarine-hover": "#1A4032",
      },

      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      screens: {
        lg: "1440px",
      },
    },
  },
  plugins: [],
};

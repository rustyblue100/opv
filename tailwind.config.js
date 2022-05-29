module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "2md": "850px",
      // => @media (min-width: 850px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "opv-pink-100": "#f8eded",
        "opv-pink-500": "#FFEDED",
        "opv-pink-900": "#dd7b7b",
        white: "#feffff",
      },

      keyframes: {
        firewoks: {
          "0%": { opacity: 0.7 },
          "25%": { opacity: 0 },
          "50%": { opacity: 0.7 },
          "75%": { opacity: 0 },
          "100%": { opacity: 0.7 },
        },
        shake: {
          "0%": { transform: "skewX(-2deg)" },
          "1%": { transform: "skewX(2deg)" },
          "2%": { transform: "skewX(-2deg)" },
          "3%": { transform: "skewX(2deg)" },
          "4%": { transform: "skewX(-2deg)" },
          "100%": { transform: "skewX(0deg)" },
        },
      },
    },
  },

  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "opv-pink-500": "#FFEDED",
        "opv-pink-900": "#dd7b7b",
        white: "#feffff",
      },

      keyframes: {
        firewoks: {
          "0%": { opacity: 1 },
          "25%": { opacity: 0 },
          "50%": { opacity: 1 },
          "75%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shake: {
          "0%": { transform: "skewX(-2deg)" },
          "1%": { transform: "skewX(2deg)" },
          "2%": { transform: "skewX(-2deg)" },
          "3%": { transform: "skewX(2deg)" },
          "4%": { transform: "skewX(-2deg)" },
          "100%": { transform: "skewX(0deg)" },
        },
        glitch1: {
          "0%": {
            transform: "none",
            opacity: 1,
          },
          "7%": {
            transform: "skew(-0.5deg, -0.9deg)",
            opacity: 0.75,
          },
          "10%": {
            transform: "none",
            opacity: 1,
          },
          "27%": {
            transform: "none",
            opacity: 1,
          },
          "30%": {
            transform: "skew(0.8deg, -0.1deg)",
            opacity: 0.75,
          },
          "35%": {
            transform: "none",
            opacity: 1,
          },
          "52%": {
            transform: "none",
            opacity: 1,
          },
          "55%": {
            transform: "skew(-1deg, 0.2deg)",
            opacity: 0.75,
          },
          "50%": {
            transform: "none",
            opacity: 1,
          },
          "72%": {
            transform: "none",
            opacity: 1,
          },
          "75%": {
            transform: "skew(0.4deg, 1deg)",
            opacity: 0.75,
          },
          "80%": {
            transform: "none",
            opacity: 1,
          },
          " 100%": {
            transform: "none",
            opacity: 1,
          },
        },
      },
    },
  },

  plugins: [],
};

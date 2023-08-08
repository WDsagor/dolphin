/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FF5733",
          secondary: "#96f28c",
          accent: "#ffd8a5",
          neutral: "#2E3238",
          "base-100": "#ffffff",
          info: "#21B5DE",
          success: "#4ED491",
          warning: "#F68813",
          error: "#F12230",
          // backgroundImage: {
          //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          // },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

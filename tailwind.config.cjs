/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/banner.png')",
        main: "url('/Background.jpg')",
        about: "url('/aboutpage-bg.png')",
        services: "url('/servicespage-bg.jpg')",
        contact: "url('/contactpage-bg.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"], // Extra Bold for headings
      },
      colors: {
        // Switchup Electrical Brand Colors
        primary: {
          100: "#FF6B47", // Light Orange
          200: "#FF5722", // Brand Orange
          300: "#1A1A1A", // Dark Background
          400: "#2A2A2A", // Medium Dark
        },
        secondary: {
          100: "#BCB4AF", // Light Gray
          200: "#938A83", // Medium Gray
          300: "#6B6660", // Dark Gray
          400: "#4D413E", // Darkest Gray
        },
        text: {
          primary: "#1A1A1A", // Dark text
          secondary: "#4D413E", // Gray text
          light: "#938A83", // Light gray text
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};

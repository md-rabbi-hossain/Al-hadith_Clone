const tailwindcss = require("tailwindcss");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "rgb(43, 158, 118)",
        custombg: "rgb(242 244 246)",
      },
      screens: {
        xs: "480px", // Extra small screens
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // Extra extra large screens
        xxl: "1920px", // New: Extra extra extra large screens
      },
    },
  },
  plugins: [],
};

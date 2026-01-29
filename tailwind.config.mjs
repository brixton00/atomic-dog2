/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D6A4F",
          light: "#81B29A",
        },
        secondary: {
          DEFAULT: "#E07A5F",
          hover: "#C85D42",
        },
        accent: "#F2CC8F",
        neutral: {
          bg: "#F4F1DE",
          text: "#3D405B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;

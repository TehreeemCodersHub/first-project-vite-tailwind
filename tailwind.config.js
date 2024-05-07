/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "370px",
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 960px) { ... }

        lg: "992px",
        // => @media (min-width: 1440px) { ... }
        xl: "1200px",

        xxl: "1400px",
      },

      colors: {
        primaryColor: "#ee3799",
        secondaryColor: "#343255",
        navbarColor: "#FAFAFA",
        darkBackground: "#F4F6F8",
        lightBackground: "#F6F7FC",
        textColor: "#3A4A5A",
      },
    },
  },
  plugins: [],
};

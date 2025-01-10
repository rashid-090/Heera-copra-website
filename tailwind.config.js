/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "250px",
      sm: "380px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1500px",
    },

    extend: {
      colors: {
        mainclr: "#1e1f21",
        mainhvr: "#ee1c26",
      },
      fontFamily: {
        // light: ["poppins-light", "sans-serif"],
        // regular: ["poppins-regular", "sans-serif"],
        // medium: ["poppins-medium", "sans-serif"],
        // semibold: ["poppins-semibold", "sans-serif"],
        // bold: ["poppins-bold", "sans-serif"],
        // extrabold: ["poppins-extrabold", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": "url('./assets/images/heera-bg.webp')",
      },
    },
  },
  plugins: [],
};

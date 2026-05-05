// tailwind.config.js
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",   // Blue
        secondary: "#9333ea", // Purple
        accent: "#f59e0b"     // Amber
      },
      spacing: {
        72: "18rem",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.1)"
      }
    },
  },
  plugins: [],
};

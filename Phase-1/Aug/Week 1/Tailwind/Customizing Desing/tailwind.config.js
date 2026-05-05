/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // hum root me hi HTML rakhenge
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",   // dark blue
        secondary: "#9333EA", // purple
        accent: "#F59E0B",    // amber
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


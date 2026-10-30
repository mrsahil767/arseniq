/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arseniq: {
          primary: "#0B0F0C",    // Main background
          secondary: "#111713",  // Section background
          card: "#1B211C",       // Card background
          olive: "#78865A",      // Olive accent
          lightOlive: "#C5D0A1", // Light olive
          text: "#E6E9DF",       // Primary text
          muted: "#9BA38F",      // Secondary text
          border: "#343D33"      // Borders
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0d0f12',      // Deep slate/black background
          card: '#16191e',    // Dark grey card background
          accent: '#ff3131',  // Premium sport red accent color
          accentHover: '#e62020', // Hover state red
          muted: '#8f9cae',   // Secondary text color
          border: '#2a2f37',  // Thin dark border lines
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'accent-glow': '0 0 20px rgba(255, 49, 49, 0.25)',
        'accent-glow-strong': '0 0 35px rgba(255, 49, 49, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

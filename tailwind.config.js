/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#228B22',          // Forest green
        secondary: '#98FC66',        // Light green for stats
        navBackground: '#1C6F1C',    // Darker shade for the navbar
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(90deg, #228B22, #98FC66)',  // Main gradient background
      },
    },
  },
  plugins: [],
};

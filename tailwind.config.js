/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1E1E1E',
        blue: '#6EABCE',
        blackv2: 'rgba(30,30,30,0.6)',
        whitev2: 'rgba(255,255,255,0.5)',
        red: '#B73F3F',
      },
      screens: {
        'sm': '640px',   // Small devices (mobile)
        'md': '768px',   // Medium devices (tablet)
        'lg': '1024px',  // Large devices (desktop)
        'xl': '1280px',  // Extra large devices (large desktop)
        '2xl': '1536px', // Extra extra large devices (very large desktop)
      },
    },
  },
  plugins: [],
}
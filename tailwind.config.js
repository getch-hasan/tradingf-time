/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom1': '#FFFFFF',
      'custom2': '#5D374D',
    },},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'default-pink': "#E58883",
      },
      backgroundImage:{
        'wardrobe-1': "url('/src/assets/wardrobe.jpg')",
      }
    },
  },
  plugins: [],
}
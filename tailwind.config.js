/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkpurple: '#1d1128',
        majorelleblue: '#6e54ff',
        mauve: '#b5a8ff',
        periwinkle: '#ccccea',
        white: '#fffdfd',
      },
    },
  },
  plugins: [],
}
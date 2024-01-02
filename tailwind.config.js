/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tsumugi': "url('/img/tsumugi.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#84DCC6',
          600: '#68B09F',
        }
      },
    },
  },
  plugins: [],
} 
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'IBMPlexMono': ['IBMPlexMono', ...defaultTheme.fontFamily.mono],
      }
    },
    colors: {
      'light-body': '#fbfefb',
      'light-text-primary': '#282728',
      'light-text-secondary': '#525152',
      'light-text-tertiary': '#6f6f6f',
      'light-accent': '#1678b3',
      'light-accent-hover': '#0f5f8b',
    }
  },
  plugins: [],
};

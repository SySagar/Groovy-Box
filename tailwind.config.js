import plugin from 'tailwindcss/plugin';
import customClasses from './tokens';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./lib/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(customClasses);
    }),
  ],
};

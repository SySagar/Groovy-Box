import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss'
import {colors,customTypographyClasses} from './tokens';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./lib/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    extend: {},
    colors,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(customTypographyClasses);
    }),
  ],
} satisfies Config

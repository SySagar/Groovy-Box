import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';
import {
  colors,
  customTypographyClasses,
  groovyFontFamily,
} from '@groovy-box/tokens';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './lib/**/*.{html,ts,tsx,js,jsx}',
    './stories/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: groovyFontFamily,
    },
    colors,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(customTypographyClasses);
    }),
  ],
} satisfies Config;

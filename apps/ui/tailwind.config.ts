import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from 'tailwindcss-scoped-preflight';
import {
  colors,
  customTypographyClasses,
  groovyFontFamily,
} from '@groovy-box/tokens';

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'grv-',
  important: true,
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
      addUtilities(customTypographyClasses, { respectPrefix: false });
    }),
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.ui', {}),
    }),
  ],
  corePlugins: {
    preflight: false, // <== disable this!
  },
} satisfies Config;

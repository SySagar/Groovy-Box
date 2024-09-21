import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
  isolateOutsideOfContainer,
} from 'tailwindcss-scoped-preflight';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    '../../node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
};

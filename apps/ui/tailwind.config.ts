import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';
import {
    scopedPreflightStyles,
    isolateInsideOfContainer,
} from 'tailwindcss-scoped-preflight';
import { customTypographyClasses, groovyFontFamily } from '@groovy-box/tokens';

/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'grv-',
    important: true,
    darkMode: ['class', '[data-mode="dark"]'],
    content: [
        './lib/**/*.{html,ts,tsx,js,jsx}',
        './stories/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {
        extend: {
            fontFamily: groovyFontFamily,
        },
        colors: {
            primary: {
                100: 'rgb(var(--primary-100))',
                300: 'rgb(var(--primary-300))',
                500: 'rgb(var(--primary-500))',
                700: 'rgb(var(--primary-700))',
                900: 'rgb(var(--primary-900))',
            },
            secondary: {
                100: 'rgb(var(--secondary-100))',
                300: 'rgb(var(--secondary-300))',
                500: 'rgb(var(--secondary-500))',
                700: 'rgb(var(--secondary-700))',
                900: 'rgb(var(--secondary-900))',
            },
            success: {
                100: 'rgb(var(--success-100))',
                300: 'rgb(var(--success-300))',
                500: 'rgb(var(--success-500))',
                700: 'rgb(var(--success-700))',
                900: 'rgb(var(--success-900))',
            },
            error: {
                100: 'rgb(var(--error-100))',
                300: 'rgb(var(--error-300))',
                500: 'rgb(var(--error-500))',
                700: 'rgb(var(--error-700))',
                900: 'rgb(var(--error-900))',
            },
            warning: {
                100: 'rgb(var(--warning-100))',
                300: 'rgb(var(--warning-300))',
                500: 'rgb(var(--warning-500))',
                700: 'rgb(var(--warning-700))',
                900: 'rgb(var(--warning-900))',
            },
            text: {
                primary: 'rgb(var(--text-primary))',
                secondary: 'rgb(var(--text-secondary))',
            },
            accent: 'rgb(var(--accent))',
            backgroundPaper: 'rgb(var(--background-paper))',
            bgopacity: 'rgb(var( --background-opacity))',
        },
        fontWeight: {
            thin: '100',
            light: '300',
            regular: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },
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

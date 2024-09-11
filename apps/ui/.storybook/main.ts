const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import { mergeConfig } from 'vite';
import { defineConfig } from 'vite';
const tsconfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],

  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },

  viteConfig: defineConfig({
    resolve: {
      alias: {
        '@': '/src',
        '@utils': '/utils',
      },
    },
  }),

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-themes',
    'storybook-css-modules',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  framework: {
    name: '@storybook/react-vite',
    // options: {
    //   legacyRootApi: true,
    //   builder: {
    //     viteConfigPath: './vite.config.ts',
    //   },
    // },
  },

  docs: {
    autodocs: true,
  },
};

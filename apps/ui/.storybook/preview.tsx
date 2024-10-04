// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '../lib/tailwind.css';
import '../lib/color-scheme.css';
const customViewports = {
  xs: {
    name: 'XS',
    styles: {
      width: '350px',
      height: '963px',
    },
  },
  sm: {
    name: 'SM',
    styles: {
      width: '600px',
      height: '801px',
    },
  },
  md: {
    name: 'MD',
    styles: {
      width: '900px',
      height: '801px',
    },
  },
  lg: {
    name: 'LG',
    styles: {
      width: '1200px',
      height: '801px',
    },
  },
  xl: {
    name: 'XL',
    styles: {
      width: '1536px',
      height: '801px',
    },
  },
};

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  visualViewport: {
    customViewports,
  },
};

export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'Select light or dark',
    defaultValue: 'both',
    toolbar: {
      icon: 'mirror',
      items: ['light', 'dark', 'both'],
      dynamicTitle: true,
    },
  },
};

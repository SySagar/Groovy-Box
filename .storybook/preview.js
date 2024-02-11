/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light', // this is the default light background
      values: [
        {
          name: 'light',
          value: '#273238',
        },
      ],
    },
  },
};

export default preview;


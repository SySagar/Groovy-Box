import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Enigma-UI',
  brandUrl: 'https://enigma-ui-docs.netlify.app/',
  brandImage:
    'https://raw.githubusercontent.com/EnigmaVSSUT/Enigma-UI-Kit/main/assets/logo.png',
  brandTarget: '_self',

  //fonts
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  //UI
  appBg: '#2E393F',

  // Text colors
  textColor: '#BCC1C2',
  textInverseColor: '#10162F',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputTextColor: '#10162F',
});

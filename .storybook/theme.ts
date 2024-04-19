import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Groovy-Box',
  brandUrl: 'https://groovy-box.soumyasagar.in/',
  brandImage:
    'https://raw.githubusercontent.com/EnigmaVSSUT/Enigma-UI-Kit/main/assets/logo.png',
  brandTarget: '_self',
  //fonts
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  //UI
  appBg: '#E9EFE7',

  // Text colors
  textColor: '#454A44',
  textInverseColor: '#10162F',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barBg: '#ffffff',
});

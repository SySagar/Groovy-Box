import { TextField } from '../..';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'standard'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    type: {
      options: ['password', 'number', 'email', 'text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    multiline: {
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number' },
    },
    rowsMax: {
      control: { type: 'number' },
    },
    startIcon: {
      control: { type: 'text' },
    },
    endIcon: {
      control: { type: 'text' },
    },
    onChange: {
      control: { type: 'text' },
    },
    onClick: {
      control: { type: 'text' },
    },
    onFocus: {
      control: { type: 'text' },
    },
    onBlur: {
      control: { type: 'text' },
    },
    onKeyPress: {
      control: { type: 'text' },
    },
    onKeyUp: {
      control: { type: 'text' },
    },
    onKeyDown: {
      control: { type: 'text' },
    },
  },
};

export const Default = (args: any) => <TextField {...args} />;

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  startIcon: '👋',
  endIcon: '👋',
};

export const Colors = (args: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
    }}
  >
    <div>
      <TextField {...args} color="primary" />
    </div>
    <div>
      <TextField {...args} color="secondary" />
    </div>
  </div>
);

Colors.args = {
  variant: 'filled',
};

export const Variants = (args: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
    }}
  >
    <div>
      <TextField {...args} variant="outlined" />
    </div>
    <div>
      <TextField {...args} variant="filled" />
    </div>
  </div>
);

Variants.args = {
  color: 'primary',
};

export const Sizes = (args: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
    }}
  >
    <div>
      <TextField {...args} size="sm" />
    </div>
    <div>
      <TextField {...args} size="md" />
    </div>
    <div>
      <TextField {...args} size="lg" />
    </div>
  </div>
);

Sizes.args = {
  color: 'primary',
};

export const Multiline = (args: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
    }}
  >
    <div>
      <TextField {...args} multiline rows={4} />
    </div>
    <div>
      <TextField {...args} multiline rows={4} variant="outlined" />
    </div>
  </div>
);

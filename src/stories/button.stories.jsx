import React from 'react';
import { Button } from 'enigma-ui-kit'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['filled', 'outlined'] },
    },
    color: {
      control: { type: 'radio', options: ['primary', 'secondary'] },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] },
    },
  },
};

export const Colors = (args) => (
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
      <Button {...args} color="primary">
        primary
      </Button>
    </div>
    <div>
      <Button {...args} color="secondary">
        secondary
      </Button>
    </div>
  </div>
);

Colors.args = {
  variant: 'filled',
};

export const Variants = (args) => (
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
      <Button {...args} variant="outlined">
        Outlined
      </Button>
    </div>
    <div>
      <Button {...args} variant="filled">
        Filled
      </Button>
    </div>
  </div>
);

Variants.args = {
  color: 'primary',
};

export const Sizes = (args) => (
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
      <Button {...args} size="sm">
        Small
      </Button>
    </div>
    <div>
      <Button {...args} size="md">
        Medium
      </Button>
    </div>
    <div>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  </div>
);

Sizes.args = {
  variant: 'filled',
  color: 'primary',
};

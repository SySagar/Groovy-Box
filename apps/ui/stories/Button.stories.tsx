import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from '../lib';
import { withGlobalStyles } from '../.storybook/decorator';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withGlobalStyles],
} as Meta;

export const Variants = () => (
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
      <Button variant={'default'}>Default</Button>
    </div>
    <div>
      <Button variant={'secondary'}>secondary</Button>
    </div>
    <div>
      <Button variant={'destructive'}>destructive</Button>
    </div>
    <div>
      <Button variant={'outline'}>Outline</Button>
    </div>
    <div>
      <Button variant={'link'}>Link</Button>
    </div>
  </div>
);

export const tailwindButton = () => {
  return <Button className="bg-warning-500 text-secondaryText">Hello</Button>;
};

export const tailwindButtonWithOverridingVariant = () => {
  return (
    <Button variant={'outline'} className="grv-bg-[#ff0f] grv-outline-[#1fa]">
      Hello
    </Button>
  );
};

export const Sizes = () => (
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
      <Button size="sm">Small</Button>
    </div>
    <div>
      <Button size="default">Medium</Button>
    </div>
    <div>
      <Button size="lg">Large</Button>
    </div>
  </div>
);

Sizes.args = {
  variant: 'filled',
  color: 'primary',
};

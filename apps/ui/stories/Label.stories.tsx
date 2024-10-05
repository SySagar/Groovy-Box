import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Label } from '../lib';
import { withGlobalStyles } from '../.storybook/decorator';

type LabelComponentStory = StoryObj<typeof Label>;

export default {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  decorators: [withGlobalStyles],
  argTypes: {
    htmlFor: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta<typeof Label>;

export const BasicLabelComponent: LabelComponentStory = {
  args: {
    htmlFor: 'firstName',
    children: 'First Name:',
  },
};

export const LabelWithTailwind = () => {
  return (
    <Label htmlFor="firstName" className="text-error-900">
      First Name:
    </Label>
  );
};

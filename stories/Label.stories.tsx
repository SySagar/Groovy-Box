import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LabelDemo } from '../lib'; // Assuming LabelComponent is from the same file or a relevant import path

type LabelComponentStory = StoryObj<typeof LabelDemo>;

export default {
  title: 'LabelComponent',
  component: LabelDemo,
  tags: ['autodocs'], // Enable autodocs
  argTypes: {
    htmlFor: { control: 'text' }, // Control type for htmlFor prop
    children: { control: 'text' }, // Control type for children prop
  },
} as Meta<typeof LabelDemo>;

export const BasicLabelComponent: LabelComponentStory = {
  args: {
    htmlFor: 'firstName',
    children: 'First Name:',
  },
};
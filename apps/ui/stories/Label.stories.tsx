import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LabelDemo } from '../lib'; // Assuming LabelComponent is from the same file or a relevant import path

type LabelComponentStory = StoryObj<typeof LabelDemo>;

export default {
  title: 'Components/Label',
  component: LabelDemo,
  tags: ['autodocs'], // Enable autodocs
  argTypes: {
    htmlFor: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta<typeof LabelDemo>;

export const BasicLabelComponent: LabelComponentStory = {
  args: {
    htmlFor: 'firstName',
    children: 'First Name:',
  },
};

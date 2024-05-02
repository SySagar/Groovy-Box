// SelectDemo.stories.js

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select as CustomSelect } from '../lib'; // Import your custom Select component

export default {
  title: 'Components/SelectDemo',
  component: CustomSelect,
} as Meta;

type SelectComponentStory = StoryObj<typeof CustomSelect>;

export const BasicSelect: SelectComponentStory = {
    args: {
        options: [
            { value: 'apple', label: 'Apple' },
            { value: 'orange', label: 'Orange' },
            { value: 'banana', label: 'Banana' },
        ]
    }
    };

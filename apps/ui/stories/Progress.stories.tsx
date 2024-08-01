import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Progress, Text } from '../lib';

const DefaultTemplate = ({ value = 40 }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column',
        justifyItems: 'start',
        gap: '1rem',
      }}
    >
      <Text variant="heading-4">{value}% complete</Text>
      <Progress value={value} />
    </div>
  );
};

export default {
  title: 'components/Progress',
  component: DefaultTemplate,
} as Meta;

export const Default = () => {
  return <DefaultTemplate />;
};

import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Switch } from '../lib';

const DefaultTemplate = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label
        className="Label"
        htmlFor="airplane-mode"
        style={{ paddingRight: 15 }}
      >
        Airplane mode
      </label>
      <Switch className="SwitchRoot" id="airplane-mode" />
    </div>
  );
};

export default {
  title: 'components/Switch',
  component: DefaultTemplate,
} as Meta;

export const Default = () => {
  return <DefaultTemplate />;
};

import React from 'react';
import { Meta, Story } from '@storybook/react';

import { useToast, Button, Toaster } from '../lib';

const DefaultTemplate = () => {
  const { toast } = useToast();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '50vh',
        alignItems: 'center',
      }}
    >
      <Toaster />
      <Button
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

export default {
  title: 'components/Toast',
  component: DefaultTemplate,
} as Meta;

export const Default = () => {
  return <DefaultTemplate />;
};

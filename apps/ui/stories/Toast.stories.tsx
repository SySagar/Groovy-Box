import React from 'react';
import { Meta, Story } from '@storybook/react';

import { useToast, Button, Toaster, ToastAction } from '../lib';

const DefaultTemplate = () => {
  const { toast } = useToast();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '80vh',
        alignItems: 'center',
      }}
    >
      <Toaster />
      <Button
        onClick={() => {
          toast({
            title: 'Whats up!.',
            description: 'Have a nice day.',
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

const DestructiveTemplate = () => {
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
            variant: 'destructive',
            title: 'Error',
            description: 'There was a problem with your request.',
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

export const Destructive = () => {
  return <DestructiveTemplate />;
};

const DestructiveTemplateWithActionButton = () => {
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
            variant: 'destructive',
            title: 'Error',
            description: 'There was a problem with your request.',
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

export const DestructiveWithActionButton = () => {
  return <DestructiveTemplateWithActionButton />;
};

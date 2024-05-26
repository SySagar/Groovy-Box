import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarImage, AvatarContent, AvatarFallback } from '../lib';
import { Search, File } from 'lucide-react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: { AvatarImage, AvatarContent, AvatarFallback },
  argTypes: {
    className: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => (
  <Avatar {...args}>
    <AvatarImage
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Avatar Image"
    />
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {
  className: '',
};

export const WithContentImage: Story = (args) => (
  <Avatar {...args}>
    <AvatarContent className="bg-blue-500">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Avatar Content Image"
        className="h-full w-full object-cover"
      />
    </AvatarContent>
  </Avatar>
);

export const WithContentIcon: Story = (args) => (
  <div className="flex flex-row w-full item-center justify-center gap-16 p-4">
    <Avatar {...args}>
      <AvatarContent className=" flex items-center justify-center">
        <Search size={24} />
      </AvatarContent>
    </Avatar>
    <Avatar {...args}>
      <AvatarContent className="bg-secondary-300 flex items-center justify-center">
        <File size={24} />
      </AvatarContent>
    </Avatar>
  </div>
);

export const WithFallback: Story = (args) => (
  <Avatar {...args}>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
);

export const allSizes: Story = (args) => (
  <div className="flex flex-row w-full item-center justify-center gap-16 p-4">
    <Avatar {...args} size="small">
      <AvatarContent className="bg-blue-500">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar Content Image"
          className="h-full w-full object-cover"
        />
      </AvatarContent>
    </Avatar>

    <Avatar {...args} size="medium">
      <AvatarContent className="bg-blue-500">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar Content Image"
          className="h-full w-full object-cover"
        />
      </AvatarContent>
    </Avatar>

    <Avatar {...args} size="large">
      <AvatarContent className="bg-blue-500">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar Content Image"
          className="h-full w-full object-cover"
        />
      </AvatarContent>
    </Avatar>
  </div>
);

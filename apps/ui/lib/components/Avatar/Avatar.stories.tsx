import { Story } from '@storybook/react';
import { Avatar, AvatarImage, AvatarContent, AvatarFallback } from './Avatar';
import { Search, File } from 'lucide-react';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    subcomponents: { AvatarImage, AvatarContent, AvatarFallback },
    argTypes: {
        className: { control: 'text' },
    },
};

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
        <AvatarContent className="grv-bg-blue-500">
            <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar Content Image"
                className="grv-h-full grv-w-full grv-object-cover"
            />
        </AvatarContent>
    </Avatar>
);

export const WithContentIcon: Story = (args) => (
    <div className="grv-flex grv-flex-row grv-w-full grv-item-center grv-justify-center grv-gap-16 grv-p-4">
        <Avatar {...args}>
            <AvatarContent className="grv-flex grv-items-center grv-justify-center">
                <Search size={24} />
            </AvatarContent>
        </Avatar>
        <Avatar {...args}>
            <AvatarContent className="grv-bg-secondary-300 grv-flex grv-items-center grv-justify-center">
                <File size={24} />
            </AvatarContent>
        </Avatar>
    </div>
);

export const WithFallback: Story = () => (
    <Avatar>
        <AvatarFallback>AB</AvatarFallback>
    </Avatar>
);

export const allSizes: Story = () => (
    <div className="grv-flex grv-flex-row grv-w-full grv-item-center grv-justify-center grv-gap-16 grv-p-4">
        <Avatar size="small">
            <AvatarContent className="grv-bg-blue-500">
                <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar Content Image"
                    className="grv-h-full grv-w-full grv-object-cover"
                />
            </AvatarContent>
        </Avatar>

        <Avatar size="medium">
            <AvatarContent className="grv-bg-blue-500">
                <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar Content Image"
                    className="grv-h-full grv-w-full grv-object-cover"
                />
            </AvatarContent>
        </Avatar>

        <Avatar size="large">
            <AvatarContent className="bg-blue-500">
                <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar Content Image"
                    className="grv-h-full grv-w-full grv-object-cover"
                />
            </AvatarContent>
        </Avatar>
    </div>
);

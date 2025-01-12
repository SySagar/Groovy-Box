import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';
import { Mail, Lock, Eye, EyeOff, Search, User, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../Button';

const meta: Meta<typeof TextField.Root> = {
    title: 'Components/TextField',
    component: TextField.Root,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['standard', 'outlined', 'filled'],
            description: 'The visual style of the text field',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the text field',
        },
        error: {
            control: 'boolean',
            description: 'Whether the text field is in an error state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextField.Root>;

// Basic TextField
export const Basic: Story = {
    render: (args) => (
        <TextField.Root {...args}>
            <TextField.Input placeholder="Enter text" />
        </TextField.Root>
    ),
};

// With Icons
export const WithIcons: Story = {
    render: () => (
        <div className="grv-space-y-4">
            <TextField.Root variant={'outlined'}>
                <TextField.Icon position="start">
                    <Mail className="grv-w-4 grv-h-4" />
                </TextField.Icon>
                <TextField.Input placeholder="Enter email" />
            </TextField.Root>

            <TextField.Root variant={'outlined'}>
                <TextField.Icon position="start">
                    <Search className="grv-w-4 grv-h-4" />
                </TextField.Icon>
                <TextField.Input placeholder="Search..." />
                <TextField.Icon position="end">
                    <AlertCircle className="grv-w-4 grv-h-4" />
                </TextField.Icon>
            </TextField.Root>
        </div>
    ),
};

// Password Input with Toggle
export const PasswordInput: Story = {
    render: () => {
        const [showPassword, setShowPassword] = useState(false);
        return (
            <TextField.Root variant={'outlined'}>
                <TextField.Icon position="start">
                    <Lock className="grv-w-4 grv-h-4" />
                </TextField.Icon>
                <TextField.Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                />
                <TextField.Icon position="end">
                    <Button
                        variant={'outline'}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeOff className="grv-w-4 grv-h-4" />
                        ) : (
                            <Eye className="grv-w-4 grv-h-4" />
                        )}
                    </Button>
                </TextField.Icon>
            </TextField.Root>
        );
    },
};

// Different Variants
export const Variants: Story = {
    render: () => (
        <div className="grv-space-y-4">
            <TextField.Root variant="standard">
                <TextField.Input placeholder="Standard variant" />
            </TextField.Root>

            <TextField.Root variant="outlined">
                <TextField.Input placeholder="Outlined variant" />
            </TextField.Root>

            <TextField.Root variant="filled">
                <TextField.Input placeholder="Filled variant" />
            </TextField.Root>
        </div>
    ),
};

// Different Sizes
export const Sizes: Story = {
    render: () => (
        <div className="grv-space-y-4">
            <TextField.Root variant={'outlined'} size="sm">
                <TextField.Input placeholder="Small size" />
            </TextField.Root>

            <TextField.Root variant={'outlined'} size="md">
                <TextField.Input placeholder="Medium size" />
            </TextField.Root>

            <TextField.Root variant={'outlined'} size="lg">
                <TextField.Input placeholder="Large size" />
            </TextField.Root>
        </div>
    ),
};

// With Helper Text
export const WithHelperText: Story = {
    render: () => (
        <div className="grv-space-y-4">
            <TextField.Root variant={'outlined'}>
                <TextField.Input placeholder="With helper text" />
                <TextField.HelperText>
                    This is a helpful message
                </TextField.HelperText>
            </TextField.Root>

            <TextField.Root variant={'outlined'} error={true}>
                <TextField.Input placeholder="With error" />
                <TextField.HelperText>
                    This field is required
                </TextField.HelperText>
            </TextField.Root>
        </div>
    ),
};

// Form Example
export const FormExample: Story = {
    render: () => (
        <form className="grv-space-y-4 grv-max-w-md">
            <TextField.Root variant="outlined">
                <TextField.Icon position="start">
                    <User className="grv-w-4 grv-h-4" />
                </TextField.Icon>
                <TextField.Input placeholder="Username" />
                <TextField.Icon position="end">
                    <Check className="grv-w-4 grv-h-4 grv-text-green-500" />
                </TextField.Icon>
                <TextField.HelperText>
                    Username is available
                </TextField.HelperText>
            </TextField.Root>

            <TextField.Root variant="outlined" error={true}>
                <TextField.Icon position="start">
                    <Mail className="grv-w-4 grv-h-4" />
                </TextField.Icon>
                <TextField.Input placeholder="Email" type="email" />
                <TextField.HelperText>
                    Please enter a valid email address
                </TextField.HelperText>
            </TextField.Root>

            <TextField.Root variant="outlined">
                <TextField.Icon position="start">
                    <Lock className="grv-w-4 grv-h-4" />
                </TextField.Icon>
                <TextField.Input type="password" placeholder="Password" />
                <TextField.HelperText>
                    Must be at least 8 characters
                </TextField.HelperText>
            </TextField.Root>
        </form>
    ),
};

// Disabled State
export const DisabledStates: Story = {
    render: () => (
        <div className="grv-space-y-4">
            <TextField.Root>
                <TextField.Input
                    placeholder="Disabled input"
                    disabled
                />
            </TextField.Root>

            <TextField.Root variant="outlined">
                <TextField.Icon position="start">
                    <Mail className="grv-w-4 grv-h-4" />
                </TextField.Icon>
                <TextField.Input
                    placeholder="Disabled with icons"
                    disabled
                />
                <TextField.Icon position="end">
                    <AlertCircle className="grv-w-4 grv-h-4" />
                </TextField.Icon>
            </TextField.Root>
        </div>
    ),
};
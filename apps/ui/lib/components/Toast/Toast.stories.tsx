import { withGlobalStyles } from '../../../.storybook/decorator';
import { useToast, Button, Toaster, ToastAction } from '../..';

export const Default = () => {
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
    component: Default,
    decorators: [withGlobalStyles],
};

export const Destructive = () => {
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

export const DestructiveWithActionButton = () => {
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

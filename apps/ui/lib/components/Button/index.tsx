import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@utils/utils';

const buttonVariants = cva(
  'grv-inline-flex grv-items-center grv-justify-center grv-whitespace-nowrap grv-rounded-md grv-text-sm grv-font-medium grv-ring-offset-background grv-transition-colors focus-visible:grv-outline-none focus-visible:grv-ring-2 focus-visible:grv-ring-ring focus-visible:grv-ring-offset-2 disabled:grv-pointer-events-none disabled:grv-opacity-50',
  {
    variants: {
      variant: {
        default:
          'grv-bg-primary-700 grv-text-primaryText hover:grv-bg-primary-700/90 grv-border-none',
        destructive:
          'grv-bg-error-900 grv-text-primaryText hover:grv-bg-error-900/90 grv-border-none grv-outline-0 grv-shadow-none',
        outline:
          ' grv-border-none grv-bg-primary-100/0 hover:grv-bg-primary-700/20 hover:grv-text-accent-foreground grv-outline grv-font-medium grv-outline-1 grv-shadow-none',
        secondary:
          'grv-bg-secondary-700 grv-text-primaryText hover:grv-bg-secondary-700/80  grv-border-none grv-outline-0 grv-shadow-none',
        link: 'grv-text-primary-500 grv-underline-offset-4 hover:grv-underline grv-bg-primary-100/0 grv-font-medium grv-border-none hover:grv-cursor-pointer',
      },
      size: {
        default: 'grv-h-10 grv-px-4 grv-py-2',
        sm: 'grv-h-9 grv-rounded-md grv-px-3',
        lg: 'grv-h-11 grv-rounded-md grv-px-8',
        icon: 'grv-h-10 grv-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

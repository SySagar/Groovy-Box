import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import styles from './toast.module.css';

import { cn } from '@utils/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'grv-fixed grv-top-0 grv-z-[100] grv-flex grv-max-h-screen grv-w-full grv-flex-col-reverse grv-p-4 sm:grv-bottom-0 sm:grv-right-0 sm:grv-top-auto sm:grv-flex-col md:grv-max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'grv-group grv-pointer-events-auto grv-relative grv-flex grv-w-full grv-items-center grv-justify-between grv-space-x-4 grv-overflow-hidden grv-rounded-md grv-p-6 grv-pr-8 grv-shadow-lg grv-transition-all ',
  {
    variants: {
      variant: {
        default: 'grv-bg-background grv-text-foreground',
        destructive:
          'grv-destructive grv-group grv-border-destructive grv-bg-error-900 grv-text-primaryText',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const toastRootStyles = cva([styles.toastRoot]);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        toastVariants({ variant }),
        toastRootStyles(),
        className,
        'ui'
      )}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'grv-inline-flex grv-h-8 grv-shrink-0 grv-items-center grv-justify-center grv-rounded-md grv-border grv-bg-transparent grv-px-3 grv-text-sm grv-font-medium grv-ring-offset-background grv-transition-colors hover:grv-bg-secondary focus:grv-outline-none focus:grv-ring-1  group-[.destructive]:focus:grv-ring-error-300 focus:grv-ring-offset-2 disabled:grv-pointer-events-none disabled:grv-opacity-50  group-[.destructive]:hover:grv-bg-error-700/25 group-[.destructive]:hover:grv-text-destructive-foreground',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'grv-absolute grv-right-2 grv-top-2 grv-rounded-md grv-p-1 grv-text-foreground/50 grv-opacity-0 grv-transition-opacity hover:grv-text-foreground focus:grv-opacity-100 focus:grv-outline-none focus:grv-ring-2  group-[.destructive]:focus:grv-ring-error-300 group-hover:grv-opacity-100',
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="grv-h-4 grv-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('grv-text-sm grv-font-semibold ', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('grv-text-sm grv-opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva } from 'class-variance-authority';
import { cn } from '@utils/utils';
import styles from './switch.module.css';

const switchRootStyles = cva([
  'grv-inline-flex ui grv-h-6 grv-w-11 grv-shrink-0 grv-cursor-pointer grv-items-center grv-rounded-full grv-transition-colors focus:grv-outline-none focus:grv-ring-2 focus:grv-ring-primary-500 disabled:grv-cursor-not-allowed disabled:grv-opacity-50',
  styles.switchRoot,
]);

const switchThumbStyles = cva([
  'grv-pointer-events-none ui grv-block grv-h-5 grv-w-5 grv-rounded-full grv-bg-primary-900 grv-shadow-md grv-ring-0 grv-transition-transform',
  styles.switchThumb,
]);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchRootStyles(), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={switchThumbStyles()} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

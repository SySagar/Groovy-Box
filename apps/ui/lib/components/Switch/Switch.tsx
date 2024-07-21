import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva } from 'class-variance-authority';
import { cn } from '@utils/utils';
import styles from './switch.module.css';

const switchRootStyles = cva([
  'inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
  styles.switchRoot,
]);

const switchThumbStyles = cva([
  'pointer-events-none block h-5 w-5 rounded-full bg-primary-900 shadow-md ring-0 transition-transform',
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

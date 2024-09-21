import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@utils/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'grv-relative grv-h-4 grv-w-full grv-overflow-hidden grv-rounded-full grv-bg-primary-100 grv-bg-opacity-50',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="grv-h-full grv-w-full grv-flex-1 grv-bg-primary-500 grv-transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

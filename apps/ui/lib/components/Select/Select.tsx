import * as SelectPrimitive from '@radix-ui/react-select';
import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Check } from 'lucide-react';
import { cn } from './../../../utils/utils';

const Select = SelectPrimitive.Select;

const SelectGroup = SelectPrimitive.SelectGroup;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        'grv-flex grv-h-10 ui grv-w-full grv-items-center grv-justify-between grv-rounded-md grv-border grv-border-input grv-bg-background grv-px-3 grv-py-2 grv-text-sm grv-ring-offset-background placeholder:grv-text-muted-foreground focus:grv-outline-none focus:grv-ring-2 focus:grv-ring-ring focus:grv-ring-offset-2 disabled:grv-cursor-not-allowed disabled:grv-opacity-50 [&>span]:grv-line-clamp-1',
        className
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName; // for debugging purpose maybe in dev tools ig because forwarfRef is used

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'grv-flex grv-cursor-default ui grv-items-center grv-justify-center grv-py-1',
      className
    )}
    {...props}
  >
    <ChevronUpIcon className="grv-h-4 grv-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'grv-flex grv-cursor-default ui grv-items-center grv-justify-center grv-py-1',
      className
    )}
    {...props}
  >
    <ChevronDownIcon className="grv-h-4 grv-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'grv-relative grv-z-50 ui  grv-bg-primary-500 grv-text-primaryText grv-max-h-96 grv-min-w-[8rem] grv-overflow-hidden grv-rounded-md grv-border grv-bg-popover grv-text-popover-foreground grv-shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:grv-zoom-out-95 data-[state=open]:grv-zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:grv-translate-y-1 data-[side=left]:grv--translate-x-1 data-[side=right]:grv-translate-x-1 data-[side=top]:grv--translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'grv-p-1',
          position === 'popper' &&
            'grv-h-[var(--radix-select-trigger-height)] grv-w-full grv-min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'grv-py-1.5 grv-pl-8 ui grv-pr-2 grv-text-sm grv-font-semibold',
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'grv-relativ grv-flex ui grv-w-full grv-cursor-default grv-select-none grv-items-center grv-rounded-sm grv-py-1.5 grv-pl-8 grv-pr-2 grv-text-sm grv-outline-none focus:grv-bg-accent focus:grv-text-primary-700 data-[disabled]:grv-pointer-events-none data-[disabled]:grv-opacity-50',
      className
    )}
    {...props}
  >
    <span className="grv-absolute grv-left-2 grv-flex grv-h-3.5 grv-w-3.5 grv-items-center grv-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="grv-h-4 grv-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('grv--mx-1 ui grv-my-1 grv-h-px grv-bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};

// interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
//     children: React.ReactNode;
//   }

//   const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>((props, forwardedRef) => {
//     const { children, className, ...rest } = props;
//     return (
//       <SelectPrimitive.Item className={classnames("SelectItem", className)} {...rest} ref={forwardedRef}>
//         <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
//         <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
//           <CheckIcon />
//         </SelectPrimitive.ItemIndicator>
//       </SelectPrimitive.Item>
//     );
//   });

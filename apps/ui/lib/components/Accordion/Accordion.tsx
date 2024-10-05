import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import styles from './accordion.module.css';
import { cva } from 'class-variance-authority';
import { cn } from '@utils/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('grv-border-b ui', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="grv-flex grv-text-primary-100 typo-body-1">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'grv-flex grv-flex-1 grv-items-center grv-justify-between grv-py-4 grv-font-medium grv-transition-all hover:grv-text-primary-300  [&[data-state=open]>svg]:grv-rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="grv-h-4 grv-w-4 grv-shrink-0 grv-transition-transform grv-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const accordionContentStyles = cva([
  'grv-overflow-hidden grv-text-sm grv-transition-all',
  styles.accordionContent,
]);

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={accordionContentStyles()}
    {...props}
  >
    <div className={cn('grv-pb-4 grv-pt-0 grv-text-accent', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

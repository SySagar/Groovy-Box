import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@utils/utils';

type AvatarContentProps = {
  className?: string;
  children: React.ReactNode; // todo: change it to image or icon type
};

type AvatarExtensionProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  className?: string;
  shape?: 'square' | 'rounded';
  size?: 'small' | 'medium' | 'large';
};

type compoundAvatarProps = AvatarExtensionProps &
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  compoundAvatarProps
>(({ className, shape = 'rounded', size = 'medium', ...props }, ref) => {
  const shapeClass = shape === 'square' ? 'rounded-none' : 'rounded-full';
  const sizeClass =
    size === 'small'
      ? 'grv-h-6 grv-w-6'
      : size === 'medium'
        ? 'grv-h-10 grv-w-10'
        : 'grv-h-16 grv-w-16';

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        'grv-relative grv-flex ui grv-h-10 grv-w-10 grv-shrink-0 grv-overflow-hidden grv-rounded-full',
        shapeClass,
        sizeClass,
        className
      )}
      {...props}
    />
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      'grv-aspect-square grv-object-cover grv-h-full grv-w-full',
      className
    )}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarContent = React.forwardRef<HTMLDivElement, AvatarContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grv-aspect-square grv-h-full grv-w-full', className)}
      {...props}
    >
      {children}
    </div>
  )
);

AvatarContent.displayName = 'AvatarContent';

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'grv-flex ui grv-h-full grv-w-full grv-items-center grv-justify-center grv-rounded-full grv-bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarContent, AvatarFallback };

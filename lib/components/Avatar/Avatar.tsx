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
      ? 'h-6 w-6'
      : size === 'medium'
        ? 'h-10 w-10'
        : 'h-16 w-16';

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
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
    className={cn('aspect-square object-cover h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarContent = React.forwardRef<HTMLDivElement, AvatarContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('aspect-square h-full w-full', className)}
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
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarContent, AvatarFallback };

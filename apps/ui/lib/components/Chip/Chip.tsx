'use client';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X as CloseIcon } from 'lucide-react';

import { cn } from '@utils/utils';

const chipVariants = cva(
    'grv-inline-flex ui grv-items-center grv-rounded-full grv-text-sm grv-font-medium grv-transition-colors focus:grv-outline-none focus:grv-ring-2 grv-ring-ring grv-ring-offset-2',
    {
        variants: {
            variant: {
                filled: 'grv-bg-primary-500 ui',
                outlined: 'grv-border-2 grv-border-solid grv-border-accent ui',
            },
            size: {
                sm: 'grv-h-6 grv-px-3 ui',
                md: 'grv-h-8 grv-px-4 ui',
                lg: 'grv-h-10 grv-px-5 ui',
            },
            clickable: {
                true: 'grv-cursor-pointer',
                false: '',
            },
        },
        defaultVariants: {
            variant: 'filled',
            size: 'md',
            clickable: false,
        },
    }
);

export interface ChipDivProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
    onDelete?: () => void;
    as?: React.ElementType;
    href?: never;
    beforeChildren?: React.ReactNode;
    afterChildren?: React.ReactNode;
}

export interface ChipAnchorProps
    extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof chipVariants> {
    onDelete?: () => void;
    href?: string;
    target?: string;
    as?: React.ElementType;
    beforeChildren?: React.ReactNode;
    afterChildren?: React.ReactNode;
}

export type ChipProps = ChipAnchorProps | ChipDivProps;

const Chip = React.forwardRef<HTMLDivElement | HTMLAnchorElement, ChipProps>(
    (
        {
            className,
            variant,
            size,
            clickable,
            onDelete,
            href,
            as,
            beforeChildren,
            afterChildren,
            children,
            ...props
        },
        ref
    ) => {
        const Component = as || (href ? 'a' : 'div');
        const isClickable = Boolean(clickable || href || props.onClick);

        const textColor =
            variant === 'outlined' ? 'grv-text-accent' : 'grv-text-text-primary';


        const textSize =
            size === 'sm'
                ? 'grv-text-[10px]'
                : size === 'md'
                    ? 'grv-text-[12px]'
                    : 'grv-text-[14px]';

        return (
            <Component
                ref={ref}
                className={cn(
                    chipVariants({ variant, size, clickable: isClickable }),
                    'grv-decoration-primary-100 grv-underline-offset-2 grv-flex grv-overflow-hidden ui',
                    className
                )}
                {...(href && { href })}
                {...props}
            >
                {beforeChildren && (
                    <div
                        className={cn(
                            'grv-flex grv-items-center grv-justify-center grv-text-text-primary grv-mr-2 grv-w-[20px] grv-h-[20px] ui grv-overflow-hidden grv-rounded-full grv-object-cover'
                        )}
                    >
                        {beforeChildren}
                    </div>
                )}
                <div className={cn(textColor, textSize)}>{children}</div>
                {afterChildren && (
                    <div
                        className={cn(
                            `grv-flex grv-items-center grv-justify-center ${textColor} grv-ml-2 ui`
                        )}
                    >
                        {afterChildren}
                    </div>
                )}
                {onDelete && (
                    <div
                        className={cn(
                            'grv-ml-2 grv-rounded-full grv-bg-text-primary grv-cursor-pointer  grv-py-[4px] grv-px-[4px] grv-transition-colors grv-text-primary grv-opacity-50 hover:grv-opacity-60',
                            textSize
                        )}
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                    >
                        <CloseIcon className={cn('grv-h-[10px] grv-w-[10px]')} />
                    </div>
                )}
            </Component>
        );
    }
);

Chip.displayName = 'Chip';

export { Chip };

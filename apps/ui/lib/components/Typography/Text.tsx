import React from 'react';
import { VARIANT_MAPPINGS } from './constants';
import { Slot } from './Slot';
import style from './text.module.css';
import { cn } from '@utils/utils';
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: keyof typeof VARIANT_MAPPINGS;
  alignment?: 'left' | 'right' | 'center' | 'justify';
  maxLines?: number;
  asChild?: boolean;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant,
  alignment,
  maxLines,
  asChild = false,
  children,
  ...props
}) => {
  const textStyle = {
    textAlign: alignment || 'center',
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    display: asChild ? 'inline-block' : 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitLineClamp: maxLines || 'inherit',
  };

  const Comp = asChild ? Slot : 'p';
  const classNames = VARIANT_MAPPINGS[variant as keyof typeof VARIANT_MAPPINGS];
  const mergedClasses = cn(style.text, classNames?.slice(1), props.className);

  return (
    <Comp
      {...props}
      className={cn('grv-text-accent', mergedClasses, 'ui')}
      style={textStyle}
      children={children}
    />
  );
};

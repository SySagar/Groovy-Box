import React from 'react';
import { VARIANT_MAPPINGS } from './constants';
import { Slot } from './Slot';
import style from './text.module.css';
import clsx from 'clsx';
export interface TextProps {
  variant?: keyof typeof VARIANT_MAPPINGS;
  alignment?: 'left' | 'right' | 'center' | 'justify';
  color?: string;
  width?: number;
  minHeight?: number;
  maxLines?: number;
  asChild?: boolean;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant,
  alignment,
  color,
  width,
  maxLines,
  asChild = false,
  children,
  ...props
}) => {
  const textStyle = {
    textAlign: alignment || 'center',
    color: color || 'inherit',
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    display: asChild ? 'inline-block' : 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: width || 'inherit',
    WebkitLineClamp: maxLines || 'inherit',
  };

  const Comp = asChild ? Slot : 'p';
  const classNames = VARIANT_MAPPINGS[variant as keyof typeof VARIANT_MAPPINGS];
  const mergedClassess = variant
    ? clsx(style.text, classNames.slice(1))
    : style.text;

  return (
    <div>
      <Comp
        className={mergedClassess}
        style={textStyle}
        children={children}
        {...props}
      />
    </div>
  );
};

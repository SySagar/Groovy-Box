'use client';
import React from 'react';
import { cn } from '../utils/utils';

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  height?: string;
}

export default function ComponenentWrapper({
  children,
  height = '300px',
  ...props
}: ComponentWrapperProps) {
  console.log('hetight', height);
  const mergedClassNames = cn(
    `ui flex flex-row items-center justify-center h-[${height}] gap-20`,
    props.className,
  );
  return <div className={mergedClassNames}>{children}</div>;
}

'use client';
import React from 'react';

export default function ComponenentWrapper({
  children,
  height = '300px',
}: {
  children: React.ReactNode;
  height?: string;
}) {
  return (
    <div
      className={`ui flex flex-row items-center justify-center h-[${height}] gap-20`}
    >
      {children}
    </div>
  );
}

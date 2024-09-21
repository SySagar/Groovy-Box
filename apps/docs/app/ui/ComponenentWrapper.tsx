'use client';
import React from 'react';

export default function ComponenentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='ui flex flex-row items-center justify-center h-[300px] gap-20'>
      {children}
    </div>
  );
}

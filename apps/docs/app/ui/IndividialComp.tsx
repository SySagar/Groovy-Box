'use client';
import React from 'react';
import { Chip } from '@groovy-box/ui';

const ChipEle = () => {
  return (
    <div className='grv-flex grv-flex-wrap grv-gap-4 grv-p-4'>
      <Chip clickable onClick={() => alert('Clicked!')}>
        Clickable
      </Chip>
      <Chip onDelete={() => alert('Delete clicked!')}>Deletable</Chip>
      <Chip href='https://ui.soumyasagar.in' target='_blank'>
        Link
      </Chip>
    </div>
  );
};

export { ChipEle };

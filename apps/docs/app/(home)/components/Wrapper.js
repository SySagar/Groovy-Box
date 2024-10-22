import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const Wrapper = ({ children }) => {
  const textToCopy = 'npm i @groovy-box/ui';

  const [copySuccess, setCopySuccess] = React.useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopySuccess('Copied!');
      },
      (err) => {
        setCopySuccess('Failed to copy!');
        console.error('Failed to copy text: ', err);
      },
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopySuccess('');
    }, 4000);
    return () => clearTimeout(timeout);
  }, [copySuccess]);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      {React.cloneElement(children)}
      <button
        onClick={copyToClipboard}
        className='flex justify-center items-center '
        style={{
          height: '55px',
          width: '50px',
          borderRadius: '5px 5px 5px 5px',
          color: '#fff',
          background: '#1D1F21',
        }}
        title='Copy'
      >
        {copySuccess !== '' ? <Check size={20} /> : <Copy size={20} />}
      </button>
    </div>
  );
};

export default Wrapper;

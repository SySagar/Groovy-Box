import React from 'react';
import { FaNpm } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Access = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5rem',
      }}
    >
      <a
        className='access'
        href='https://www.npmjs.com/package/@groovy-box/ui'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaNpm size={80} />
      </a>
      <a
        className='access'
        href='https://github.com/SySagar/Groovy-Box'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub size={40} />
      </a>
    </div>
  );
};

export default Access;

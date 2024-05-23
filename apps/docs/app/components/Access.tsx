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
        href='https://www.npmjs.com/package/enigma-ui-kit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaNpm size={100} />
      </a>
      <a
        className='access'
        href='https://github.com/EnigmaVSSUT/Enigma-UI-Kit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub size={50} />
      </a>
    </div>
  );
};

export default Access;

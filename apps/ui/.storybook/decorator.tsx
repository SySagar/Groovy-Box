import React from 'react';
import { useEffect } from 'react';

export function withGlobalStyles(Story, context) {
  let { scheme } = context.globals;

  useEffect(() => {
    if (scheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [scheme]);

  function Flex({ children, ...props }) {
    return (
      <div
        {...props}
        style={{
          display: 'flex',
          padding: '3rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    );
  }

  if (scheme === 'light') {
    return (
      <Flex className="color-scheme--light">
        <Story />
      </Flex>
    );
  }

  if (scheme === 'dark') {
    return (
      <Flex className="color-scheme--dark">
        <Story />
      </Flex>
    );
  }

  return (
    <div>
      <Flex className="color-scheme--dark">
        <Story />
      </Flex>
      <Flex className="color-scheme--light">
        <Story />
      </Flex>
    </div>
  );
}

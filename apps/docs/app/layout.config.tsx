import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div className='flex justify-center items-center gap-2'>
        <Image
          className='relative bottom-[2px]'
          src={'/logo.png'}
          alt='G'
          width={30}
          height={30}
        />
        <p>Groovy-box</p>
      </div>
    ),
  },
  links: [
    {
      text: 'docs',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'storybook',
      url: 'https://groovy-box.netlify.app/?path=/docs/components-button--docs',
      active: 'nested-url',
    },
  ],
};
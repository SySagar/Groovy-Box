import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import Image from 'next/image';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

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
    {
      text: 'utilities',
      url: 'https://groovy-box.netlify.app/?path=/docs/components-button--docs',
      active: 'nested-url',
    },
    {
      type: 'custom',
      children: (
        <a
          href='https://cal.com/sy-sagar/quick-chat'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-800 border-2 border-blue-500 px-2 py-1 rounded-md text-[12px] sm:text-sm dark:text-blue-500 dark:border-blue-500'
        >
          Hire me!
        </a>
      ),
    },
    {
      type: 'custom',
      children: (
        <div>
          <SignedOut>
            <SignInButton
              children={
                <div
                  rel='noopener noreferrer'
                  className='px-3 py-[6px] rounded-md  text-[12px] sm:text-[13px] hover:cursor-pointer dark:text-white  border-[#a8afcb] dark:hover:bg-[#383b47]  dark:hover:bg-opacity-35 hover:bg-slate-400 hover:bg-opacity-10'
                >
                  Login
                </div>
              }
              mode='modal'
            />
          </SignedOut>
          <div className='relative top-1'>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      ),
      secondary: true,
    },
  ],
};

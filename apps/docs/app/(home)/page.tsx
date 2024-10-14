import Link from 'next/link';
import InstallPage from './components/InstallPage';
import Access from './components/Access';
import Image from 'next/image';
import Carousel from './components/Stack';

export default function HomePage() {
  return (
    <main className='flex h-[calc(100vh-56px)] flex-col justify-center items-center text-center relative'>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          className='inner-container'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p className=' font-bold w-5/6 sm:w-2/3 text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl'>
              Beautifully crafted components for your next big front-end
              application.
            </p>
            <h3
              className='font-medium text-sm w-4/6 sm:w-xl md:text-xl md:text-md dark:text-gray-400 text-gray-600'
              style={{
                textAlign: 'center',
              }}
            >
              Open source components built on top of Radix UI.
            </h3>
            <div
              className='meta-container'
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '30px',
                gap: '3rem',
              }}
            >
              <div style={{ position: 'relative' }}>
                <InstallPage />
              </div>

              <div>
                <Access />
              </div>
            </div>
            <Carousel />
          </div>
        </div>
      </div>
      <div className='absolute bottom-4 text-sm sm:text-md'>
        Reach out to me via{' '}
        <a
          target='_blank'
          className='underline text-cyan-600'
          href='https://x.com/SySagar2'
        >
          Twitter
        </a>
      </div>
    </main>
  );
}

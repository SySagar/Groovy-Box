import Link from 'next/link';
import InstallPage from './components/InstallPage';
import Access from './components/Access';
import Image from 'next/image';

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
            <p className=' font-bold w-2/3 text-center text-5xl'>
              Beautifully crafted components for your next big front-end
              application.
            </p>
            <h3
              className='font-medium text-xl text-gray-400'
              style={{
                width: '50vw',
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
            <div className='stack flex flex-row gap-10 justify-center items-center'>
              <div className='flex flex-row gap-2 w-full justify-center items-center'>
                <Image src='/react.svg' alt='react' width={30} height={30} />
                <p>React.js</p>
              </div>

              <div className='flex flex-row gap-2 w-full justify-center items-center'>
                <Image src='/next.svg' alt='next' width={30} height={30} />
                <p>Next.js</p>
              </div>

              <div className='flex flex-row gap-2 w-full justify-center items-center'>
                <Image
                  src='/tailwind.svg'
                  alt='tailwind'
                  width={30}
                  height={30}
                />
                <p className='text-nowrap'>Tailwind css</p>
              </div>

              <div className='flex flex-row gap-2 w-full pl-2 justify-center items-center'>
                <Image
                  src='/framer.png'
                  alt='framer motion'
                  width={25}
                  height={25}
                />
                <p className='text-nowrap'>Framer Motion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-4 '>
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

import Link from 'next/link';
import InstallPage from './components/InstallPage';
import Access from './components/Access';

export default function HomePage() {
  return (
    <main className='flex h-[calc(100vh-56px)] flex-col justify-center text-center'>
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
              gap: '30px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p className=' font-bold w-2/3 text-center text-5xl'>
              Beautifully crafted components for your next big front-end
              application.
            </p>
            <h3
              className='font-medium text-xl text-appTextSecondaryColor'
              style={{
                width: '50vw',
                textAlign: 'center',
              }}
            >
              The official React UI library built on top of Radix UI.
            </h3>

            <div
              className='meta-container'
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
                gap: '2rem',
              }}
            >
              <div style={{ position: 'relative' }}>
                <InstallPage />
              </div>

              <div>
                <Access />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

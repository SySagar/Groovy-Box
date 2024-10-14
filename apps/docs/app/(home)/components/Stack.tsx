import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiFramer } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

const Carousel = () => {
  return (
    <div className='overflow-hidden relative  max-w-80 sm:max-w-96 md:max-w-full'>
      <div className='md:hidden absolute -inset-1  bg-gradient-to-l via-transparent from-[#0a0a0a] to-transparent pointer-events-none z-10' />
      <div className='md:hidden absolute inset-0 bg-gradient-to-r via-transparent from-[#0a0a0a] to-transparent pointer-events-none z-10' />
      <div className='flex animate-scroll md:animate-none '>
        <div className='flex flex-row gap-10 items-center p-4'>
          <div className='flex flex-row gap-2 items-center'>
            <FaReact size={28} />
            <p>React.js</p>
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <SiNextdotjs size={27} />
            <p>Next.js</p>
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <RiTailwindCssFill size={29} />
            <p className='text-nowrap'>Tailwind CSS</p>
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <SiFramer size={25} />
            <p className='text-nowrap'>Framer Motion</p>
          </div>
        </div>

        {/* Duplicate items for continuous effect */}
        <div className='flex flex-row gap-10 md:hidden items-center p-4'>
          <div className='flex flex-row gap-2 items-center'>
            <FaReact size={28} />
            <p>React.js</p>
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <SiNextdotjs size={27} />
            <p>Next.js</p>
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <RiTailwindCssFill size={29} />
            <p className='text-nowrap'>Tailwind CSS</p>
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <SiFramer size={25} />
            <p className='text-nowrap'>Framer Motion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

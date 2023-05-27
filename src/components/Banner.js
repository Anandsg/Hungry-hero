import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const Banner = () => {
  const bannerImageUrl = 'https://img.freepik.com/free-photo/dark-surface-with-blank-space-fast-food-menu_23-2147684608.jpg';

  return (
    <div
      className='w-full h-32 py-[54px] px-1 sm:h-60 sm:py-16 sm:px-4 lg:h-[270px] lg:p-16'
      style={{
        backgroundImage: `url(${bannerImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} 
    >
      <div className='font-mono text-sm text-white sm:text-xl lg:text-2xl xl:text-3xl'>
        <TypeAnimation
          sequence={[
            'Biryani mangoge 🥘, Biryani denge',
            2000,
            'Kheer mangoge 🥣, Kheer denge',
            2000,
          ]}
          cursor={true}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Banner;

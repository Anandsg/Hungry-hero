import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-32 py-10 px-2 sm:h-60 sm:py-16 sm:px-4 lg:h-50 lg:p-16 bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        </div>
      </div>
      <div className="flex items-center h-full text-gray-800">
        <div className="w-1/2 px-4">
          <h1 className="text-2xl sm:text-3xl font-serif lg:text-4xl xl:text-2xl font-thin mb-6">
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
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

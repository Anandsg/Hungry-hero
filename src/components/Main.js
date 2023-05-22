import Banner from './Banner';
import Body from './Body';
import React from 'react';

const Main = () => {
  return (
    <div className='flex flex-col flex-1'>
      <Banner />
      <Body />
    </div>
  );
};

export default Main;
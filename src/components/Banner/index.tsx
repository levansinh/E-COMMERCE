import React from 'react';
import banner1 from '@/assets/images/banner1.jpg';

export default function Banner() {
  return (
    <div>
      <img src={banner1} alt='' className=' h-[200px] md:h-[500px]' />
    </div>
  );
}

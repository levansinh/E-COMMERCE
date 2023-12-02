import React, { useState } from 'react'
import imgage5 from 'src/assets/images/5.png'
import imgage1 from 'src/assets/images/1.png'
export default function ProductSlide() {
    const [srcImg, setSrcImg] = useState(imgage5)
  return (
    <div className='flex py-[16px] pl-[15px] pr-[30px]'>
      <div className='flex flex-col gap-y-3 pr-5'>
        <img src={imgage1} onClick={() => setSrcImg(imgage1)} className='w-[80px] h-[120px] ' alt='' />
        <img src={imgage1} className='w-[80px] h-[120px] ' alt='' />
        <img src={imgage1} className='w-[80px] h-[120px] ' alt='' />
      </div>
      <div className='flex items-center justify-center flex-1'>
        <img src={srcImg} className='w-[300px] h-[470px]' alt='' />
      </div>
    </div>
  )
}

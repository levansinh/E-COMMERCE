import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ProductItem() {
  const [isHeart, setIsHeart] = useState(false)
  return (
    <div>
      <div className=''>
        <div className=''>
          <img
            src='https://product.hstatic.net/200000696635/product/frame_2_2cd3c91f91254241bdaa5f2a464c8ffd_medium.png'
            className='w-full'
            alt=''
          />
        </div>
      </div>
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-[#666666] font-thin text-sm'>Khác</span>
          <span className='text-2xl hover:cursor-pointer' onClick={() => setIsHeart(!isHeart)}>
            {isHeart ? <FaHeart className='text-red-400' /> : <CiHeart />}
          </span>
        </div>
        <Link to={'/'} className='text-text hover:text-primary text-base font-bold'>
          Quần sao
        </Link>
        <p className='text-[#5505f9] text-base font-bold'>213123</p>
        <div className='flex items-center gap-x-3'>
          <span className='text-sm text-[#666666] line-through'>12312312</span>
          <span className='bg-red-600 text-white text-[10px] py-[2px] px-[4px] rounded-xl'>-21%</span>
        </div>
        <div className='flex items-center gap-x-2 px-1'>
          <div className='p-3 bg-red-300 rounded-full hover:cursor-pointer'></div>
          <div className='p-3 bg-blue-300 rounded-full hover:cursor-pointer'></div>
        </div>
      </div>
    </div>
  )
}

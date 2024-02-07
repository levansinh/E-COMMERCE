import React, { useEffect, useRef } from 'react';
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { HiMiniXMark } from 'react-icons/hi2';
import banner1 from '@/assets/images/clothes/aokhoac.png';
import Quantity from '@/components/Quantity';

interface Props {
  setSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SidebarCart({ setSidebarCart }: Props) {
  const sidebarCartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarCartRef.current && !sidebarCartRef.current.contains(event.target as Node)) {
        setSidebarCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSidebarCart]);
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50  '>
      <div ref={sidebarCartRef} className='absolute bg-white w-[340px] h-screen right-0 flex flex-col justify-between'>
        <div className='w-full h-[74px] flex items-center justify-between px-[20px] border-b '>
          <div className=' flex items-center gap-x-2'>
            <span>
              <FaShoppingBag />
            </span>
            <div className='flex items-center gap-x-1 text-sm'>
              <span>4</span>
              <span>item</span>
            </div>
          </div>
          <div onClick={() => setSidebarCart(false)}>
            <FaArrowRight />
          </div>
        </div>
        <div className='h-screen flex-1 overflow-y-scroll'>
          <div className='flex items-center gap-x-3 px-4 justify-between border-b border-gray-50'>
            <div className=''>
              <Quantity flexCol />
            </div>
            <div className='flex items-center gap-x-4 flex-1 py-4'>
              <img src={banner1} className='w-[70px] h-[70px]' alt='123' />
              <div className=''>
                <h3 className='text-base text-text'>asdsad</h3>
                <div className='text-xs text-[#666666] flex gap-x-2'>
                  <span>12321</span>
                  <span>x</span>
                  <span>1</span>
                </div>
                <p className='text-base text-primary '>213.213đ</p>
              </div>
            </div>
            <div className='text-2xl'>
              <HiMiniXMark />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-y-3 px-3 py-4 w-full border-t'>
          <button className='bg-primary text-white font-bold rounded-md text-sm py-3'>Thanh toán ngay</button>
          <button className='bg-primary text-white font-bold rounded-md text-sm py-3'>Giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}

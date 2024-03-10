import { Badge } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

import { PUBLIC_URL } from '@/constants/routerUrl';
import TooltipCustom from '@/components/Tooltip/TooltipCustom';
interface IProductItem {
  data?: [];
}

export default function ProductItem({ data }: IProductItem) {
  const [isHeart, setIsHeart] = useState(false);
  return (
    <div className='h-[415px] w-[250px] border border-gray-300'>
      <div className='h-[300px] w-full'>
        <Link to={PUBLIC_URL.product.detail('123')}>
          <img
            src='https://product.hstatic.net/200000696635/product/frame_2_2cd3c91f91254241bdaa5f2a464c8ffd_medium.png'
            className='w-full h-full object-cover'
            alt=''
          />
        </Link>
      </div>
      <div className=' px-2'>
        <div className='flex items-center justify-between w-full'>
          <span className='text-[#666666] font-thin text-sm'>Khác</span>
          <span className='text-2xl hover:cursor-pointer' onClick={() => setIsHeart(!isHeart)}>
            {isHeart ? <FaHeart className='text-red-400' /> : <CiHeart />}
          </span>
        </div>
        <Link to={PUBLIC_URL.product.detail('123')} className='text-text hover:text-[#155BF6] text-base font-[500]'>
          Quần sao
        </Link>
        <div className='flex items-center justify-between'>
          <p className='text-[#155BF6] font-bold text-xl'>213123</p>
          <div className='flex items-center gap-x-3 pr-5'>
            <span className='text-sm text-[#666666] line-through'>12312312</span>
            <Badge size='sm' content='-21%' color='danger' children={undefined} />
          </div>
        </div>
        <div className='flex items-center gap-x-2 px-1 mt-2'>
          <TooltipCustom content='Hồng'>
            <span className='p-3 bg-red-300 rounded-full hover:cursor-pointer' />
          </TooltipCustom>
          <TooltipCustom content='Xanh'>
            <span className='p-3 bg-blue-300 rounded-full hover:cursor-pointer' />
          </TooltipCustom>
        </div>
      </div>
    </div>
  );
}

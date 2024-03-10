import { useState } from 'react';
import { BsList } from 'react-icons/bs';

import Navigate from '../Navigate';
import Action from '../Action';
import { logoPrimaryColor } from '@/assets/images';
import Sidebar from '../SideBar';

export default function Header() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  return (
    <div className='sticky top-0 shadow-md bg-white z-50 w-full flex items-center justify-between px-[20px] md:px-[65px] h-[65px] box'>
      <div
        className={`text-2xl cursor-pointer block md:hidden ease-linear ${isShowSidebar ? 'transform rotate-90 ' : ''}`}
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        <BsList />
      </div>
      <img src={logoPrimaryColor} alt='logo-image' />
      <div className='hidden md:block'>
        <Navigate />
      </div>
      <div className='w-[150px] md:w-[200px]'>
        <Action />
      </div>
      {isShowSidebar ? <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} /> : null}
    </div>
  );
}

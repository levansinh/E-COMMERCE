import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AUTH_URL, PUBLIC_URL } from '@/constants/routerUrl';
import avatar from '@/assets/images/avatar.png';
import { CurrentUser } from '@/types/auth';

const listNavigate = [
  { lable: 'Trang chủ', path: PUBLIC_URL.home },
  { lable: 'Sản phẩm', path: PUBLIC_URL.product.index },
  { lable: 'Tin tức', path: PUBLIC_URL.blog },
  { lable: 'Giới thiệu', path: PUBLIC_URL.introduce },
  { lable: 'Liên hệ', path: PUBLIC_URL.contact }
];
interface Props {
  isShowSidebar: boolean;
  setIsShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Sidebar({ setIsShowSidebar }: Props) {
  const { pathname } = useLocation();
  const { firstName, lastName } = auth.currentUser as CurrentUser;

  const sidebarRef = useRef<HTMLDivElement>(null);
  const activeNav = listNavigate.findIndex((item) => item.path === pathname);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsShowSidebar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsShowSidebar]);

  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 z-50 `}>
      <div ref={sidebarRef} className='bg-white w-[300px] h-screen animate-slide-right'>
        <div className='bg-text text-white text-sm flex items-center h-[100px] px-[15px] gap-x-3 '>
          <div className='flex items-center gap-x-3'>
            <img src={avatar} className='w-[50px] h-[50px]' alt='' />
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className='text-xl'>Tài khoản</span>
            {firstName ? (
              <span>{`${firstName} ${lastName}`}</span>
            ) : (
              <span className='text-sm'>
                <Link to={AUTH_URL.login}>Đăng nhập</Link>
              </span>
            )}
          </div>
        </div>
        <div className={`flex gap-x-4 flex-col `}>
          {listNavigate.length !== 0 &&
            listNavigate.map((item, index) => (
              <Link
                className={`px-[15px] py-[10px] text-[16px] ${
                  activeNav === index ? 'text-primary font-bold' : 'text-text font-thin'
                }`}
                to={item.path}
                key={index}
              >
                {item.lable}
              </Link>
            ))}
          <div className={`px-[15px] py-[10px] text-[16px] text-text font-thin `}>Đăng xuất</div>
        </div>
        <div className='absolute bottom-0 flex bg-gray-100 w-[300px] px-3 py-4 text-primary text-center font-bold'>
          <div className='flex-1 border-r-2 border-gray-400'>
            <span>Gọi điện</span>
            <span></span>
          </div>
          <div className='flex-1'>
            <span>Nhắn tin</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

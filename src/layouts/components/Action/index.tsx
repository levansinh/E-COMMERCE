import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '@nextui-org/react';
import { FaSearch, FaRegUser, FaShoppingBag, FaRegHeart } from 'react-icons/fa';
import avatar from '@/assets/images/avatar.png';

import DropdownLanguage from '../DropdownLanguage';
import { RootState } from '@/store/store';
import Dropdown from '../Dropdown';
import { AUTH_URL, PRIVATE_URL } from '@/routes/urls';
import { CurrentUser } from '@/types/auth';
import SidebarCart from '../SidebarCart';
import { useState } from 'react';
interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Action({ setOpenModal, openModal }: Props) {
  const [sidebarCart, setSidebarCart] = useState(false);
  console.log(sidebarCart);
  const auth = useSelector((state: RootState) => state.auth);
  const { firstName, lastName, _id } = auth.currentUser as CurrentUser;
  const fullName = firstName + lastName;
  const dataDropDown = [
    { label: fullName, path: '#' },
    { label: 'Trang cá nhân', path: PRIVATE_URL.profile },
    { label: 'Đăng xuất', path: AUTH_URL.logout }
  ];

  return (
    <div className='flex items-center text-xl gap-x-4 justify-between '>
      <div className='w-[40px]'>
        <DropdownLanguage />
      </div>
      <div className=' cursor-pointer' onClick={() => setOpenModal(!openModal)}>
        <FaSearch />
      </div>
      <div className=' cursor-pointer hidden md:block'>
        {_id ? <Dropdown avatar={avatar} data={dataDropDown} /> : <FaRegUser />}
      </div>
      <div className='relative cursor-pointer'>
        <Badge color='danger' size='md' content='1'>
          <FaRegHeart />
        </Badge>
      </div>
      <div className='relative cursor-pointer'>
        <Badge onClick={() => setSidebarCart(true)} color='danger' size='md' content='1'>
          <FaShoppingBag className='text-xl' />
        </Badge>
        {sidebarCart && <SidebarCart setSidebarCart={setSidebarCart} />}
      </div>
    </div>
  );
}

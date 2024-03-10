import { Badge } from '@nextui-org/react';
import { useState } from 'react';
import { FaSearch, FaShoppingBag, FaRegHeart } from 'react-icons/fa';

import LanguageDropdown from '../Dropdown/LanguageDropDown';
import AuthenDropDown from '../Dropdown/AuthenDropDown';
import SidebarCart from '../SidebarCart';
import ModalHeader from '../ModalHeader';

export default function Action() {
  const [sidebarCart, setSidebarCart] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className='flex items-center text-xl gap-x-4 justify-between '>
        <LanguageDropdown />
        <FaSearch onClick={() => setOpenModal(!openModal)} />
        <AuthenDropDown />
        <Badge color='danger' size='md' content='1'>
          <FaRegHeart />
        </Badge>
        <Badge onClick={() => setSidebarCart(true)} color='danger' size='md' content='1'>
          <FaShoppingBag className='text-xl' />
        </Badge>
      </div>
      {sidebarCart && <SidebarCart setSidebarCart={setSidebarCart} />}
      {openModal ? <ModalHeader /> : null}
    </>
  );
}

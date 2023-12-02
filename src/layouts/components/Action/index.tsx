import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from 'flowbite-react'
import { FaSearch, FaRegUser, FaShoppingBag, FaRegHeart } from 'react-icons/fa'
import avatar from 'src/assets/images/avatar.png'

import DropdownLanguage from '../DropdownLanguage'
import { RootState } from 'src/store/store'
import Dropdown from '../Dropdown'
import { PATH_AUTH, PATH_PRIVATE } from 'src/routes/path'
import { CurrentUser } from 'src/common/auth'
import SidebarCart from '../SidebarCart'
import { useState } from 'react'
interface Props {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Action({ setOpenModal, openModal }: Props) {
  const [sidebarCart, setSidebarCart] = useState(false)
  console.log(sidebarCart)
  const auth = useSelector((state: RootState) => state.auth)
  const { firstName, lastName, _id } = auth.currentUser as CurrentUser
  const fullName = firstName + lastName
  const dataDropDown = [
    { label: fullName, path: '#' },
    { label: 'Trang cá nhân', path: PATH_PRIVATE.profile },
    { label: 'Đăng xuất', path: PATH_AUTH.logout }
  ]

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
        <FaRegHeart />
        <Badge color='gray' size='xs' className='absolute -top-3 -right-2 bg-red-400 text-white rounded-full '>
          1
        </Badge>
      </div>
      <div className='relative cursor-pointer'>
        <div className='' onClick={() => setSidebarCart(true)}>
          <FaShoppingBag className='text-xl' />
        </div>
        <Badge color='gray' size='xs' className='absolute -top-3 -right-2 bg-red-400 text-white rounded-full '>
          1
        </Badge>
        {sidebarCart && <SidebarCart setSidebarCart={setSidebarCart} />}
      </div>
    </div>
  )
}

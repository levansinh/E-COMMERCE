import { Badge } from 'flowbite-react'
import { FaSearch, FaRegUser, FaShoppingBag, FaRegHeart } from 'react-icons/fa'

import DropdownLanguage from '../DropdownLanguage'
interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Action({setOpenModal, openModal}: Props) {
  return (
    <div className='flex align-center text-xl gap-x-4 '>
      <div className=''>
        <DropdownLanguage />
      </div>
      <div className=' cursor-pointer' onClick={() => setOpenModal(!openModal)}>
        <FaSearch />
      </div>
      <div className=' cursor-pointer'>
        <FaRegUser />
      </div>
      <div className='relative cursor-pointer'>
        <FaRegHeart />
        <Badge color='gray' size='xs' className='absolute -top-3 -right-2 bg-red-400 text-white rounded-full '>
          1
        </Badge>
      </div>
      <div className='relative cursor-pointer'>
        <FaShoppingBag />
        <Badge color='gray' size='xs' className='absolute -top-3 -right-2 bg-red-400 text-white rounded-full '>
          1
        </Badge>
      </div>
    </div>
  )
}

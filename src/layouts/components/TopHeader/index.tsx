import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

export default function TopHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div
      className={`${isOpen ? 'flex items-center justify-center h-[40px]' : 'hidden'} w-full bg-primary text-white  `}
    >
      <h2 className='text-center'> FREESHIP VỚI ĐƠN HÀNG TỪ 500K</h2>
      <div className='absolute right-4 rounded-full p-2 bg-white text-text cursor-pointer' onClick={handleClose}>
        <FaXmark />
      </div>
    </div>
  )
}

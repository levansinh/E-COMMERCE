import React from 'react'
import Filter from '../Filter'
import { FaArrowLeft } from 'react-icons/fa'

interface Props {
  setOpenModalFilter: React.Dispatch<React.SetStateAction<boolean>>
}
export default function ModalFilter({ setOpenModalFilter }: Props) {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 '>
      <div className='bg-white w-[250px] absolute right-0 top-0 bottom-0 animate-slide-left'>
        <div className='flex items-center gap-x-3 my-3 pl-3'>
          <div className='hover:cursor-pointer' onClick={() => setOpenModalFilter(false)}>
            <FaArrowLeft />
          </div>
          <div className=''>Tìm theo</div>
        </div>
        <Filter />
      </div>
    </div>
  )
}

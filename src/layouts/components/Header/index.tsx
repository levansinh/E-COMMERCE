import React from 'react'
import { BsList } from 'react-icons/bs'

import Navigate from '../Navigate'
import Action from '../Action'
import { logoPrimaryColor } from 'src/assets/images'
import { useState } from 'react'
import Search from '../Search'

export default function Header() {
  const [openModal, setOpenModal] = useState(true)

  return (
    <div className='w-full flex items-center justify-between px-[30px] md:px-[65px] h-[65px] '>
      <div className='text-2xl cursor-pointer block md:hidden'>
        <BsList />
      </div>
      <div className=''>
        <img src={logoPrimaryColor} alt='' />
      </div>
      <div className='hidden md:block'>
        <Navigate />
      </div>
      <div className=''>
        <Action setOpenModal={setOpenModal} openModal={openModal} />
      </div>

      {openModal && (
        <>
          <div className='overflow-x-hidden w-full overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-full bg-white flex items-center justify-between px-[60px] h-[129px]'>
              <div className='hidden md:block'>
                <img src={logoPrimaryColor} alt='logo' />
              </div>
              <div className=''>
                <Search />
              </div>
              <div className='hidden md:block'>
                <Action setOpenModal={setOpenModal} openModal={openModal} />
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      )}
    </div>
  )
}

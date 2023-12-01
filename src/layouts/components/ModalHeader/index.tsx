import React, { useEffect, useRef } from 'react'
import Action from '../Action'
import Search from '../Search'
import { logoPrimaryColor } from 'src/assets/images'

interface Props {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalHeader({ setOpenModal, openModal }: Props) {
  const modalHeaderRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalHeaderRef.current && !modalHeaderRef.current.contains(event.target as Node)) {
        setOpenModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpenModal])
  return (
    <>
      <div className='overflow-x-hidden w-full overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div
          ref={modalHeaderRef}
          className='relative w-full bg-white flex items-center justify-between px-[60px] h-[129px] animate-slide-bottom'
        >
          <div className='hidden md:block'>
            <img src={logoPrimaryColor} alt='logo' />
          </div>
          <div className=''>
            <Search />
          </div>
          <div className='hidden md:block w-[200px]'>
            <Action setOpenModal={setOpenModal} openModal={openModal} />
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  )
}

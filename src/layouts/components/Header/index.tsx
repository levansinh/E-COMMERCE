import { BsList } from 'react-icons/bs'

import Navigate from '../Navigate'
import Action from '../Action'
import { logoPrimaryColor } from 'src/assets/images'
import { useState } from 'react'
import Sidebar from '../SideBar'
import ModalHeader from '../ModalHeader'

export default function Header() {
  const [openModal, setOpenModal] = useState(false)
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  return (
    <div className='w-full flex items-center justify-between px-[20px] md:px-[65px] h-[65px] '>
      <div
        className={`text-2xl cursor-pointer block md:hidden ease-linear ${isShowSidebar ? 'transform rotate-90 ' : ''}`}
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        <BsList />
      </div>
      <div className=''>
        <img src={logoPrimaryColor} alt='' />
      </div>
      <div className='hidden md:block'>
        <Navigate />
      </div>
      <div className='w-[150px] md:w-[200px]'>
        <Action setOpenModal={setOpenModal} openModal={openModal} />
      </div>
      {isShowSidebar && <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} />}
      {openModal && <ModalHeader openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  )
}

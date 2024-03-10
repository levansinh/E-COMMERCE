import Action from '../Action';
import Search from '../Search';
import { logoPrimaryColor } from '@/assets/images';

export default function ModalHeader() {
  return (
    <>
      <div className='overflow-x-hidden w-full overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-full bg-white flex items-center justify-between px-[60px] h-[129px] animate-slide-bottom'>
          <div className='hidden md:block'>
            <img src={logoPrimaryColor} alt='logo' />
          </div>
          <Search />
          <div className='hidden md:block w-[200px]'>
            <Action />
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}

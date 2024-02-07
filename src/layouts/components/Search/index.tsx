import { IoIosSearch } from 'react-icons/io';

export default function Search() {
  return (
    <div className='flex flex-col gap-2 '>
      <div className='bg-white border rounded-[25px] md:min-w-[600px] h-[45px] overflow-hidden flex items-center justify-between pl-2 pr-[2px]'>
        <input
          type='text'
          placeholder='Tìm theo tên sản phẩm ....'
          className='px-[20px] py-2 border-none outline-none flex-1 text-sm md:text-md'
        />
        <button className='bg-text text-white px-5 py-[9px] rounded-[25px] text-xl'>
          <IoIosSearch />
        </button>
      </div>
      <div className='flex items-center gap-x-3'>
        <span className='text-[12px] text-[#666666] cursor-pointer hover:border-b'>Áo sơ mi</span>
        <span className='text-[12px] text-[#666666] cursor-pointer hover:border-b'>Áo thun</span>
        <span className='text-[12px] text-[#666666] cursor-pointer hover:border-b'>Quần</span>
      </div>
    </div>
  );
}

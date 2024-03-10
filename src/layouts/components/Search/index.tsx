import { FormProvider, useForm } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';

import InputSearch from '@/components/Input/InputSearch';

export default function Search() {
  const methods = useForm({
    defaultValues: {
      search: ''
    }
  });

  const { handleSubmit } = methods;

  const submitHandler = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className='flex flex-col gap-2 '>
      <FormProvider {...methods}>
        <form onSubmit={submitHandler}>
          <div className='bg-white border rounded-[25px] md:min-w-[600px] h-[45px] overflow-hidden flex items-center justify-between pr-1'>
            <div className='flex-1 bg-white'>
              <InputSearch name='search' id='search' className='w-full bg-white' />
            </div>

            <button className='bg-text text-white px-5 py-[9px] rounded-[25px] text-xl'>
              <IoIosSearch />
            </button>
          </div>
        </form>
      </FormProvider>
      <div className='flex items-center gap-x-3 h-[30px] pl-2'>
        <span className='text-[12px] text-[#666666] cursor-pointer hover:border-b'>Áo sơ mi</span>
        <span className='text-[12px] text-[#666666] cursor-pointer hover:border-b'>Áo thun</span>
        <span className='text-[12px] text-[#666666] cursor-pointer hover:border-b'>Quần</span>
      </div>
    </div>
  );
}

import { Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import BreadCrumb from '@/components/Breadcrumb';
import Filter from '@/components/Filter';
import ModalFilter from '@/components/ModalFilter';
import ProductItem from '@/components/ProductItem';

const dataBreadCrumb = [
  { label: 'Danh mục', path: '/' },
  { label: 'Tất cả sản phẩm', path: '/products' }
];
const optionSoft = [
  { value: 's', label: 'Tên A - Z' },
  { value: 'sad', label: 'Tên Z - A ' },
  { value: 'asd', label: 'Giá tăng dần' },
  { value: 'asd', label: 'Giá giảm dần' },
  { value: 'asasd', label: 'Hàng mới' }
];

function ProductPage() {
  const [openModalFilter, setOpenModalFilter] = useState(false);
  return (
    <div className=''>
      <BreadCrumb data={dataBreadCrumb} />
      <div className='flex justify-between md:items-center flex-col md:flex-row my-4'>
        <h1>Tất cả sản phẩm</h1>
        <div className='flex items-center my-3 md:my-0 justify-between gap-x-2'>
          <div className='flex items-center gap-x-2 min-w-14'>
            <div className='text-sm'>Sắp xếp: </div>
            <Select label='Select an animal' className='max-w-xs'>
              {optionSoft.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <div className='block md:hidden hover:cursor-pointer ' onClick={() => setOpenModalFilter(true)}>
              <FaFilter />
            </div>
            <div className={`${openModalFilter ? 'block' : 'hidden'}`}>
              <ModalFilter setOpenModalFilter={setOpenModalFilter} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-x-2'>
        <div className='w-[300px] hidden md:block  '>
          <Filter />
        </div>
        <div className=' flex-1 '>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
}
export const Component = ProductPage;

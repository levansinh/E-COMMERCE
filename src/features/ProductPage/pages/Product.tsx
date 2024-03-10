import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import BreadCrumb from '@/components/Breadcrumb/Breadcrumb';
import Filter from '@/features/ProductPage/components/Filter/Filter';
import ModalFilter from '@/components/ModalFilter';
import ProductList from '../components/ProductList';

const dataBreadCrumb = [
  { label: 'Danh mục', path: '/' },
  { label: 'Tất cả sản phẩm', path: '/products' }
];
const optionSort = [
  { value: 's', label: 'Tên A - Z' },
  { value: 'sad', label: 'Tên Z - A ' },
  { value: 'asd', label: 'Giá tăng dần' },
  { value: 'assd', label: 'Giá giảm dần' },
  { value: 'asasd', label: 'Hàng mới' }
];

function ProductPage() {
  const [openModalFilter, setOpenModalFilter] = useState<boolean>(false);
  return (
    <>
      <BreadCrumb data={dataBreadCrumb} />
      <div className='flex justify-between md:items-center flex-col md:flex-row my-4'>
        <h1>Tất cả sản phẩm</h1>
        <div className='flex items-center my-3 md:my-0 justify-between gap-x-2'>
          {openModalFilter ? (
            <>
              <div className='block md:hidden hover:cursor-pointer ' onClick={() => setOpenModalFilter(true)}>
                <FaFilter />
              </div>
              <div className={`${openModalFilter ? 'block' : 'hidden'}`}>
                <ModalFilter setOpenModalFilter={setOpenModalFilter} />
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className='flex gap-x-2'>
        <div className='w-[350px] hidden md:block  '>
          <Filter />
        </div>
        <div className='flex-1'>
          <ProductList />
        </div>
      </div>
    </>
  );
}
export default ProductPage;

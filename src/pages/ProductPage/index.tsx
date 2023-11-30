import { Select } from 'flowbite-react'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import BreadCrumb from 'src/components/Breadcrumb'
import Filter from 'src/components/Filter'
import ModalFilter from 'src/components/ModalFilter'
import ProductItem from 'src/components/ProductItem'

const dataBreadCrumb = [
  { label: 'Danh mục', path: '/' },
  { label: 'Tất cả sản phẩm', path: '/products' }
]

function ProductPage() {
  const [openModalFilter, setOpenModalFilter] = useState(false)
  return (
    <div className=''>
      <BreadCrumb data={dataBreadCrumb} />
      <div className='flex justify-between md:items-center flex-col md:flex-row my-4'>
        <h1>Tất cả sản phẩm</h1>
        <div className='flex items-center my-3 md:my-0 justify-between gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <div className='text-sm'>Sắp xếp: </div>
            <Select id='countries' required>
              <option>Tên A - Z </option>
              <option>Tên Z - A </option>
              <option>Giá tăng dần</option>
              <option>Giá giảm dần</option>
              <option>Hàng mới</option>
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
  )
}
export const Component = ProductPage

import React from 'react'
import clothes1 from 'src/assets/images/clothes/aokhoac.png'
import clothes2 from 'src/assets/images/clothes/aosomi.png'
import clothes3 from 'src/assets/images/clothes/aothun.png'
import clothes4 from 'src/assets/images/clothes/quandai.png'
import clothes5 from 'src/assets/images/clothes/quanjean.png'
import clothes6 from 'src/assets/images/clothes/quanshort.png'

const dataCategory = [
  { image: clothes1, title: 'Áo khoác', subTitle: '8 sản phẩm' },
  { image: clothes2, title: 'Áo sơ mi', subTitle: '8 sản phẩm' },
  { image: clothes3, title: 'Áo thun', subTitle: '8 sản phẩm' },
  { image: clothes4, title: 'Quần dài', subTitle: '8 sản phẩm' },
  { image: clothes5, title: 'Quần jean', subTitle: '8 sản phẩm' },
  { image: clothes6, title: 'Quần short', subTitle: '8 sản phẩm' }
]

export default function ParamCategory() {
  return (
    <div className='my-10'>
      <h2 className='text-center text-[32px] font-[600s]'>Thời trang EGA</h2>
      <div className='grid grid-cols-6 mt-4'>
        {dataCategory.map((item, index) => (
          <div className='flex items-center justify-center flex-col' key={index}>
            <div className='rounded-full overflow-hidden'>
              <img src={item.image} alt='' className='w-[189px] h-[189px]' />
            </div>
            <h3 className='text-md mt-2 font-[500]'>{item.title}</h3>
            <p className='text-[#666666] text-sm'>{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
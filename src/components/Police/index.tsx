import React from 'react'
import { FaShippingFast, FaGift, FaMedal, FaHeadphones } from 'react-icons/fa'

const dataPolices = [
  { icon: <FaShippingFast />, title: 'Miễn phí vận chuyển', subTitle: 'Nhận hàng trong vòng 3 ngày' },
  { icon: <FaGift />, title: 'Quà tặng hấp dẫn', subTitle: 'Nhiều ưu đãi khuyến mãi hot' },
  { icon: <FaMedal />, title: 'Bảo đảm chất lượng', subTitle: 'Sản phẩm đã được kiểm định' },
  { icon: <FaHeadphones />, title: 'Hotline: 19001993', subTitle: 'Dịch vụ hỗ trợ bạn 24/7' }
]

export default function Police() {
  return (
    <div className='grid grid-cols-4 my-5'>
      {dataPolices.map((item, index) => (
        <div className='flex items-center justify-center gap-x-3' key={index}>
          <div className='text-3xl text-primary '>{item.icon}</div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-text text-base font-bold'>{item.title}</h2>
            <p className='text-[#666666] text-sm'>{item.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

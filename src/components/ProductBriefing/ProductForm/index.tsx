import React from 'react';
import { Link } from 'react-router-dom';
import Quantity from '@/components/Quantity';

export default function ProductForm() {
  return (
    <div className='p-[16px]'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold'>Áo thun nam </h2>
        <span></span>
      </div>
      <div className='flex items-center text-sm gap-x-4'>
        <span>
          Thương hiệu:
          <Link to={'/'} className='text-primary'>
            Khác
          </Link>
        </span>
        <span>
          Mã sản phẩm: <span className='text-primary'>Đang cập nhật</span>
        </span>
      </div>
      <div className='mt-5 mb-3'>
        <div className='flex items-center gap-x-2'>
          <span className='text-[20px] text-primary font-bold'>999,999đ</span>
          <span className='text-[#979797] text-[16px] line-through'>888,888đ</span>
          <span className='bg-red-500 py-1 px-[6px] text-white rounded-xl text-xs'>-54%</span>
        </div>
        <div className='text-sm'>
          (Tiết kiệm <span className='text-primary'>701,000đ</span> )
        </div>
      </div>
      <div className='border-2 border-dashed pb-5 px-8 border-primary rounded-md'>
        <p className='text-primary text-base font-bold pt-2'>Khuyến mãi - Ưu đãi</p>
        <ul className='text-sm list-disc pt-2'>
          <li>
            Nhập mã <strong>EGAFREESHIP</strong> miễn phí vận chuyển đơn hàng
          </li>
          <li>Đồng giá ship toàn quốc 25k</li>
          <li>Hỗ trợ 20k phí ship cho đơn hàng từ 200.000đ</li>
          <li>Miễn phí ship cho đơn hàng từ 500.000đ</li>
          <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
        </ul>
      </div>
      <div className='my-2'>
        <h3 className='text-md'>
          Màu sắc: <span className='text-sm font-thin'> Nâu</span>
        </h3>
        <div className='flex items-center gap-x-2 px-2'>
          <div className=''>nâu</div>
          <div className=''>đỏ</div>
        </div>
      </div>
      <div className='flex items-center gap-x-3'>
        <div className=''>
          <Quantity />
        </div>
        <div className='flex-1'>
          <button className='w-full border py-2 rounded-md hover:bg-primary hover:text-white font-bold text-primary'>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <button className='text-sm w-full my-3 bg-primary text-white py-3 rounded-md'>Mua ngay</button>
      <div className='text-center text-md pb-5 border-b border-dashed w-full'>
        Gọi đặt mua 1800.0000 ( 7:30 - 22:00 )
      </div>
    </div>
  );
}

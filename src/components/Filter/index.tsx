import Checkbox from '../Checkbox'

export default function Filter() {
  return (
    <div className='px-[10px] py-[15px]'>
      <div className='flex flex-col gap-y-2 border-b py-4'>
        <h3>MỨC GIÁ</h3>
        <div className='flex flex-col gap-y-2'>
          <Checkbox label='Giá dưới 1,000,000đ' />
          <Checkbox label=' 1,000,000đ - 2,000,000đ' />
          <Checkbox label=' 2,000,000đ - 3,000,000đ' />
          <Checkbox label=' 3,000,000đ - 4,000,000đ' />
          <Checkbox label=' 4,000,000đ - 5,000,000đ' />
          <Checkbox label=' 5,000,000đ - 7,000,000đ' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 border-b py-4'>
        <h3>DỊCH VỤ GIAO HÀNG</h3>
        <div className='flex flex-col gap-y-2'>
          <Checkbox label='Miễn phí giao hàng' />
          <Checkbox label='Giao hàng nhanh 4h' />
          <Checkbox label='Giao tiết kiệm' />
        </div>
      </div>
    </div>
  )
}

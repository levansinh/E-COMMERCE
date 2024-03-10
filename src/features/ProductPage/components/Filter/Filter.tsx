import CheckboxCustom from '../../../../components/Checkbox/CheckBoxCustom';
import { PRICE_OPTIONS, SHIP_OPTIONS } from '../../constants/checkboxDefault';

const Filter = () => {
  return (
    <div className='px-[10px] py-[15px]'>
      <div className='flex flex-col gap-y-2 border-b py-4'>
        <h3>MỨC GIÁ</h3>
        <div className='flex flex-col gap-y-2'>
          {PRICE_OPTIONS.map((item, index) => (
            <CheckboxCustom key={index} name='price' value={item.value} label={item.label} />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-y-2 border-b py-4'>
        <h3>DỊCH VỤ GIAO HÀNG</h3>
        <div className='flex flex-col gap-y-2'>
          {SHIP_OPTIONS.map((item, index) => (
            <CheckboxCustom key={index} name='shipping' value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Filter;

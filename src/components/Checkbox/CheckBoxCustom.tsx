import { Checkbox, CheckboxProps } from '@nextui-org/react';
import { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ICheckboxCustom extends CheckboxProps {
  label?: ReactNode;
  name: string;
  value?: string;
}

const CheckboxCustom = ({ label, name, value, ...passProps }: ICheckboxCustom) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = () => {
    searchParams.set(name, value as string);
    setSearchParams(searchParams);
  };
  return (
    <div className='text-base flex gap-x-6 items-center'>
      <Checkbox onChange={handleChange} {...passProps} className='w-5 h-5' />
      <label className='text-sm'>{label}</label>
    </div>
  );
};
export default CheckboxCustom;

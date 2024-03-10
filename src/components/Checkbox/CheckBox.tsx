import { Controller, useFormContext } from 'react-hook-form';
import { ReactNode } from 'react';
import { CheckboxProps, Checkbox } from '@nextui-org/react';

interface ICCheckbox extends CheckboxProps {
  label?: ReactNode;
  name: string;
  required?: boolean;
}

const CheckboxValidate = ({ label, name, required, ...passProps }: ICCheckbox) => {
  const {
    control
    // formState: { errors }
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className='text-base flex gap-x-2 items-center'>
          <Checkbox {...field} {...passProps} className='w-5 h-5' />
          <span className='text-sm'>
            {label} {required && <span className='text-red-400'>*</span>}
          </span>
        </div>
      )}
    />
  );
};
export default CheckboxValidate;

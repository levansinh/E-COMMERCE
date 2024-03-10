import { Input, InputProps } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';
import { ReactNode } from 'react';

interface IInputValidate extends InputProps {
  name: string;
  id: string;
  required?: boolean;
  label?: ReactNode;
  className?: string;
}

const InputValidate = ({ name, label, required = false, className, ...passProps }: IInputValidate) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className='mt-2'>
          {label ? (
            <label className='flex gap-1 items-center'>
              {label}
              {required && <span className='text-red-400'>*</span>}
            </label>
          ) : null}

          <Input labelPlacement='outside' {...field} {...passProps} />
          {errors[name] && <span>{errors[name]?.message as string}</span>}
        </div>
      )}
    />
  );
};

export default InputValidate;

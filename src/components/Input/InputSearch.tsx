import { Controller, useFormContext } from 'react-hook-form';
import { ReactNode } from 'react';

interface IInputSearch {
  name: string;
  id: string;
  required?: boolean;
  label?: ReactNode;
  className?: string;
}

const InputSearch = ({ name, label, required = false }: IInputSearch) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          {label ? (
            <label>
              {label}
              {required && <span>*</span>}
            </label>
          ) : null}

          <input
            className='w-full outline-none px-3 text-sm'
            placeholder='Tìm kiếm sản phẩm, nhãn hàng...'
            {...field}
          />
          {errors[name] && <span>{errors[name]?.message as string}</span>}
        </div>
      )}
    />
  );
};

export default InputSearch;

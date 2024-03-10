import ReactSelect, { Props, components } from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';
import { ReactNode } from 'react';

interface IOptions {
  label: string;
  value: string;
}

interface ISelectCustom extends Props {
  options: IOptions[];
  name: string;
  width?: number;
  label?: ReactNode;
  required?: boolean;
}

const SelectCustom = ({ options, name, width, label, required, ...passProps }: ISelectCustom) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ref, ...passField } }) => (
        <div
          style={{
            minWidth: `${width}px`
          }}
          className='mb-3'
        >
          {label && (
            <label className='mb-1 fw-semibold'>
              {label}
              {required && <span className='text-danger ms-1'>*</span>}
            </label>
          )}
          <ReactSelect
            styles={{
              control: (styleControl) => ({
                ...styleControl,
                cursor: 'pointer'
              }),
              multiValue: (base) => ({
                ...base,
                borderRadius: '8px'
              }),
              menuPortal: (base) => ({ ...base, zIndex: 9999 })
            }}
            className={errors[name] && 'border-danger'}
            // classNames={{
            //   singleValue: (value) => (value.isDisabled ? 'text-dark' : ''),
            //   control: () => cx('select'),
            //   option({ isDisabled }) {
            //     if (isDisabled) return 'bg-light';
            //     return '';
            //   },
            //   dropdownIndicator: () => (isHiddenDropdownIndicator ? 'd-none' : '')
            // }}
            isClearable
            menuPosition='fixed'
            menuPlacement='bottom'
            // onFocus={onFocus}
            options={options}
            components={components}
            {...passField}
            {...passProps}
          />

          {/* {errors[name] && (
            <ErrorMessage>
              <Trans>{errors[name]?.message as string}</Trans>
            </ErrorMessage>
          )} */}
        </div>
      )}
    />
  );
};
export default SelectCustom;

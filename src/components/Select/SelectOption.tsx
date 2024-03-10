import { Select, SelectItem, SelectProps } from '@nextui-org/react';

interface ISelectOption extends Omit<SelectProps, 'children'> {
  options: {
    label: string;
    value: string;
  }[];
}

const SelectOption = ({ options, ...passProps }: ISelectOption) => {
  return (
    <Select {...passProps} labelPlacement='outside-left' className='min-w-[150px]'>
      {options.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};
export default SelectOption;

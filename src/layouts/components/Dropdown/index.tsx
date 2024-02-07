import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DataInput {
  label?: string;
  path: string;
  onClick?: () => void;
}
interface Props {
  text?: string;
  avatar?: string;
  size?: string;
  data?: DataInput[];
  icon?: JSX.Element;
}
export default function Dropdown({ text, avatar, size, data, icon }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className='relative inline-block text-left'>
      <div className={`text-[${size}]`}>
        <div
          className={`inline-flex text-xl justify-center rounded-md  font-semibold text-gray-900`}
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
          onClick={() => setOpen(!open)}
        >
          {avatar && <img src={avatar} className='-xl' alt='' />}
          {text && text}
          {icon && icon}
        </div>
      </div>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute right-0 z-10 mt-2 w-[150px]  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex={-1}
      >
        <div className='py-1' role='none'>
          {data?.length === 0
            ? ''
            : data?.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={item?.onClick}
                  className='text-gray-700 block px-4 py-2 text-sm'
                  role='menuitem'
                  tabIndex={-1}
                  id='menu-item-0'
                >
                  {item?.label}
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}

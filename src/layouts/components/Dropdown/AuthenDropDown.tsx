import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { FaRegUser } from 'react-icons/fa';
import { changeLanguage } from 'i18next';

import avatar from '@/assets/images/avatar.png';

const AuthenDropDown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <span className='cursor-pointer hidden md:block'>{false ? avatar : <FaRegUser />}</span>
      </DropdownTrigger>
      <DropdownMenu aria-label='Action event example'>
        <DropdownItem key='en' onClick={() => changeLanguage('en')}>
          EN
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage('vi')} key='vi'>
          VI
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthenDropDown;

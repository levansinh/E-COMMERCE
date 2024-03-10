import { useTranslation } from 'react-i18next';
import { locales } from '@/i18n/i18n';
import { DropdownTrigger, DropdownMenu, Dropdown, DropdownItem } from '@nextui-org/react';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const currentLanguage = locales[i18n.language as keyof typeof locales];
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <div className='min-w-[50px] text-sm border cursor-pointer text-center rounded-md '>{currentLanguage}</div>
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
    </>
  );
};

export default LanguageDropdown;

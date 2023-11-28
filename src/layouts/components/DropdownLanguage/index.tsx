import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { locales } from 'src/i18n/i18n'

export default function DropdownLanguage() {
  const [isOpen, setIsOpen] = useState(false)
  const { i18n } = useTranslation()
  const currentLanguage = locales[i18n.language as keyof typeof locales]
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <div className='min-w-[50px]'>
      <div className='flex items-center gap-2 border pl-2 rounded-md' onClick={() => setIsOpen(!isOpen)}>
        <span className='text-text text-sm'>{currentLanguage}</span> <FaAngleDown className='text-sm' />
      </div>
      <div className={`max-h-0 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className=' border rounded-sm px-2 py-1 text-sm z-10'>
          <li onClick={() => changeLanguage('en')}>EN</li>
          <li onClick={() => changeLanguage('vi')}>VI</li>
        </ul>
      </div>
    </div>
  )
}

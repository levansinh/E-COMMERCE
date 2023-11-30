import { Link, useLocation } from 'react-router-dom'

import { PATH_PUBLIC } from 'src/routes/path'

const listNavigate = [
  { lable: 'Trang chủ', path: PATH_PUBLIC.home },
  { lable: 'Sản phẩm', path: PATH_PUBLIC.product },
  { lable: 'Tin tức', path: PATH_PUBLIC.blog },
  { lable: 'Giới thiệu', path: PATH_PUBLIC.introduce },
  { lable: 'Liên hệ', path: PATH_PUBLIC.contact }
]

export default function Navigate() {
  const { pathname } = useLocation()
  const activeNav = listNavigate.findIndex((item) => item.path === pathname)
  return (
    <div className={`flex items-center justify-between gap-x-4 `}>
      {listNavigate.length !== 0 &&
        listNavigate.map((item, index) => (
          <Link
            className={activeNav === index ? 'text-primary font-bold' : 'text-text font-thin'}
            to={item.path}
            key={index}
          >
            {item.lable}
          </Link>
        ))}
    </div>
  )
}

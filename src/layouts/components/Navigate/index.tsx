import { Link, useLocation } from 'react-router-dom';

import { PUBLIC_URL } from '@/routes/urls';

const listNavigate = [
  { lable: 'Trang chủ', path: PUBLIC_URL.home },
  { lable: 'Sản phẩm', path: PUBLIC_URL.product.index },
  { lable: 'Tin tức', path: PUBLIC_URL.blog },
  { lable: 'Giới thiệu', path: PUBLIC_URL.introduce },
  { lable: 'Liên hệ', path: PUBLIC_URL.contact }
];

export default function Navigate() {
  const { pathname } = useLocation();
  const activeNav = listNavigate.findIndex((item) => item.path === pathname);
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
  );
}

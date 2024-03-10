import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

import { PUBLIC_URL } from '@/constants/routerUrl';

interface IBreadCrumb {
  data: {
    label: string;
    path: string;
  }[];
}

const BreadCrumb = ({ data }: IBreadCrumb) => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <Link to={PUBLIC_URL.home}>
          <div className='flex items-center gap-1'>
            <HiHome />
            <span>Trang chủ</span>
          </div>
        </Link>
      </BreadcrumbItem>
      {data.map((item, index) => (
        <BreadcrumbItem key={index}>
          <Link to={item.path}>{item.label}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};
export default BreadCrumb;

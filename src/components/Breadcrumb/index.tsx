import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

interface Props {
  data: {
    label: string;
    path: string;
  }[];
}
export default function BreadCrumb({ data }: Props) {
  return (
    <div className='px-5 bg-[#f6f6f6] py-2 dark:bg-gray-800 mb-4 text-sm flex items-center gap-x-3 text-[#6172f1] font-[300]'>
      <Link to='/' className='flex items-center gap-2'>
        <span>
          <HiHome />
        </span>
        <span>Trang chủ</span>
      </Link>
      {data.map((item, index) => (
        <Link key={index} to={item.path}>
          <div>/ {item.label}</div>
        </Link>
      ))}
    </div>
  );
}

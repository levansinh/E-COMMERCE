import { Link } from 'react-router-dom';

import BreadCrumb from '@/components/Breadcrumb/Breadcrumb';
import { AUTH_URL } from '@/constants/routerUrl';
import FormLogin from '../components/Form/FormLogin';

const BreadCrumbData = [{ label: 'Đăng nhập', path: AUTH_URL.login }];

function SignInPage() {
  return (
    <>
      <BreadCrumb data={BreadCrumbData} />
      <div className='w-[500px] mx-auto my-8'>
        <h1 className='text-3xl text-center'>ĐĂNG NHẬP TÀI KHOẢN</h1>
        <p className='text-sm my-3 flex items-center gap-x-1 justify-center'>
          Bạn chưa có tài khoản ?
          <Link to={AUTH_URL.register} className='text-primary underline'>
            Đăng ký tại đây.
          </Link>
        </p>
        <FormLogin />
      </div>
    </>
  );
}
export default SignInPage;

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import TopHeader from '../components/TopHeader';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface IMainLayout {
  children: JSX.Element;
}

export default function MainLayout({ children }: IMainLayout) {
  const accessToken = localStorage.getItem('accessToken');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      if (pathname === '/auth/login' || pathname === '/auth/register') {
        navigate('/');
        toast.warning('Bạn đã đăng nhập');
      }
    }
  }, [accessToken, pathname, navigate]);
  return (
    <div>
      <TopHeader />
      <Header />
      <div className='px-[15px] md:px-[75px]'>{children}</div>
      <Footer />
    </div>
  );
}

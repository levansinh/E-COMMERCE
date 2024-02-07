import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
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
      <div className='px-[15px] md:px-[75px]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

import { Helmet } from 'react-helmet';

import Banner from '@/features/HomePage/components/Banner';
import Brand from '@/features/HomePage/components/Brand';
import ParamCategory from '@/features/HomePage/components/ParamCategory';
import Police from '@/features/HomePage/components/Police';
import SlideBanner from '@/features/HomePage/components/SlideBanner/SlideBanner';

function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Trang chủ</title>
        <meta name='description' content='Trang chủ' />
      </Helmet>

      <SlideBanner />
      <Police />
      <ParamCategory />
      <Banner />
      <Brand />
    </>
  );
}
export default HomePage;

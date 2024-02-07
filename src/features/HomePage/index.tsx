import Banner from '@/components/Banner';
import Brand from '@/components/Brand';
import ParamCategory from '@/components/ParamCategory';
import Police from '@/components/Police';
import Slider from '@/components/SlideBanner';

function HomePage() {
  return (
    <div className=''>
      <Slider />
      <Police />
      <ParamCategory />
      <Banner />
      <Brand />
    </div>
  );
}
export const Component = HomePage;

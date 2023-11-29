import Banner from 'src/components/Banner'
import Brand from 'src/components/Brand'
import ParamCategory from 'src/components/ParamCategory'
import Police from 'src/components/Police'
import Slider from 'src/components/SlideBanner'

function HomePage() {
  return (
    <div className=''>
      <Slider />
      <Police />
      <ParamCategory />
      <Banner />
      <Brand />
    </div>
  )
}
export const Component = HomePage

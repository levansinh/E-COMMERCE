import { Carousel } from 'flowbite-react'
import banner1 from 'src/assets/images/banner1.jpg'
import banner2 from 'src/assets/images/banner2.jpg'

export default function Slider() {
  return (
    <div className='h-[300px] md:h-[480px] '>
      <Carousel className='rounded-none -z-10'>
        <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
          <img src={banner1} alt='' />
        </div>
        <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
          <img src={banner2} alt='' />
        </div>
      </Carousel>
    </div>
  )
}

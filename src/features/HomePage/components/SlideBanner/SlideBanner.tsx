import { Slide } from 'react-slideshow-image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import 'react-slideshow-image/dist/styles.css';

import banner1 from '@/assets/images/banner1.jpg';
import banner2 from '@/assets/images/banner2.jpg';

const listImage = [banner1, banner2];

export default function SliderBanner() {
  const buttonStyle = {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '100%'
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <FaArrowLeft />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <FaArrowRight />
      </button>
    )
  };
  return (
    <div>
      <div className='rounded-none '>
        <Slide {...properties} indicators>
          {listImage.map((item, index) => (
            <div key={index} className='each-slide-effect'>
              <img src={item} alt='banner' />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

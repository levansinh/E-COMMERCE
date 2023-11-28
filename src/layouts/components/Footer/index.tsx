import { SiGooglemaps } from 'react-icons/si'
import { IoLogoFacebook, IoLogoYoutube, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { FaMobileAlt, FaCopyright, FaCcAmazonPay, FaCcPaypal, FaCcApplePay, FaGooglePay } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { logoWhiteColor } from 'src/assets/images'
import { Link } from 'react-router-dom'

const policy = [
  { lable: 'Giới thiệu', path: '/' },
  { lable: 'Hệ thống cửa hàng', path: '/' },
  { lable: 'Câu hỏi thường gặp', path: '/' },
  { lable: 'Gọi điện đặt hàng', path: '/' }
]

const support = [
  { lable: 'Liên hệ', path: '/' },
  { lable: 'Chính sách bán hàng', path: '/' },
  { lable: 'Chính sách giao hàng', path: '/' },
  { lable: 'Chính sách đổi trả', path: '/' }
]

const social = [
  { icon: <IoLogoFacebook />, path: '/' },
  { icon: <IoLogoYoutube />, path: '/' },
  { icon: <IoLogoInstagram />, path: '/' },
  { icon: <IoLogoTwitter />, path: '/' }
]

const payment = [
  { icon: <FaCcAmazonPay />, path: '/' },
  { icon: <FaCcPaypal />, path: '/' },
  { icon: <FaCcApplePay />, path: '/' },
  { icon: <FaGooglePay />, path: '/' }
]

export default function Footer() {
  return (
    <div className='bg-primary text-white grid grid-cols-1 md:grid-cols-4 gap-5 px-[50px] py-[50px]'>
      <div className=''>
        <img src={logoWhiteColor} alt='' />
        <p className='flex text-white items-center gap-x-3'>
          <span>
            <SiGooglemaps />
          </span>
          <span>Địa chỉ: 150/8 Nguyễn Duy Cung, Phường 12, Tp.HCM</span>
        </p>
        <p className='flex text-white items-center gap-x-3'>
          <span>
            <FaMobileAlt />
          </span>
          <span>Số điện thoại: 19001393</span>
        </p>
        <p className='flex text-white items-center gap-x-3'>
          <span>
            <MdEmail />
          </span>
          <span>Email: support@egany.com</span>
        </p>
        <p className='flex text-white items-center gap-x-3'>
          <span>
            <FaCopyright />
          </span>
          <span>Bản quyền thuộc về Lê Văn Sinh</span>
        </p>
      </div>
      <div className='flex flex-col gap-y-3'>
        <h2>CHÍNH SÁCH</h2>
        {policy.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.lable}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-y-3'>
        <h2>HỖ TRỢ KHÁCH HÀNG</h2>
        {support.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.lable}
          </Link>
        ))}
        <div className='flex items-center gap-x-3 text-2xl mt-6'>
          {payment.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className=''>
        <h2>ĐĂNG KÝ NHẬN TIN</h2>
        <div className='flex border rounded-xl py-1 pl-2 gap-x-3 bg-white'>
          <input type='text' className='w-[200px] outline-none text-text' placeholder='Nhập địa chỉ email' />
          <button className='bg-text text-white px-3 py-[8px] rounded-xl text-sm '>Đăng ký</button>
        </div>
        <div className='flex items-center gap-x-3 text-2xl justify-center mt-4'>
          {social.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

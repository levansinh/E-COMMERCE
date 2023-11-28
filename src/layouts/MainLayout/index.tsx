import { Outlet } from 'react-router-dom'

import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div>
        <TopHeader />
        <Header/>
       <div className="">
        <Outlet/>
       </div>
        <Footer />
    </div>
  )
}

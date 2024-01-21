//Import 
//? (Header , Whoarewe)
//! From Components

'use client'

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from '../components/Home/Header'
import Whoarewe from '../components/Home/Whoarewe'
import Erp from '../components/Home/Erp'
import Contactus from '@/components/Home/Contactus'
import Price from '@/components/Home/Price'
import Footer from '@/components/Home/Footer'



export default function Home() {
  return (
    <>
      <div className='home-page'>
        <Header />
        <Whoarewe />
        <Erp />
        <Contactus />
        <Price />
        <Footer />
      </div>
    </>
  )
}

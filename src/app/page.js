'use client'
//Import 
//? (Header , Whoarewe , Erp , Contactus , Price , Footer)
//! From Components

'use client'
// Import Bootstrap js From Bootstrap Library
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from '../components/Home/Header'
import Whoarewe from '../components/Home/Whoarewe'
import Erp from '../components/Home/Erp'
import Contactus from '@/components/Home/Contactus'
import Price from '@/components/Home/Price'
import Footer from '@/components/Home/Footer'
import Splash from "@/components/Home/Splash"
// Import UseStae From React
import { useState  , useEffect} from 'react'

import AOS from 'aos';

// import aos styles
import 'aos/dist/aos.css';

export default function Home() {

  //Create State For Loading
  // Set Loading To True
  const [loading, setLoading] = useState(true)


  // Create Function For Hide Splash Page
  // 
  onload = () => {
    setTimeout(function() {
      setLoading(false)
    }, 2000)
  }

  AOS.init();

  return (
    <>
    {/* Handle Hide Splash And Show Home Page by If page Loading Show Splash and when loading is false show Home Page

    
    */}
    {loading ? <Splash /> : null}

      {loading ? null : (

      <div className='home-page'>
        {/* Insert 
        ? (Header , Whoarewe , Erp , Contactus , Price , Footer)
        To Home Page
        */}
        <Header />
        <Whoarewe />
        <Erp />
        <Contactus />
        <Price />
        <Footer />
      </div>
      )}
    </>
  )
}
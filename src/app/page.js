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
import Splash from "@/components/Home/splash"
// Import UseStae From React
import { useState } from 'react'


export default function Home() {

  const [loading, setLoading] = useState(true)

  onload = () => {
    setTimeout(function() {
      setLoading(false)
    }, 2000)
  }

  return (
    <>
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
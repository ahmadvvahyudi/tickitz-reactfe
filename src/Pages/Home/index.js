import React from 'react'
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import { Navbar } from '../../Components/Navbar'
import NowShowing from '../../Components/NowShowing';
import Subscribe from '../../Components/Subscribe';
import Upcoming from '../../Components/Upcoming';

export const Home = () => {
  return (
    <>
    <div className='container'>
        <Navbar />
        <Hero/>
        <NowShowing/> 
        <Upcoming/>
        <Subscribe/>
        <Footer/>
    </div>
    </>
  )
}

import React, { useEffect } from 'react'
import Conent from '../Components/popup'
import Feed from '../Components/feed'
import Footer from '../Components/Footer'
import Logocloud from '../Components/logocloud'
import About from '../Components/about'
import DashBoard from '../Components/dashboard'
import G_Footer from '../Components/G_Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1300, // Adjust the duration (animation speed) here
    });
    
  }, [])


  return (
    <div>
      <DashBoard/>
      <div data-aos="fade-left">
      <Conent />
      </div>
      <div data-aos="fade-left">
      <Feed/>
      </div>
      <div data-aos="fade-right">
      <About/>
      </div>
      <div data-aos="fade-left" className='py-2'>
      <Logocloud/>
      </div>
      <Footer/>
      <G_Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import './about.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroImg from '../HeroImg/HeroImg'
import AboutContent from '../AboutContet/AboutContent'
const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg heading= "ABOUT" text="I'm a friendly Front End Developer"/>
<AboutContent/>
        <Footer/>
    </div>
            
  )
}

export default About
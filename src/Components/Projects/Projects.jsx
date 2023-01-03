import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroImg  from "../HeroImg/HeroImg"
import Card from '../Card/Card'
const Projects = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg heading= "PROJECTS." text="Some of my most recent works"/>
        <Card/>
         <Footer/>
    </div>
  )
}

export default Projects
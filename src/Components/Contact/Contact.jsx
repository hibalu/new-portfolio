import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroImg from '../HeroImg/HeroImg'
import Form from '../Form/Form'
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg heading= "CONTACT" text="Let's have a chat"/>
         <Form/>
        <Footer/>
    </div>
  )
}

export default Contact
import React, {useState}from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroImg from '../HeroImg/HeroImg'
import Form from '../Form/Form'
import './contact.css'
const Contact = () => {
const [name, setName] = useState('Click the below button to get email');

  
  return (
    <div>
        <Navbar/>
        <HeroImg heading= "CONTACT" text="Let's have a chat"/>
        <div className="usestate">
        <h1 className='h1'>{name}</h1>
        <button className='button' onClick={()=> setName ('bujuganibalusrgmail.com')}> Click Here</button>
        </div>
         <Form/>
        <Footer/>
    </div>
  )
}

export default Contact
import "./aboutcontet.css"
import React from 'react'
import { Link } from "react-router-dom"


const AboutContent = () => {
  return (
    <div className="about">
       <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a react front-end-developer. I create responsive secure websites.</p>
        <Link to='/contact'>
        <button className="contact">Contact</button>
       </Link>
       </div>
     
       
    </div>
  )
}

export default AboutContent
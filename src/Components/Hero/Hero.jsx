import "./hero.css"

import React from 'react'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div>
   <div className="content">
    <p>HI, I'M Bala Suresh</p>
    <h1>React/Front End Developer</h1>
   </div>
   <div className="button">
    <Link to="/Projects" className="btn"> Project</Link>
    <Link to="/Contact" className="btn1"> Contact</Link>
   </div>
   </div>
  )
}

export default Hero
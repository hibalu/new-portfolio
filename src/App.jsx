import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

import Home from './Components/Home/Home'
const App = () => {
  return (
    <div>

    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path ="/projects" exact element={<Projects/>} />
        <Route path = "/contact" exact element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
 import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About.jsx";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Api from "./Components/Fetch/Api"
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/api" exact element={<Api/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App; 

/*
import React from 'react'
import Balu from './Components/Chart/Balu'

const App = () => {
  return (
    <div>
      <Balu/>
    </div>
  )
}

export default App

import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [name, setName] = useState("Please Click the below button");
  return (
    <div className="birthday">
      <h1>{name}</h1>

      <button
        className="keerthi"
        onClick={() =>
          setName(
            "May this day be as sunny as your smile and as beautiful as you are. You shine every day, but on this day, you will shine the brightest. Happy Birthday.Wish you  a very Happy Birthday Keerthana."
          )
        }
      >
        Click here
      </button>
    </div>
  );
};

export default App;*/

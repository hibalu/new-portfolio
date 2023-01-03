import React from 'react'
import './card.css'
import assignment from '../assets/assignment.png'
import fog from '../assets/fog.png'
import portfolio from '../assets/portfolio.png'

const Card = () => {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card-todo">
            <h2>Todo List</h2>
                <img className='img' src={assignment} alt="pic"/>
                <p></p>
               

            </div>
            <div className="card-weather">
                <h2>Weather App</h2>
                <img className='img' src={fog} alt="pic"/>

            </div>
            <div className="card-portfolio">
                <h2>Portfolio</h2>
                <img className='img' src={portfolio} alt="pic"/>

            </div>
            
        </div>

    </div>
  )
}

export default Card
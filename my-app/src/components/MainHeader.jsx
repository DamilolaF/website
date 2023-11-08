import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main_header'>
      <div className="container mainheader_container">
        <div className="mainheader_left">
          <h4>#100DaysOfWorkkout</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Est, aut.
          </p>
            <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="mainheader_right">
          <div className="mainheader_circle">
            <div className="mainheader_image">
              <img src={Image} alt="Main Header Image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
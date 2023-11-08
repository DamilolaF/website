import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
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
        <div className="mainheader_right"></div>
      </div>
    </header>
  )
}

export default Header
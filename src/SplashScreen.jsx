import React from 'react'
import './todo.css';
import { Link } from 'react-router-dom';
import splash from './resources/splash.gif';


const SplashScreen = () => {
  return (
    <>
    <div className="splash-screen">
        <div className="splash-screen-text">
            <h1 className='text-heading'>To- Do List App</h1>
            <p className='text-para'>A best way to plan your day ahead and be more productive</p>
           <Link to='/mainapp'><button className='start-btn'>Let's start</button></Link>

        </div>
        <div className="splash-screen-icon">
            <img src={splash} className='todoimg'></img>
        </div>
    </div>
    </>
  )
}

export default SplashScreen
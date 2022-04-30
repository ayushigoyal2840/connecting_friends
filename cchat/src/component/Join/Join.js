import React from 'react'
import './join.css'
import logo from '../../images/logo.png'
import Link from 'react-router-dom';



const Join = () => {
  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo' />
        <h1>C Char</h1>
        <input type='text' id="joinInput" placeholder='Enter Your Name' />
        <a href='/chat'>
        <button className='joinBtn'>
          Login
        </button>
        </a>
         
        
      </div>
      
    </div>
  )
}

export default Join
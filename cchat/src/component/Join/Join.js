import React, { useState } from 'react'
import './join.css'
import logo from '../../images/logo.png'
import { Outlet, Link } from "react-router-dom";


let user;

const sendUser=()=>{
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value="";
    }

const Join = () => {
  const [name, setname] = useState("")
  // console.log(name);


  return (
   <>
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo' />
        <h1>C Char</h1>
        <input onChange={(e)=>setname(e.target.value)} type='text' id="joinInput" placeholder='Enter Your Name' />
        <Link onClick={(event)=> !name ?event.preventDefault():null} to="/chat">
        <button className='joinBtn' onClick={sendUser}>
          Login
        </button>
        </Link>
        {/* <a href='/chat'>
        
        </a> */}
         
        
      </div>
      
    </div>
   </>
  )
}

export default Join

export {user};
import React from 'react'
import logo from "../photos/logo.png"
import './header.css'
import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"


const HeaderComponent = () => {

 

  return (
    <div className='main'>
        <div className='header'>

       

        <Link to="/"><img  className='logo-image' src={logo} /></Link>

        <div className='menu' ><AiOutlineMenu className='menu'/></div>

        <ul  className='ul-list' id="navbar"   >

            <li>   <Link  to="/about-us">About us</Link> </li>
            <li> <Link to="/page-2">Thrust Areas</Link> </li>
            <li> <Link to="/page-3"> Ecosystem Partners</Link> </li>
            <li> <Link to="/page-4">Accelerators</Link> </li>
            <li> <Link to="/page-5">News & Events </Link> </li>

            <button>Apply Now</button>
        </ul>



  

        </div>
    </div>
  )
}

export default HeaderComponent
import React from 'react'

import { Link } from "react-router-dom";
import logo from "../photos/white-logo.png"
import './footer.css'

import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillGoogleCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='main'>
       <footer className='footer'>
           <div className='header-1'>

                <Link to="/"><img  className='logo-image' src={logo}/></Link>

                <ul  className='ul-list-footer' >

                    <li className='li-footer'>   <Link  to="/about-us">About us</Link> </li>
                    <li className='li-footer'> <Link to="/about-us">Thrust Areas</Link> </li>
                    <li className='li-footer'> <Link to="/about-us"> Ecosystem Partners</Link> </li>
                    <li className='li-footer'> <Link to="/about-us">Accelerators</Link> </li>
                    <li className='li-footer'> <Link to="/about-us">News & Events </Link> </li>

                </ul>

            </div>

            <div className='connect'>
              <div className='card-1'>
                    <h5>Connect us on</h5>
                  <ul className='card-ul'>
                    <li> <BsFacebook className='icons'/> </li>
                    <li> <BsInstagram className='icons'/> </li>
                    <li> <AiFillTwitterCircle className='icons'/> </li>
                    <li> <AiFillGoogleCircle className='icons'/> </li>
                  </ul>
              </div>
              <div className='card-2'>
                <ul className='card-2-ul'>
                  <li>Terms and condition </li>
                  <li> Ⓒ innovation 2022 </li>
                </ul>
              </div>
            </div>

       </footer>
    </div>
  )
}

export default Footer
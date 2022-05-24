import React from 'react'
import './home.css'
import {IoIosArrowForward} from 'react-icons/io'
import InfoComponent from './InfoComponent'

const HomeComponent = () => {
  return (
    <div className='main'>

        <div className='home'>
            <div className='home-1'>

                <div className='home-1-2'>
                    <h4 style={{color:"green"}}>Challenging limits every day</h4>
                    <h1>Scale. Innovate.</h1>
                    <h1>Impact the future</h1>
                    <div className='para-div'>
                    <p>We collaboarate with stat-ups sand external agencies to address
                    </p>
                        <p> challenges
                         in the steel value chain and proximate sectors</p>
                    </div>
                    

                     <button className='home-btn'> Apply Now <IoIosArrowForward className='icon'/> </button>    
                </div>
            
            </div>
            <div className='home-2'>
                <div className='img-1'>

                </div>
                <div className='img-2'>

                </div>
                <div className='img-3'>

                </div>

            </div>
        </div>
        <InfoComponent/>
    </div>
  )
}

export default HomeComponent
import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import "./info.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const InfoComponent = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='main'>
       <div className='info-1'>

          <div className='info-1-2'>
             <h4 style={{color:"green"}}>Challenging limits every day</h4>
              <h1>Your vision. Our network.</h1>
              <h1>Let's build a legacy together</h1> 
              <button className='home-btn'> Learn about us <IoIosArrowForward className='icon'/> </button>    
          </div>

        <div className='info-2-2'>
           <div>
                        <Carousel responsive={responsive}>
                  <div>
                      <div className='item' id="i-1"> </div>
                      <div>
                          <h2>Founder Focused.</h2>
                          <p>Founder Fouced we seek enteroreneus with inventivness, tenacity and passion, who can create what has yet to be imagined</p>
                      </div>
                  </div>
                  <div>
                      <div className='item' id="i-2"></div>
                      <div>
                          <h2>Deep Technologies.</h2>
                          <p>Founder Fouced we seek enteroreneus with inventivness, tenacity and passion, who can create what has yet to be imagined</p>
                      </div>
                  </div>
                  <div >
                      <div className='item' id="i-3"></div>
                      <div>
                          <h2>Paid Proof of concept</h2>
                          <p>Founder Fouced we seek enteroreneus with inventivness, tenacity and passion, who can create what has yet to be imagined</p>
                      </div>
                  </div>
                  <div>
                      <div className='item' id="i-4"></div>
                      <div>
                          <h2>Founder Focused.</h2>
                          <p>Founder Fouced we seek enteroreneus with inventivness, tenacity and passion, who can create what has yet to be imagined</p>
                      </div>
                  </div>
                  <div>
                      <div className='item' id='i-5'></div>
                      <div>
                          <h2>Founder Focused.</h2>
                          <p>Founder Fouced we seek enteroreneus with inventivness, tenacity and passion, who can create what has yet to be imagined</p>
                      </div>
                  </div>
                  <div>
                      <div className='item' id="i-6"> </div>
                      <div>
                          <h2>Founder Focused.</h2>
                          <p>Founder Fouced we seek enteroreneus with inventivness, tenacity and passion, who can create what has yet to be imagined</p>
                      </div>
                  </div>
                  <div>
                      <div className='item' id="i-7"> </div>
                      <div>
                          <h2>Founder Focused.</h2>
                          <p>Founder Fouced we seek enteroreneus with inventivness, tenacity and passion, who can create what has yet to be imagined</p>
                      </div>
                  </div>
                
                </Carousel>;
            </div>


        </div>

        </div>


        
    </div>
  )
}

export default InfoComponent
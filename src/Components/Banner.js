import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
         
          <div className="item item-1">
            <div className="img-fill">
                <div className="text-content">
                  <h6>Welcome, fellow travelers!</h6>
                  <h4>Need a car on rent ?</h4>
                  <p>RentalHub provide you the best cars at reasonal prices on rent.<br></br>So wait no more and get your car to roam right away !</p>
                  <Link to="contact" className="filled-button">contact us</Link>
                </div>
            </div>
          </div>
         
          
          
        </div>
    </div>
  )
}

export default Banner
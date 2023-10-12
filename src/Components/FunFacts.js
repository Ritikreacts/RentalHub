import React from 'react'
import { Link } from 'react-router-dom'

const FunFacts = () => {
  return (
    <div className="fun-facts">
      <div className="container">
        <div className="more-info-content">
          <div className="row">
            <div className="col-md-6">
              <div className="left-image">
                <img src={require("../images/female-hands-close-up-with-car-keys.jpg")} className="img-fluid" alt=""/>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="right-content">
                <span>Who we are</span>
                <h2>Get to know about <em>our company</em></h2>
                <p>Welcome to our car rental website, where convenience meets mobility. We are
dedicated to providing you with a seamless and hassle-free car rental experience.
Whether you're planning a road trip, need a vehicle for business travel, or simply
require a temporary ride, we have the perfect solution for you.</p>
                <Link to="about" className="filled-button">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunFacts
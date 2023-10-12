import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    // Function to update navbar background color
    function updateNavbarBackground() {
      const navbar = document.getElementById('navin');
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#00000097';
      } else {
        navbar.style.backgroundColor = ''; // Revert to the default style
      }
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', updateNavbarBackground);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', updateNavbarBackground);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg" id="navin">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={require("../images/rentalhub-logo-removebg-preview.png")} alt="" width={220} height={50} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fleet">
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

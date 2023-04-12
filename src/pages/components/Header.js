import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <div>
         {/*  <div className="preloader">
            <div className="preloader-inner">
              <div className="preloader-icon">
                <span />
                <span />
              </div>
            </div>
          </div> */}
          {/* <div className="overlay" /> */}
          
          <Link to="/" className="scrollToTop">
            <i className="fas fa-angle-up" />
          </Link>
         
         
          <header className="header-section">
            <div className="container">
              <div className="header-wrapper">
                <div className="logo">
                  <Link to="/">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </Link>
                </div>
                <Navigation />
                <div className="header-bar d-lg-none">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </header>
        </div>
      </>
    );
}

export default Header;

import React from 'react';
import Navigation from './Navigation';

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
          {/* ==========Preloader========== */}
          {/* ==========Overlay========== */}
          {/* <div className="overlay" /> */}
          
          <a href="/#0" className="scrollToTop">
            <i className="fas fa-angle-up" />
          </a>
          {/* ==========Overlay========== */}
          {/* ==========Header-Section========== */}
          <header className="header-section">
            <div className="container">
              <div className="header-wrapper">
                <div className="logo">
                  <a href="/">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </a>
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

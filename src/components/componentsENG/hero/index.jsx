import React from 'react';
import './styles.scss'

import avatar from '../../Images/Marko-Hero.png'

function Hero() {
    return (
      <section className="hero-en">
        <div className="hero-content">
          <div className="hero-content-left">
            <p className="hero-text animated-onload">
              <span>We make short-form videos</span>
              
              <span> for long-term goals</span>
              
            </p>
            <div className="hero-line animated-onload"></div>
            <a href="#calendly">
              <button onClick="" className="hero-button animated-onload">
                Book a call with us
              </button>
            </a>
          </div>
          <div className="hero-content-right">
            <img loading='lazy' className="avatar" src={avatar} alt="" />
          </div>
        </div>
      </section>
    );
  }

  export default Hero;
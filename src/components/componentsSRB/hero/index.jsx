import React from 'react';
import './styles.scss'

import avatar from '../../Images/Marko-Hero.png'

function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <div className="hero-content-left">
            <p className="hero-text animated-onload">
              <span>Marketing agencija</span>
              <span> koja stvarno daje rezultate</span>
              
            </p>
            <div className="hero-line animated-onload"></div>
            <a href="#calendly">
              <button onClick="" className="hero-button animated-onload">
              Zakaži razgovor
              </button>
            </a>
          </div>
          <div className="hero-content-right">
            <img className="avatar" src={avatar} alt="" />
          </div>
        </div>
      </section>
    );
  }

  export default Hero;
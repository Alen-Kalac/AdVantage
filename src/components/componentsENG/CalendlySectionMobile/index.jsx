import React from 'react';
import './style.scss'
function CalendlyMobileSection() {
    return (
      <section id="calendly" className="calendly-mobile">
        <div className="calendly-mobile-text">
          <div className="calendly-mobile-title">
            <span>Let's hop on a call and talk some</span>
            <span> more about your business!</span>
          </div>
          <div className="calendly-mobile-line"></div>
          <p className="calendly-mobile-description">
            <span>I promise you we won't sell you anything,</span>
            <span>we just want to talk about your business </span>
            <span> and give you some free marketing tips</span>
          </p>
        </div>
  
        <div className="calendly-cta">
          <a className="calendly-mobile-button" href="https://calendly.com/marko_advantage/30min?month=2023-06">
            <span>Ready to fill your gym up?</span>
            <span> Click here to schedule a call</span>
          </a>
        </div>
  
        <div className="social-icons">
          <p>Copyrighted by AdVantage 2023©</p>
          <a href="https://www.instagram.com/ad.vantage.marketing/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100094329840433">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/ad.vantage.marketing/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </section>
    );
  }

  export default CalendlyMobileSection;
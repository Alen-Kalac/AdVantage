import React from 'react';
import './styles.scss'
import { Helmet } from 'react-helmet';

function CalendlySection() {
    return (
      <section id="calendly" className="calendly">
         <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Helmet>
        <div className="calendly-text">
          <div className="calendly-title animated">
            <span>Let's hop on a call and talk some</span>
            <span> more about your business!</span>
          </div>
          <div className="calendly-line animated"></div>
          <p className="calendly-description animated">
            <span>I promise you we won't sell you anything, we just want to talk </span>
            <span>about your business and give you some free marketing tips</span>
          </p>
        </div>
  
        <a className="calendly-button animated" href="https://calendly.com/marko_advantage/30min?month=2023-06">
          <span>Ready to fill your gym up?</span>
          <span> Click here to schedule a call</span>
        </a>
  
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

  export default CalendlySection;
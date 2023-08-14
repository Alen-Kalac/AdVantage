import React from 'react';
import './styles.scss'
import avatarAbout from '../../Images/Marko-About.png'
import arrowIcon from '../../Images/arrow.svg'

function AboutSection() {
    return (
      <div className="about-section">
        <div className="about-content">
          <p className="about-text animated">
            <span>
              Hey there, I'm Marko, the proud owner of AdVantage marketing agency. With a personal passion for fitness, I've dedicated my agency exclusively to helping gym owners like you succeed. With 35 gyms across the globe already benefiting from our services, we're here to make a real difference in your success.
            </span>
  
            <span>
              Our clients have experienced an incredible average return on ad spend (ROAS) of 320% within just three months of partnering with us.
            </span>
  
            <span>
              Join our close-knit community of gym owners who are achieving remarkable results and building thriving fitness communities :)
            </span>
          </p>
          <div className="img animated">
            <img loading='lazy' className="about-avatar" src={avatarAbout} alt="" />
            <p className="img-description animated">
              You see! I told you I workout! <img className="arrow" src={arrowIcon} alt="" />
            </p>
          </div>
        </div>
      </div>
    );
  }

  export default AboutSection;
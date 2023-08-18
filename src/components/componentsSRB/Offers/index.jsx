import React from 'react';
import './styles.scss'
import instagramIcon from './icons/instagram-icon.png'
import cameraIcon from './icons/camera-icon.png'
import tiktokIcon from './icons/tiktok-icon.png'

const Offers = () => {
  return (
    <section className="offers-srb">
      <div className="offers-content">
        <p className="title animated">Koje usluge nudimo?<br /></p>
        <div className="icons animated">
          <div className="icon animated">
            <div className="icon-frame"><img src={instagramIcon} alt="" /></div>
            <p className="icon-description">Instagram <br /> marketing</p>
          </div>
          <div className="icon animated">
            <div className="icon-frame"><img src={cameraIcon} alt="" /></div>
            <p className="icon-description">Kreiranje <br /> sadržaja</p>
          </div>
          <div className="icon animated">
            <div className="icon-frame"><img src={tiktokIcon} alt="" /></div>
            <p className="icon-description">TikTok <br />marketing</p>
          </div>
        </div>
        <div className="outro-text animated">
          <span>U suštini, pomažemo ti da se pozicioniraš na </span>

          <span><span className="underlined">društvenim mrežama</span> i podižemo ti prodaju</span>
        </div>
      </div>
    </section>
  );
};

export default Offers;







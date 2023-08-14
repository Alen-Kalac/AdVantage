import React from 'react';
import './styles.scss'
import iconPen from '../../Images/Pen icon.png'
import iconConnect from '../../Images/Connect icon.png'

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-content">
        <p className="title animated">So what services do we offer ? <br /></p>
        <div className="icons animated">
          <div className="icon animated">
            <div className="icon-frame"><img src={iconPen} alt="" /></div>
            <p className="icon-description">AD Creative</p>
          </div>
          <div className="icons-line animated"></div>
          <div className="icon animated">
            <div className="icon-frame"><img src={iconConnect} alt="" /></div>
            <p className="icon-description">AD Management</p>
          </div>
        </div>
        <div className="outro-text animated">
          <span>Basically, we create and run </span>
          <span><span className="underlined">Facebook and Instagram ADS</span> for your gym !</span>
        </div>
      </div>
    </section>
  );
};

export default Offers;







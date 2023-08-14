import React from 'react';
import './styles.scss'
import poolImg from '../../Images/Pool.png'
function PoolSection() {
    return (
      <div className="pool-section">
        <p className="pool-text animated">
          <span>If we don't make your gym as packed as this</span>
          <span>Chinese swimming pool in just 3 months you will</span>
          <span>get <span className="underlined">2 additional months</span> of our services for free!</span>
        </p>
        <img src={poolImg} className="animated" alt="" />
      </div>
    );
  }
  export default PoolSection;
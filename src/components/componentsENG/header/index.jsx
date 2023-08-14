import React from 'react';
import './styles.scss'
import Logo from '../../Images/Logo.png'
function Header() {
    return (
      <header>
        <img loading='lazy' className="logo" src={Logo} alt="" />
        <a href="#calendly">
          <button className="header-button">Book a Call with us</button>
        </a>
      </header>
    );
  }

  export default Header;
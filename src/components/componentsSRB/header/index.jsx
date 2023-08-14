import React from 'react';
import './styles.scss'
import Logo from '../../Images/Logo.png'
function Header() {
    return (
      <header>
        <img className="logo" src={Logo} alt="" />
        <a href="#calendly">
          <button className="header-button">Zakaži razgovor</button>
        </a>
      </header>
    );
  }

  export default Header;
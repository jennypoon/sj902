import React from 'react';
import logo from '../images/vista_logo.png'

function Header() {
    return (
      <div className="landing">
        <div className="triangle">
          <img className="logo" src={logo} alt="logo"/>
        </div>
      </div>
    )
}

export default Header;
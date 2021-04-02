import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./index.css"
const Header = () => {
  return (
    <div className="header">
      <div className="header__right">
        {/* logo */}
        <Logo />
        {/* nav */}
        <div className="header__nav">
          <ul>
            <li>ABOUT</li>
            <li>GALLERY</li>
            <li>PRICING</li>
            <li>FAQ</li>
            <li>BENEFITS</li>
          </ul>
        </div>
      </div>

      <div className="header__left">
        <button className="btn btn-transparent">SIGN IN</button>
        <button className="btn btn-primary">SIGN UP</button>
      </div>
    </div>
  );
};

export default Header;

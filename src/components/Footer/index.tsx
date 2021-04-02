import React from "react";
import { ReactComponent as SocialIcons } from "../../assets/images/social.svg";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__header">
          <h1>ARShakir</h1>
          <div className="social_icons">
            <SocialIcons />
          </div>
        </div>

        <div className="footer__body">
          <div className="footer__columns">
            <p className="column_head">First</p>
            <p className="column_data">First page</p>
            <p className="column_data">Second page</p>
            <p className="column_data">Third page</p>
            <p className="column_data">Fourth page</p>
          </div>
          <div className="footer__columns">
            <p className="column_head">Second</p>
            <p className="column_data">First page</p>
            <p className="column_data">Second page</p>
            <p className="column_data">Third page</p>
            <p className="column_data">Fourth page</p>
          </div>
          <div className="footer__columns">
            <p className="column_head">Third</p>
            <p className="column_data">First page</p>
            <p className="column_data">Second page</p>
            <p className="column_data">Third page</p>
            <p className="column_data">Fourth page</p>
          </div>
          <div className="footer__columns">
            <p className="column_head">Fourth</p>
            <p className="column_data">First page</p>
            <p className="column_data">Second page</p>
            <p className="column_data">Third page</p>
            <p className="column_data">Fourth page</p>
          </div>
        </div>

        <div className="footer__footer">
          <p>© Copyrights 2021</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

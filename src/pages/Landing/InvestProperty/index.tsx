import React from "react";
import "./index.css";
const InvestProperty = () => {
  return (
    <div className="investProperty">
      <div className="investProperty__container">
        <div className="investProperty__left">
          <h1 className="main_text">
            Invest Property for better <span>business</span>
          </h1>
          <p className="sub_text">
            We are committed to processing the information in order to contact
            you and talk about your project. We are committed to processing the
            information.
          </p>

          <button className="btn btn-primary">LEARN MORE</button>
        </div>
        <div className="investProperty__right">
          <img
            className="invest_property_img"
            src="/assets/invest_property.png"
            alt=""
          />
        </div>
        <img className="mask_group" src="/assets/mask_group.png" alt="" />
      </div>
    </div>
  );
};

export default InvestProperty;

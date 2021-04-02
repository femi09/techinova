import React from "react";
import "./index.css";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactUs__contentText">
        <p className="main_text">
          Increase your business <span>traffic</span>
        </p>
        <p className="sub_text">
          We are committed to processing the information in order to contact you
          and talk about your project.
        </p>

        <button className="btn btn-primary">LEARN MORE</button>
      </div>
      <div className="increase_traffic_image">
        <img src="/assets/increase_traffic.png" alt="" />
      </div>
    </div>
  );
};

export default ContactUs;

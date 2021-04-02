import React from "react";
import "./index.css";

const NewsLetter = () => {
  return (
    <div className="container">
      <img src="/assets/newsletter_background.png" alt="" />
      <div className="newsLetter__content">
        <h1 className="heading">There are many reasons to get down</h1>
        <p className="sub_heading">
          There are many reasons to get down and start to get depressed about
          your situation
        </p>
        <form action="">
          <div className="form_group">
            <input
              className="form_input"
              type="text"
              placeholder="Your Email"
            />
            <input type="button" value="SEND" className="form-btn" />
          </div>
        </form>
        <p className="form_info">
          No spam only releases, updates and discounts
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;

import React from "react";
import "./index.css";

const SavingTips = () => {
  return (
    <div className="savingTips">
      <img src="/assets/left_stroke.png" alt="" />
      <div className="savingTips__container">
        <div className="savingTips__textWrapper">
          <p className="savingTips__heading">
            3 Simple Ways To <span>Save</span> A Bunch Of
          </p>
          <p className="savingTips__heading cont">
            <span>Money</span> When Buying A New Computer
          </p>
          <div className="savingTips__subtextWrapper">
            <span className="savingTips__subtext">
              Fully customizable and neatly organized components
            </span>
            <span className="savingTips__subTtext">
              will help you work faster without limiting creative freedom.
            </span>
          </div>
        </div>

        <div className="savingTips__topics">
          <div className="topic">
            <p>100+</p>
            <span>5 Reasons To Purchase Desktop Computers</span>
          </div>
          <div className="topic_middle">
            <p>43,000+</p>
            <span>3 Simple Ways To Save A Bunch Of</span>
            <span>Money When Buying A New Computer</span>
          </div>
          <div className="topic">
            <p>30+</p>
            <span>
              A Discount Toner Cartridge Is Better Than Ever And You Will Save
              50 Or More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingTips;

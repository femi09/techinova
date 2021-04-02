import React from "react";
import "./index.css";
import { ReactComponent as LTEIcon } from "../../../assets/images/lte2.svg";
import { ReactComponent as SwissKnifeIcon } from "../../../assets/images/swiss-knife.svg";

const FindingInfo = () => {
  return (
    <div className="findingInfo">
      <div className="findingInfo__container">
        <div className="findingInfo__left">
          <img src="/assets/finding_info.png" alt="" />
        </div>
        <div className="findingInfo__right">
          <div className="findingInfo__textContainer">
            <p className="main_text">Help Finding Information Online</p>
            <span className="sub_text">
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom
            </span>
          </div>

          <div className="features_container">
            <div className="feature_one">
              <SwissKnifeIcon />
              <p>Feature One</p>
              <span>
                Fully customizable and neatly organized components will help you
                work faster
              </span>
            </div>
            <div className="feature_two">
              <LTEIcon />
              <p>Feature Two</p>
              <span>
                Fully customizable and neatly organized components will help you
                work faster
              </span>
            </div>
          </div>
        </div>
      </div>
      <img className="right_stroke" src="/assets/right_side_stroke.png" alt="strokes" />
    </div>
  );
};

export default FindingInfo;

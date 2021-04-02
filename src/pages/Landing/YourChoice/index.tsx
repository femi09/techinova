import React from "react";
import { ReactComponent as FlipHorizontalIcon } from "../../../assets/images/flip-horizontal.svg";
import { ReactComponent as BulbIcon } from "../../../assets/images/bulb.svg";
import { ReactComponent as AttachmentIcon } from "../../../assets/images/attachment.svg";
import { ReactComponent as AirpodsIcon } from "../../../assets/images/airpods.svg";
import { ReactComponent as LTEIcon } from "../../../assets/images/lte.svg";
import { ReactComponent as ThunderMoveIcon } from "../../../assets/images/thunder-move.svg";
import "./index.css";
const YourChoice = () => {
  return (
    <div className="yourChoice">
      <img src="/assets/your_choice_background.png" alt="" />
      <div className="yourChoice__container">
        <div className="yourChoice__title">
          <p className="heading">Your choice</p>
          <p className="sub_heading">
            There are many reasons to get down and start to get depressed about
            your situation
          </p>
        </div>
        <div className="yourChoice__categories upper">
          <div className="column">
            <div className="icon">
              <FlipHorizontalIcon />
            </div>

            <div className="column_content">
              <p className="column_title">Ecstactic elegance</p>
              <p className="column_text">
                Article nor prepare chicken you him now. Shy merits say advice
                ten before lovers innate add.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="icon">
              <AirpodsIcon />
            </div>

            <div className="column_content">
              <p className="column_title">Folly words widow</p>
              <p className="column_text">
                Effect if in up no depend seemed. Ecstatic elegance gay but
                disposed. We me rent been part what.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="icon">
              <LTEIcon />
            </div>

            <div className="column_content">
              <p className="column_title">Possible procured trifling</p>
              <p className="column_text">
                We me rent been part what. An concluded sportsman offending so
                provision mr education.
              </p>
            </div>
          </div>
        </div>

        <div className="yourChoice__categories lower">
          <div className="column">
            <div className="icon">
              <ThunderMoveIcon />
            </div>

            <div className="column_content">
              <p className="column_title">Open game</p>
              <p className="column_text">
                Shy merits say advice ten before lovers innate add. She
                cordially behaviour can attempted estimable.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="icon">
              <AttachmentIcon />
            </div>

            <div className="column_content">
              <p className="column_title">Endeavor</p>
              <p className="column_text">
                Improve ashamed married expense bed her comfort pursuit mrs.
                Four time took ye your as fail lady.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="icon">
              <BulbIcon />
            </div>

            <div className="column_content">
              <p className="column_title">Comfort Pursuit</p>
              <p className="column_text">
                Had denoting properly jointure you occasion directly raillery.
                In said to of poor full be post face snug.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourChoice;

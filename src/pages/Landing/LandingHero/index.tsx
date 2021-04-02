import React from "react";
import { ReactComponent as MediaPlayer } from "../../../assets/media_player.svg";
import  HeroImage  from "./HeroImages/HeroImage";
import  HeroDottedImage  from "./HeroImages/HeroDottedImage";
import  HeroFooterLogo from "./HeroImages/HeroFooter";
import "./index.css"

const LandingHero = () => {
  return (
    <div className="landingHero">
      <div className="landingHero__top">
        <div className="landingHero__topLeft">
          <h1>Many reasons to get up and start to get back in the business</h1>
          <p className="subtext">
            The harder you work for something, the greater you'll feel when you
            achieve it.
          </p>

          <div className="landingHero__buttonsContainer">
            <button className="btn btn-primary">LEARN MORE</button>
            <button className="btn btn-transparent">DEMO</button>
          </div>
          <div className="video_preview">
            <div className="media_player">
              <MediaPlayer />
            </div>

            <div className="text_wrapper">
              <p>
                The harder you work for something, the greater you’ll feel when
                you achieve it.
              </p>
              <span>Watch Preview</span>
            </div>
          </div>
        </div>
        <div className="landingHero__topRight">
          <div className="hero_image_container">
            <HeroImage />
          </div>
          <div className="hero_dotted_image_container">
            <HeroDottedImage/>
          </div>
        </div>
      </div>
      <div className="landingHero__footer">
        <HeroFooterLogo />
      </div>
      {/* Hero Bottom */}
    </div>
  );
};

export default LandingHero;

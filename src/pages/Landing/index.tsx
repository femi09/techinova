import React from "react";
import "./index.css";
import LandingHero from "./LandingHero";
import YourChoice from "./YourChoice";
import ContactUs from "./ContactUs";
import SavingTips from "./SavingTips";
import CreateNextProject from "./CreateNextProject";
import InvestProperty from "./InvestProperty";
import FindingInfo from "./FindingInfo";
import NewsLetter from "./NewsLetter";

const Landing = () => {
  return (
    <div className="landing">
      <LandingHero />
      <YourChoice />
      <ContactUs />
      <SavingTips />
      <CreateNextProject />
      <InvestProperty />
      <FindingInfo />
      <NewsLetter />
    </div>
  );
};

export default Landing;

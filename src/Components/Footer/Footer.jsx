import React from "react";
import "./Footer.scss";
// import PreFooter from "../PreFooter/PreFooter";
import FooterBottom from "./FooterBottom/FooterBottom";
const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="top">
        <PreFooter />
      </div> */}
      <div className="bottom">
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;

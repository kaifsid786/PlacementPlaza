import React from "react";
import "./FooterBottom.scss";
import logo from "/logo.png";
import fb from "/fb.png";
import twitter from "/twitter.png";
import insta from "/insta.png";
import linkedIn from "/linkedIn.png";
import { useNavigate } from "react-router-dom";
const FooterBottom = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-bottom">
      <div className="top">
        <div className="col-1">
          <div className="logo">
            <img src={logo} alt="" />
            <p
              style={
                window.innerWidth > 500
                  ? { display: "none" }
                  : {
                      fontSize: "1rem",
                      fontWeight: "700",
                      textDecoration: "overline",
                    }
              }
            >
              Placement Plaza
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            inventore, distinctio reprehenderit porro, exercitationem alias
            impedit minus provident modi dolorum aperiam. Facilis explicabo ea
            harum, illum totam esse velit! Nisi.
          </p>

          <form action="#">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div
          className="col-2"
          style={
            window.innerWidth > 800
              ? { marginLeft: "30px" }
              : { marginLeft: "50px" }
          }
        >
          <h3>Services</h3>
          <li>Hire Employees</li>
          <li>Hire Contractors</li>
          <li>Global Placement Plaza</li>
          <li>Competitive Benefits</li>
          <li>Global Talent Network</li>
        </div>
        <div className="col-2">
          <h3>Solutions</h3>
          <li>For Legal Teams</li>
          <li>For Finance Teams</li>
          <li>For People Teams</li>
          <li>EOR Migrations</li>
          <li>Compliance</li>
          <li>For Founders</li>
        </div>

        <div
          className="col-2"
          style={window.innerWidth > 800 ? {} : { marginLeft: "50px" }}
        >
          <h3>Resources</h3>
          <li onClick={() => navigate("/case")}>Case Studies</li>
          <li>Pricing</li>
          <li onClick={() => navigate("/about-us")}>About Us</li>
          <li>Blogs</li>

          <div className="social-links">
            <h3>Our Social Media</h3>
            <div className="links">
              <div className="circle">
                <img src={fb} alt="" className="fb-img" />
              </div>
              <div className="circle">
                <img src={twitter} alt="" />
              </div>
              <div className="circle">
                <img src={insta} alt="" />
              </div>
              <div className="circle">
                <img src={linkedIn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="line"></div>
        <div className="rights">2024@Placement Plaza. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default FooterBottom;

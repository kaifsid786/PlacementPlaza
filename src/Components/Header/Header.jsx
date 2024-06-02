import React, { useState } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Solution from "./Solution/Solution";
const Header = () => {
  const navigate = useNavigate();
  const [isSolnHover, setIsSolnHover] = useState(false);
  const [isAboutHover, setIsAboutHover] = useState(false);
  const [isResourceHover, setIsResourceHover] = useState(false);
  return (
    <div className="header-main">
      <div className="header">
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src="./logo.jpeg" alt="" />
        </div>

        <ul className="links">
          <li
            onMouseEnter={() => setIsSolnHover(true)}
            onMouseLeave={() => setIsSolnHover(false)}
          >
            Solutions{" "}
            <span
              style={{
                position: "absolute",
                top: "2px",
                right: "-2px",
                fontSize: "1.2rem",
              }}
            >
              &#x2304;
            </span>
            <Solution state={isSolnHover} type="solution" />
          </li>
          <li
            onMouseEnter={() => setIsAboutHover(true)}
            onMouseLeave={() => setIsAboutHover(false)}
          >
            Why Placement Plaza?
            <span
              style={{
                position: "absolute",
                top: "2px",
                right: "-2px",
                fontSize: "1.2rem",
              }}
            >
              &#x2304;
            </span>
            <Solution state={isAboutHover} type="about" />
          </li>
          <li onClick={() => navigate("/")}>Pricing</li>
          <li
            onMouseEnter={() => setIsResourceHover(true)}
            onMouseLeave={() => setIsResourceHover(false)}
          >
            Resources{" "}
            <span
              style={{
                position: "absolute",
                top: "2px",
                right: "-2px",
                fontSize: "1.2rem",
              }}
            >
              &#x2304;
            </span>
            <Solution state={isResourceHover} type="resource" />
          </li>
        </ul>

        <div className="contacts">
          <button className="login">Log In</button>
          <button className="demo" onClick={() => navigate("/contact-us")}>
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

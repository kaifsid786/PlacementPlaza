import React from "react";
import "./Case.scss";
const Case = () => {
  return (
    <div className="case">
      <div className="banner">
        <div className="left">
          <h5>Our work</h5>
          <h2>Case Studies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            quibusdam perspiciatis impedit veritatis iusto unde asperiores
            laboriosam alias obcaecati repudiandae ipsa nesciunt suscipit atque,
            numquam placeat velit perferendis fugiat eum.
          </p>
          <button>Get Started</button>
        </div>
        <div className="right">
          <div className="box">
            <div className="slider">
              <div className="slides">Company-1</div>
              <div className="slides">Company-2</div>
              <div className="slides">Company-3</div>
              <div className="slides">Company-4</div>
            </div>
            {/* Duplicate */}
            <div className="slider">
              <div className="slides">Company-1</div>
              <div className="slides">Company-2</div>
              <div className="slides">Company-3</div>
              <div className="slides">Company-4</div>
            </div>
          </div>
          <div className="box">
            <div className="slider">
              <div className="slides">Company-1</div>
              <div className="slides">Company-2</div>
              <div className="slides">Company-3</div>
              <div className="slides">Company-4</div>
            </div>
            {/* Duplicate */}
            <div className="slider">
              <div className="slides">Company-1</div>
              <div className="slides">Company-2</div>
              <div className="slides">Company-3</div>
              <div className="slides">Company-4</div>
            </div>
          </div>
        </div>
      </div>

      {/* section-5 */}
      <div className="section-5">
        <h5>Scale the way you work, with Placement Plaza.</h5>
        <h2>
          Let's grow your distributed workforce,{" "}
          <span style={{ color: "#003e71" }}>today.</span>{" "}
        </h2>
        <div className="btns">
          <div className="talk">Let's Talk</div>
          <div className="tutorial">Get Started</div>
        </div>

        <img className="watch" src="/watch.png" alt="" />
        <img className="team-work" src="/teamwork2.png" alt="" />
      </div>
    </div>
  );
};

export default Case;

import React from "react";
import "./About.scss";
import Card from "./Card/Card";
const About = () => {
  const valueData = [
    {
      title: "Better Than Yesterday",
      des: "We thrive on challenges, rethink the ordinary, and commit to ongoing progress. Our mission is daily advancement, with a clear roadmap for continuous improvement beyond.",
    },
    {
      title: "Impact Over Input",
      des: "Every role we play is coded with a commitment to impactful outcomes. Beyond responsibility for actions, each of us shapes results that define our business.",
    },
    {
      title: "One Playground",
      des: "Our shared Playground is the global hub where we create, innovate, and triumph collectively. As a unified global team, we transcend boundaries to reach a common vision.",
    },
    {
      title: "Obsession For Excellence",
      des: "Excellence is not given; it's earned. Our  commitment drives us to achieve the extraordinary. Setting sky-high standards, we deliver with precision, expertise, and unparalleled service quality.",
    },
  ];

  return (
    <div className="about">
      <div className="banner">
        <img src="/about-banner.jpg" alt="" />
      </div>

      <div className="about-content">
        <div className="banner-top">
          <div className="left">
            <h5>GLOBAL TALENT WITHOUT BORDERS</h5>
            <h2>About Placement Plaza</h2>
            <p>
              Streamline your global team management with Playroll—a
              comprehensive platform offering essential HR and payroll tools and
              guidance. Simplify hiring processes and eliminate management
              barriers, allowing businesses to concentrate on their core
              strengths and operations.
            </p>
            <button>Speak to an Expert</button>
          </div>

          <div className="right">
            <img src="/about-banner-top.jpg" alt="" />
          </div>
        </div>

        <div className="vision">
          <Card
            title="Our Vision"
            para="Built to accelerate a borderless economy enabling your people to thrive."
            msg="The secret to building a successful business is this: empower talent who want to change the world, wherever they are."
            isFounder={true}
            img="/vision.jpg"
            flex={true}
          />
        </div>
        <div className="mission">
          <Card
            title="Our Mission"
            para="Owning the complexities of a global workforce from one single platform. We remove the barriers for Employees and Employers alike, to unlock a world of opportunities."
            msg=""
            isFounder={false}
            img="/mission.jpg"
            flex={false}
          />
        </div>

        <div
          className="values-wrap"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
          }}
        >
          <div className="values">
            <h5>Our Values</h5>
            <h2>The Values That Make Up Our DNA</h2>

            <div className="contents">
              {valueData.map((item, i) => {
                return (
                  <div className="box">
                    <div className="left">
                      <img src="/star.png" alt="" />
                    </div>
                    <div className="right">
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

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
    </div>
  );
};

export default About;

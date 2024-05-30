import React, { useState } from "react";
import "./Home.scss";
const Home = () => {
  const uspData = [
    "Reduce onboarding time to minutes",
    "Dedicated human service for human problems, guaranteed. Not bots",
    "Multi-currency payroll, localised benefits, automated compliant contracts and more",
    "Local, legal, tax and accounting expertise at your finger tips",
  ];
  const serviceData = [
    {
      title: "Hire Global Talent",
      subTitle: "Hire Best Global Talent",
    },
    {
      title: "Hire Contractors",
      subTitle: "Hire Contractors Worldwide",
    },
    {
      title: "HR Dashboard",
      subTitle: "Visibility and Control Of All Things HR Through One Platform",
    },
    {
      title: "Source Global Talent",
      subTitle: "Hire Global Talent With Placement Plaza",
    },
  ];

  // Service Detail Logics
  const [subTitle, setSubTitle] = useState("Hire Best Global Talent");
  const [selectedIndx, setSelectedIndx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const setIndx = (index) => {
    setSelectedIndx(index);

    setIsFading(true); // Start fade out
    setTimeout(() => {
      setSubTitle(serviceData[index].subTitle);
      setIsFading(false); // Start fade in
    }, 500); // Match this duration with the CSS transition duration
  };

  return (
    <div className="home">
      <div className="banner">
        <h5>Best Priced HR Software</h5>
        <h2>
          Employer of Record & Compliance for your Global Team.{" "}
          <span style={{ color: "goldenrod" }}>One Platform</span>
        </h2>
        <p>
          Grow your global workforce on one platform with Employer of Record and
          Contractor Management solutions. Best pricing. Same-day onboarding.
          Available in 180+ countries.
        </p>
        <div className="btns">
          <div className="talk">Let's Talk</div>
          <div className="tutorial">Watch Tutorial</div>
        </div>
      </div>

      {/* section-1 */}
      <div className="section-1">
        <h3>
          Leading Global Businesses Choose{" "}
          <span style={{ color: "goldenrod" }}>Placement Plaza</span> For Their
          Global Employment Needs
        </h3>
        <div className="slider">
          <div className="slides">
            <div className="companies">Company-1</div>
            <div className="companies">Company-2</div>
            <div className="companies">Company-3</div>
            <div className="companies">Company-4</div>
            <div className="companies">Company-5</div>
          </div>
          {/* duplicate */}
          <div className="slides">
            <div className="companies">Company-1</div>
            <div className="companies">Company-2</div>
            <div className="companies">Company-3</div>
            <div className="companies">Company-4</div>
            <div className="companies">Company-5</div>
          </div>
        </div>
      </div>

      {/* section-2 */}
      <div className="section-2">
        <h5>Placement Plaza's USP</h5>
        <h2>Your All-in-One Global Workforce Management Partner</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus
          exercitationem aut repudiandae nam. Cumque modi veritatis dicta nemo
          iusto numquam tempora nesciunt, eum quibusdam cupiditate, tempore
          temporibus ducimus ratione sit eveniet non nobis ipsam a voluptatem
          debitis aperiam ut.
        </p>
        <div className="contents">
          <div className="left">
            <img src="/usp.jpg" alt="" />
          </div>
          <div className="right">
            {uspData.map((val, i) => {
              return (
                <li key={i}>
                  <div className="tick">&#10004;</div>
                  <span>{val}</span>
                </li>
              );
            })}
            <button>Get Started</button>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className="section-3">
        <h2>What Services We Offers You</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          non, aspernatur impedit tempore fugit repudiandae natus dicta,
          pariatur id nisi, sequi officiis quis ipsam illum accusamus illo magni
          ullam fuga?
        </p>
        <div className="service-menu">
          {serviceData.map((val, i) => {
            return (
              <div
                key={i}
                className="card"
                style={
                  selectedIndx === i
                    ? {
                        background: "#003e71",
                        color: "white",
                      }
                    : {}
                }
                onClick={() => setIndx(i)}
              >
                {val.title}
              </div>
            );
          })}
        </div>
        <div
          className="service-detail"
          style={isFading ? { opacity: 0 } : { opacity: 1 }}
        >
          <div className="left">
            <h2>{subTitle}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptas nam sed, fuga nihil nostrum molestiae laudantium
              repudiandae minima velit laborum! Voluptate quaerat dolores ipsum
              expedita laborum incidunt voluptatem molestias at quae, dolore
              dicta atque dolor optio, deleniti ullam! At.
            </p>
          </div>
          <div className="right">
            <img src="/global-talent.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* section-4 */}
      <div className="service-detail section-4">
        <div className="left">
          <h5>IN-DEPTH COUNTRY HIRING GUIDES</h5>
          <h2>Guides for Hiring Today's Top Talent</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptas nam sed, fuga nihil nostrum molestiae laudantium
            repudiandae minima velit laborum! Voluptate quaerat dolores ipsum
            expedita laborum incidunt voluptatem molestias at quae, dolore dicta
            atque dolor optio, deleniti ullam! At.
          </p>
          <button>Access Hiring Guides</button>
        </div>
        <div className="right">
          <img src="/guide.jpg" alt="" />
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

export default Home;

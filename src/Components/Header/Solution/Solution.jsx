import React, { useEffect, useState } from "react";
import "./Solution.scss";
import { useNavigate } from "react-router-dom";
const Solution = ({ state, type }) => {
  const solData = [
    {
      title: "Stay Compliant",
      img: "",
    },
    {
      title: "Hire Employee",
      img: "",
    },
    {
      title: "Hire Contractors",
      img: "",
    },
  ];

  const aboutData = [
    {
      title: "About Us",
      img: "",
      nav: "/about-us",
    },
    {
      title: "Case Studies",
      img: "",
      nav: "case",
    },
    {
      title: "Country Coverage",
      img: "",
      nav: "",
    },
  ];

  const resourceData = [
    {
      title: "Global Hiring Guides",
      img: "",
      p: "Free in depth hirings for you",
    },
    {
      title: "Blogs",
      img: "",
      p: "Stay up to date with HR news and blogs",
    },
    {
      title: "HR Terms",
      img: "",
      p: "Your HR Terminology handbook",
    },
  ];

  const [showData, setShowData] = useState([]);
  const [showCol2, setShowCol2] = useState(false);
  const [colTitle, setColTitle] = useState("");
  const [showP, setShowP] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (type === "solution") {
      setShowData(solData);
      setShowCol2(true);
      setColTitle("Solution");
    } else if (type === "about") {
      setShowData(aboutData);
      setShowCol2(false);
      setColTitle("Why Placement Plaza");
    } else {
      setShowData(resourceData);
      setShowCol2(false);
      setColTitle("Tools and Resource Center");
      setShowP(true);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div
      className="soln"
      style={state === false || isClicked === true ? { display: "none" } : {}}
    >
      <div className="col">
        <h5>{colTitle}</h5>
        {showData.map((val, i) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div className="wrapper" key={i}>
                <div className="box"></div>
                <h3
                  onClick={() => {
                    if (val.nav != undefined) {
                      navigate(`${val.nav}`);
                      setIsClicked(true);
                    }

                    setTimeout(() => {
                      setIsClicked(false);
                    }, 2000);
                  }}
                >
                  {val.title}
                </h3>
              </div>
              <p
                style={
                  showP != true
                    ? { display: "none" }
                    : {
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        color: "black",
                        margin: "0",
                        marginLeft: "45px",
                        marginTop: "-15px",
                      }
                }
              >
                {val.p}
              </p>
            </div>
          );
        })}
      </div>
      <div
        className="col"
        style={showCol2 === false ? { display: "none" } : {}}
      >
        <h5>By Role</h5>
        {showData.map((val, i) => {
          return (
            <div className="wrapper" key={i}>
              <div className="box"></div>
              <h3>{val.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solution;

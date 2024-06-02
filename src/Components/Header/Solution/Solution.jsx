import React, { useEffect, useState } from "react";
import "./Solution.scss";
import { useNavigate } from "react-router-dom";
import { GrShieldSecurity } from "react-icons/gr";
import { FaRegFileLines } from "react-icons/fa6";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { GoStack } from "react-icons/go";
import { MdBarChart } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { FaRegFileImage } from "react-icons/fa";

const Solution = ({ state, type }) => {
  const solData = [
    {
      title: "Stay Compliant",
      img: <GrShieldSecurity />,
      nav: "/",
    },
    {
      title: "Hire Employee",
      img: <FaRegFileLines />,
      nav: "/",
    },
    {
      title: "Hire Contractors",
      img: <FaRegFileLines />,
      nav: "/",
    },
  ];
  const solData2 = [
    {
      title: "Finance Teams",
      img: <RiBarChartGroupedFill />,
      nav: "/",
    },
    {
      title: "HR Teams",
      img: <IoIosPeople />,
      nav: "/",
    },
    {
      title: "Legal Teams",
      img: <GoLaw />,
      nav: "/",
    },
  ];

  const aboutData = [
    {
      title: "About Us",
      img: <GoStack />,
      nav: "/about-us",
      p: "Know all about us",
    },
    {
      title: "Case Studies",
      img: <MdBarChart />,
      nav: "/case",
      p: "About our customers",
    },
    {
      title: "Country Coverage",
      img: <MdBarChart />,
      nav: "/",
      p: "Hiring in 30+ Countries",
    },
  ];

  const resourceData = [
    {
      title: "Global Hiring Guides",
      img: <RiGlobalFill />,
      p: "Free in depth hirings for you",
      nav: "/",
    },
    {
      title: "Blogs",
      img: <FaRegFileImage />,
      p: "Stay up to date with HR news and blogs",
      nav: "/",
    },
    {
      title: "HR Terms",
      img: <GrShieldSecurity />,
      p: "Your HR Terminology handbook",
      nav: "/",
    },
  ];

  const [showData, setShowData] = useState([]);
  const [showDataCol2, setShowDataCol2] = useState([]);
  const [showCol2, setShowCol2] = useState(false);
  const [colTitle, setColTitle] = useState("");
  const [showP, setShowP] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (type === "solution") {
      setShowData(solData);
      setShowCol2(true);
      setColTitle("Solution");
      setShowDataCol2(solData2);
    } else if (type === "about") {
      setShowData(aboutData);
      setShowCol2(false);
      setColTitle("Why Placement Plaza");
      setShowP(true);
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
                <div className="box">{val.img}</div>
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
        {showDataCol2.map((val, i) => {
          return (
            <div className="wrapper" key={i}>
              <div className="box">{val.img}</div>
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
          );
        })}
      </div>
    </div>
  );
};

export default Solution;

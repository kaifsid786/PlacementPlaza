import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Case from "./Components/CaseStudies/Case";
import Contact from "./Components/Contact/Contact";
import HeaderPhone from "./Components/HeaderPhone/HeaderPhone";
const App = () => {
  return (
    <div
      style={{
        // width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {window.innerWidth > 900 ? <Header /> : <HeaderPhone />}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about-us" Component={About} />
        <Route path="/case" Component={Case} />
        <Route path="/contact-us" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

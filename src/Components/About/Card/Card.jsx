import React from "react";
import "./Card.scss";
const Card = ({ title, para, msg, isFounder, img, flex }) => {
  return (
    <div className="card" style={!flex ? { flexDirection: "row-reverse" } : {}}>
      <div className="left">
        <h2>{title}</h2>
        <p>{para}</p>
        <p className="message">"{msg}"</p>
        {isFounder ? <h5>Faiz Imam, CEO and Founder</h5> : ""}
      </div>

      <div className="right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Card;

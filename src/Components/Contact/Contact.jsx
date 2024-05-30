import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <img src="/contact.jpg" alt="" className="banner-bottom" />

      <div className="form">
        <h2>Get Started With Placement Plaza</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore animi
          laudantium nulla perferendis voluptatum! Dicta tempora soluta velit
          repellat asperiores?
        </p>

        <form action="">
          <div className="wrapper">
            <label htmlFor="">
              First name<span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" placeholder="First name" />
          </div>
          <div className="wrapper">
            <label htmlFor="">
              Last name<span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" placeholder="Last name" />
          </div>
          <div className="wrapper">
            <label htmlFor="">
              Buisness Email<span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" placeholder="Buisness Email" />
          </div>
          <div className="wrapper">
            <label htmlFor="">
              Hiring Timeline<span style={{ color: "red" }}>*</span>
            </label>
            <select name="" id="" style={{ color: "gray" }}>
              <option value="">Select</option>
              <option value="">Immediatley</option>
              <option value="">1-3 Months</option>
              <option value="">4-6 Months</option>
              <option value="">6+ Months</option>
            </select>
          </div>
          <div className="wrapper">
            <label htmlFor="">
              Have you connected us before?
              <span style={{ color: "red" }}>*</span>
            </label>
            <select name="" id="" style={{ color: "gray" }}>
              <option value="">Please Select</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="wrapper">
            <label htmlFor="">
              How Many Employees Are You Looking to Hire?
              <span style={{ color: "red" }}>*</span>
            </label>
            <input type="number" placeholder="No. of Employees" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Where are you hiring?</label>
            <input type="text" placeholder="Hiring Place" />
          </div>
          <div className="wrapper">
            <label htmlFor="">Phone Number</label>
            <input type="number" placeholder="+91" />
          </div>
        </form>

        <p
          style={{
            color: "black",
            fontSize: "0.5rem",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          By clicking submit, you understand that Playroll will process your
          info to respond to you in accordance with our Privacy Policy.
        </p>

        <div className="btn">
          <button>Schedule Your Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

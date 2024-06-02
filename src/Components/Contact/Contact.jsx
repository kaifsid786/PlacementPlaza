import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
const Contact = () => {
  // Email Js --- Connection -------------------------->
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u8tumqq",
        "template_ggewpss",
        form.current,
        "Jr2_NGqGKWQW26WzV"
      )
      .then(
        (result) => {
          alert("Thank You , we have received your message");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact">
      <img src="/contact.jpg" alt="" className="banner-bottom" />

      <div className="form">
        <h2>Get Started With Placement Plaza</h2>
        <p>
          We value your feedback and are here to assist you with any inquiries
          or support you may need. Whether you have a question, need assistance,
          or want to share your thoughts, we're just a message away.
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="top">
            <div className="wrapper">
              <label htmlFor="">
                First name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="First name"
                required
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">
                Last name<span style={{ color: "red" }}>*</span>
              </label>
              <input name="name" type="text" placeholder="Last name" required />
            </div>
            <div className="wrapper">
              <label htmlFor="">
                Buisness Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="Buisness Email"
                required
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">
                Hiring Timeline<span style={{ color: "red" }}>*</span>
              </label>
              <select name="timeline" id="" style={{ color: "gray" }} required>
                <option value="Select">Select</option>
                <option value="Immediatley">Immediatley</option>
                <option value="1-3 Months">1-3 Months</option>
                <option value="4-6 Months">4-6 Months</option>
                <option value="6+ Months">6+ Months</option>
              </select>
            </div>
            <div className="wrapper">
              <label htmlFor="">
                Have you connected us before?
                <span style={{ color: "red" }}>*</span>
              </label>
              <select
                name="past_client"
                id=""
                style={{ color: "gray" }}
                required
              >
                <option value="Please Select">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="wrapper">
              <label htmlFor="">
                How Many Employees Are You Looking to Hire?
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="emp_no"
                type="number"
                placeholder="No. of Employees"
                required
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">Where are you hiring?</label>
              <input
                name="hiring_place"
                type="text"
                placeholder="Hiring Place"
              />
            </div>
            <div className="wrapper">
              <label htmlFor="">Phone Number</label>
              <input name="number" type="number" placeholder="+91" />
            </div>
          </div>
          <div className="bottom">
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
        </form>
      </div>
    </div>
  );
};

export default Contact;

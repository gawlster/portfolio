import React from "react";
import Form from "./components/Form";
import "./index.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 className="header">Get in touch!</h1>
      <p className="sub">
        I am always searching for new ways to grow as a developer. If you have
        an opportunity and think I'd be a good fit, or if you just want to say
        hi, I'd love to hear from you!
      </p>
      <Form />
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import "./Contact.css"; // Import your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div id="inclusive">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Your Message*"
            required
          ></textarea>
        </div>
        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>
      <div id="bottom-part">
        <div className="bottom-part-row">
          <div className="logo-title">
            <i class="bi bi-geo-alt" id="logo1"></i> Location
          </div>
          <p>San Diego/USA</p>
        </div>
        <div className="bottom-part-row">
          <div className="logo-title">
            <i class="bi bi-telephone" id="logo2"></i> Call Me
          </div>
          <p>+123 456 7890</p>
        </div>
        <div className="bottom-part-row" style={{ borderRightStyle: "none" }}>
          <div className="logo-title">
            <i class="bi bi-envelope" id="logo3"></i> Email Me
          </div>
          <p>hello@example.com</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;

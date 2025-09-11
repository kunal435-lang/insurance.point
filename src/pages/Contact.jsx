import React, { useRef } from "react";
import emailjs from "emailjs-com";
import contactImg from "../images/contact.png";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7y0u913", // EmailJS Service ID
        "template_o4ust4r", // EmailJS Template ID
        form.current,
        "4YN1K4fV3XPPgCGIy" // EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-wrapper">
    <h1>Contact us</h1>

      <div className="contact-grid">
        {/* Left - Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We’re here to help you with insurance queries, claims, or guidance.</p>
          <ul>
            <li><strong>Owner:</strong> Hemant Kumar</li>
            <li><strong>Email:</strong> insurance.hemant777@gmail.com</li>
            <li><strong>Phone:</strong> +91 9910219290</li>
            <li><strong>Address:</strong> Insurance Point, Delhi, India</li>
          </ul>
        </div>

        {/* Right - Contact Form */}
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" name="user_email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea name="message" placeholder="Write your message..." required />

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83924134053!2d77.06889939999999!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a0b5a5bdb5%3A0x8f6f5a58bfb5a9cb!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

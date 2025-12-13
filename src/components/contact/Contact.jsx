import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_v6lc9za",
        "template_67j6vsm",
        form.current,
        "Spyr_MH9nLqvyY8iF"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("❌ Error sending message. Try again.");
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind? Let’s work together and build something amazing.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p>Email: <span>rollyocta05@gmail.com</span></p>
          <p>Location: <span>Cavite, Philippines</span></p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <input type="text" name="user_name" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="user_email" required />
            <label>Email</label>
          </div>

          <div className="input-group textarea">
            <textarea name="message" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit" className="contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
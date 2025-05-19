import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const form = useRef();
  const [status, setStatus] = useState({ submitting: false, message: "" });
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: "" });

    emailjs
      .sendForm(
        "service_upzxuzp",
        "template_v0zwkex",
        form.current,
        'user_XZcX2kLITmngmtgeHcG9E'
      )
      .then(
        () => {
          setStatus({ 
            submitting: false, 
            message: "Message sent successfully!" 
          });
          form.current.reset();
        },
        () => {
          setStatus({ 
            submitting: false, 
            message: "Failed to send message. Please try again." 
          });
        }
      );
  };

  return (
    <section className={`contact-section ${darkMode ? "dark" : "light"}`} id="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's talk!</p>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              aria-label="Your Message"
            ></textarea>
          </div>

          <button onClick={() => setDone(true)} 
            type="submit" 
            disabled={status.submitting}
            className="submit-btn"
          >
            {status.submitting ? (
              <span className="btn-loader"></span>
            ) : (
              "Send Message"
            )}
          </button>
          <span>{done && "Feel free to contact me via LinkedIn, Xing, email, or phone."}</span>

          {status.message && (
            <p className={`status-message ${
              status.message.includes("Failed") ? "error" : "success"
            }`}>
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
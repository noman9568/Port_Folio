// src/components/ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wotimw",     // e.g., service_qwerty123
        "template_rv2goo6",    // e.g., template_abc456
        form.current,
        "pIvQlbztun0rHcUdc"      // e.g., BHo7XZ123456ABC
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Enter your name here..." required />
      <input type="email" name="user_email" placeholder="Enter your email here..." required />
      <textarea name="message" placeholder="Enter the message here..." required />
      <div>
        <button type="submit">Send</button>
        <div className="dot3 c-dot"></div>
      </div>
    </form>
  );
};

export default ContactForm;

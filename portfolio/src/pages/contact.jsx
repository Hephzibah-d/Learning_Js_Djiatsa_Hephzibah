
// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contactContainer">
        <div className="contactForm">
          <h2>Contact Me</h2>
          <form action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contactDetails">
          <h2>Contact Details</h2>
          <p>Email: <a href="mailto:dunamisjunior15@gmail.com">dunamisjunior15@gmail.com</a></p>
          <p>Phone: +237 681 811 825</p>
          <div className="socialMedia">
            <a href="https://x.com/DunamisJun66166" target="_blank">Twitter</a>
            <a href="https://www.linkedin.com/in/dunamis-junior-26b6232bb/" target="_blank">LinkedIn</a>
            <a href="https://github.com/Strife-cyber/" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// Hero.jsx
import React from "react";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="main hero">
      <div className="main avatar">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="main info">
        <p>
          Hello, I'm <span>Djiatsa Hephzibah</span>, a passionate <span>Software Engineer</span> specializing in creating
          intuitive high-performance applications.
        </p>
        <p>
          With a strong background in <span>Java, Flutter, Python, and JavaScript,</span> I thrive on turning complex
          challenges into elegant user-friendly solutions.
        </p>
        <p>
          My work blends technical expertise with a keen eye for design, crafting experiences that not only function
          flawlessly but also stand out visually.
        </p>
        <p>Let's build something great together.</p>
      </div>
    </section>
  );
};

export default Hero;
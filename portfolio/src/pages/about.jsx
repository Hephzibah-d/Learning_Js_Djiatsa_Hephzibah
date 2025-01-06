// About.jsx
import React from "react";

const skills = [
  { skill: "Java", percentage: 85, description: "Experienced in Java, focusing on enterprise applications and backend development." },
  { skill: "Flutter", percentage: 75, description: "Proficient in building cross-platform mobile applications with Flutter." },
  { skill: "Python", percentage: 90, description: "Strong experience with Python, particularly in data analysis and machine learning." },
  { skill: "JavaScript", percentage: 80, description: "Experienced in JavaScript for web development and creating dynamic user interfaces." },
  { skill: "C++", percentage: 55, description: "Intermediate experience with C++, focusing on performance optimization and system programming." },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="aboutContainer">
        <h2>About Me</h2>
        <p>
          Hello! I'm <span className="name">Djiatsa Hephzibah</span>, a dedicated <span className="profession">Software Engineer</span> with a passion for developing innovative and efficient software solutions. Here are some of my skills and experience levels in various programming languages:
        </p>
        <div className="skillContainer">
          {skills.map(({ skill, percentage, description }) => (
            <div key={skill} className="skillCard">
              <div className="skillCircle">
                <svg>
                  <circle className="background" cx="50" cy="50" r="45"></circle>
                  <circle
                    className="progress"
                    cx="50"
                    cy="50"
                    r="45"
                    style={{ strokeDasharray: `${percentage * 2.82} ${282 - percentage * 2.82}` }}
                  ></circle>
                </svg>
                <div className="percentage">{percentage}%</div>
              </div>
              <h3>{skill}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
// Projects.jsx
import React from "react";

const projects = [
  {
    name: "Portfolio",
    description: "A personal portfolio website using HTML, CSS, and JavaScript to reach out to possible employers.",
    link: "https://github.com/Strife-cyber/Portfolio/",
  },
  {
    name: "Note Taker",
    description: "A simple note-taking app using Flutter and Sembast as a database, to ease the note-taking process.",
    link: "https://github.com/Strife-cyber/Note-Taker/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projectsContainer">
        <h2>Projects</h2>
        {projects.map(({ name, description, link }) => (
          <div key={name} className="projectCard">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link} className="projectLink" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
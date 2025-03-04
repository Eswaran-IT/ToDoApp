
import React from "react";

// Sample project data
const projects = [
  {
    title: "Automated Cloud Based Weekly Report Generator",
    description: "This project automates the process of generating weekly reports using AWS services.",
    link: "https://github.com/Eswaran-IT/Cloud-Report-Generator"
  },
  {
    title: "Java Spring Boot Application",
    description: "A sample project to manage user information using Java and Spring Boot.",
    link: "https://github.com/Eswaran-IT/Java-Spring-Boot"
  },
  {
    title: "Personal Portfolio Website",
    description: "A portfolio website showcasing my projects, skills, and contact details.",
    link: "https://github.com/Eswaran-IT/Portfolio"
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="w-full py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

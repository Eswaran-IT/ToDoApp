import React from "react";

// Sample project data with images
const projects = [
  {
    title: "Automated Cloud Based Weekly Report Generator",
    description: "This project automates the process of generating weekly reports using AWS services.",
    link: "https://github.com/Eswaran-IT/Cloud-Report-Generator",
    image: "/images/cloud-report-generator.jpg"
  },
  {
    title: "Java Spring Boot Application",
    description: "A sample project to manage user information using Java and Spring Boot.",
    link: "https://github.com/Eswaran-IT/Java-Spring-Boot",
    image: "/images/spring-boot.jpg"
  },
  {
    title: "Personal Portfolio Website",
    description: "A portfolio website showcasing my projects, skills, and contact details.",
    link: "https://github.com/Eswaran-IT/Portfolio",
    image: "/images/portfolio.jpg"
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="w-full py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import awsIcon from "./assets/aws.svg";
import javaIcon from "./assets/java.svg";
import katalonIcon from "./assets/katalon.png";
import reactIcon from "./assets/react.png";
import springIcon from "./assets/spring.svg";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Car Management System",
    description: "A system for managing car services and rentals.",
    link: "https://github.com/Eswaran-IT/CarManagementSystem",
    icon: javaIcon,
  },
  {
    title: "Prediction System",
    description: "A machine learning project for making predictions based on data.",
    link: "https://github.com/Eswaran-IT/PredictionSystem",
    icon: javaIcon,
  },
  {
    title: "To-Do App",
    description: "A simple to-do app to manage daily tasks efficiently.",
    link: "https://github.com/Eswaran-IT/ToDoApp",
    icon: reactIcon,
  },
  {
    title: "Cloud Automated Report",
    description: "Automates weekly report generation using AWS services.",
    link: "https://github.com/Eswaran-IT/Cloud-Automated-Report",
    icon: awsIcon,
  },
  {
    title: "Spring Boot Projects",
    description: "A collection of Spring Boot applications for different use cases.",
    link: "https://github.com/Eswaran-IT/SpringBoot",
    icon: springIcon,
  },
];

function Projects() {
  return (
    <div className="h-screen bg-purple-900 px-4 py-8 overflow-y-auto">
      <h1 className="text-5xl text-center font-bold mb-12 text-white">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
          >
            {/* Wrap only image, title, and description in a div */}
            <div className="flex flex-col items-center p-6">
              <img
                src={project.icon}
                alt={project.title}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-purple-700 text-center">
                {project.title}
              </h2>
              <p className="text-gray-600 text-center">{project.description}</p>
            </div>

            {/* Single clickable GitHub link outside main content */}
            <div className="mb-6 text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-700 hover:text-purple-600 transition duration-300"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub className="w-8 h-8 mx-auto" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

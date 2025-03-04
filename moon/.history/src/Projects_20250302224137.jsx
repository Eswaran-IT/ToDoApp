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
    title: "Library Management System",
    description: "A Java-based system for managing library books and members.",
    link: "https://github.com/Eswaran-IT/Core-Java-Projects/tree/main/Library_Management_System",
    icon: javaIcon,
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
    <div className="h-[calc(100vh-64px)] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-4 py-6 overflow-x-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        My Projects
      </h1>

      {/* Horizontal Scrolling Wrapper */}
      <div className="flex flex-nowrap space-x-6 overflow-x-auto px-4 pb-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            animate={{ opacity: [0, 1], x: [50, 0] }} 
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow-lg w-80 flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6"
            >
              <img
                src={project.icon}
                alt={project.title}
                className="w-20 h-20 mb-4"
              />
              <h2 className="text-xl font-semibold text-purple-700 text-center mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm text-center mb-4">
                {project.description}
              </p>
              <FaGithub className="w-8 h-8 text-purple-700 hover:text-purple-900 transition duration-300" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

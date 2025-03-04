import React from "react";
import awsIcon from "./assets/aws.svg";
import javaIcon from "./assets/java.svg";
import katalonIcon from "./assets/katalon.png";
import reactIcon from "./assets/react.png";
import springIcon from "./assets/spring.svg";
import { FaGithub } from "react-icons/fa"; // GitHub icon import
import { motion } from "framer-motion"; // Import motion from framer-motion

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
];

function Projects() {
  return (
    <div className="h-screen bg-purple-900 px-8 py-12">
      <h1 className="text-5xl text-center font-bold mb-12 text-white">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            animate={{ opacity: [0, 1], scale: [0.9, 1] }} // Fade-in and scale-up animation
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col h-full group"
            >
              <img
                src={project.icon}
                alt={project.title}
                className="w-24 h-24 mx-auto mt-6 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-semibold text-center mb-4 text-purple-700 group-hover:text-purple-800 transition duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-center">{project.description}</p>
              </div>
              <div className="mb-6 text-center mt-auto">
                <FaGithub className="w-8 h-8 mx-auto text-purple-700 hover:text-white transition duration-300 group-hover:text-purple-600 cursor-pointer" />
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

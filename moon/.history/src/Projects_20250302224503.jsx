import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import awsIcon from "./assets/aws.svg";
import javaIcon from "./assets/java.svg";
import katalonIcon from "./assets/katalon.png";
import reactIcon from "./assets/react.png";
import springIcon from "./assets/spring.svg";

const projects = [
  { title: "Car Management System", description: "A system for managing car services and rentals.", link: "https://github.com/Eswaran-IT/CarManagementSystem", icon: javaIcon },
  { title: "Prediction System", description: "A machine learning project for making predictions based on data.", link: "https://github.com/Eswaran-IT/PredictionSystem", icon: javaIcon },
  { title: "To-Do App", description: "A simple to-do app to manage daily tasks efficiently.", link: "https://github.com/Eswaran-IT/ToDoApp", icon: reactIcon },
  { title: "Library Management System", description: "A Java-based system for managing library books and members.", link: "https://github.com/Eswaran-IT/Core-Java-Projects/tree/main/Library_Management_System", icon: javaIcon },
  { title: "Cloud Automated Report", description: "Automates weekly report generation using AWS services.", link: "https://github.com/Eswaran-IT/Cloud-Automated-Report", icon: awsIcon },
  { title: "ATM Interface", description: "A simple Java project that simulates ATM functionalities.", link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/atm_interface", icon: javaIcon },
  { title: "Grade Calculator", description: "A Java program to calculate student grades based on scores.", link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/grade_calculator", icon: javaIcon },
  { title: "Random Number Generator", description: "A small project to generate random numbers using Java.", link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/random_Number_Generator", icon: javaIcon },
  { title: "Code Challenge 60 Days", description: "A repository containing my daily coding challenges.", link: "https://github.com/Eswaran-IT/Code_Challenge-90days", icon: javaIcon },
  { title: "Spring Framework Projects", description: "Various projects demonstrating Spring Framework capabilities.", link: "https://github.com/Eswaran-IT/Spring-Framework-", icon: springIcon },
  { title: "Spring Boot Projects", description: "A collection of Spring Boot applications for different use cases.", link: "https://github.com/Eswaran-IT/SpringBoot", icon: springIcon },
  { title: "Advanced Java Projects", description: "Projects demonstrating advanced Java concepts.", link: "https://github.com/Eswaran-IT/Java_Advance", icon: javaIcon },
  { title: "SmartBridge Testing Project", description: "A software testing project developed as part of an internship.", link: "https://github.com/Eswaran-IT/SmartBridge_Testing_Project", icon: katalonIcon },
];

function Projects() {
  return (
    <div className="h-[calc(100vh-64px)] bg-purple-700 px-6 py-6 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-screen-lg overflow-hidden">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow-lg w-full h-[calc(100vh-64px)] flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-between p-6 h-full">
              <img src={project.icon} alt={project.title} className="w-24 h-24 mb-4" />
              <h2 className="text-xl font-semibold text-purple-700 text-center mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm text-center mb-4">{project.description}</p>
              <FaGithub className="w-8 h-8 text-purple-700 hover:text-purple-900 transition duration-300" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

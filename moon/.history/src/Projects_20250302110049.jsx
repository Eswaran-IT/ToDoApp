import React from "react";
import awsIcon from "./assets/aws.svg";
import javaIcon from "./assets/java.svg";
import katalonIcon from "./assets/katalon.png";
import reactIcon from "./assets/react.png";
import codeIcon from "./assets/code.png";
import springIcon from "./assets/spring.svg";
import { FaGithub } from 'react-icons/fa';  // GitHub icon import

const projects = [
  {
    title: "Car Management System",
    description: "A system for managing car services and rentals.",
    link: "https://github.com/Eswaran-IT/CarManagementSystem",
    icon: javaIcon
  },
  {
    title: "Prediction System",
    description: "A machine learning project for making predictions based on data.",
    link: "https://github.com/Eswaran-IT/PredictionSystem",
    icon: javaIcon
  },
  {
    title: "To-Do App",
    description: "A simple to-do app to manage daily tasks efficiently.",
    link: "https://github.com/Eswaran-IT/ToDoApp",
    icon: reactIcon
  },
  {
    title: "Library Management System",
    description: "A Java-based system for managing library books and members.",
    link: "https://github.com/Eswaran-IT/Core-Java-Projects/tree/main/Library_Management_System",
    icon: javaIcon
  },
  {
    title: "Cloud Automated Report",
    description: "Automates weekly report generation using AWS services.",
    link: "https://github.com/Eswaran-IT/Cloud-Automated-Report",
    icon: awsIcon
  },
  {
    title: "ATM Interface",
    description: "A simple Java project that simulates ATM functionalities.",
    link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/atm_interface",
    icon: javaIcon
  },
  {
    title: "Grade Calculator",
    description: "A Java program to calculate student grades based on scores.",
    link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/grade_calculator",
    icon: javaIcon
  },
  {
    title: "Random Number Generator",
    description: "A small project to generate random numbers using Java.",
    link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/random_Number_Generator",
    icon: javaIcon
  },
  {
    title: "Code Challenge 90 Days",
    description: "A repository containing my daily coding challenges.",
    link: "https://github.com/Eswaran-IT/Code_Challenge-90days",
    icon: codeIcon
  },
  {
    title: "Spring Framework Projects",
    description: "Various projects demonstrating Spring Framework capabilities.",
    link: "https://github.com/Eswaran-IT/Spring-Framework-",
    icon: springIcon
  },
  {
    title: "Spring Boot Projects",
    description: "A collection of Spring Boot applications for different use cases.",
    link: "https://github.com/Eswaran-IT/SpringBoot",
    icon: springIcon
  },
  {
    title: "Advanced Java Projects",
    description: "Projects demonstrating advanced Java concepts.",
    link: "https://github.com/Eswaran-IT/Java_Advance",
    icon: javaIcon
  },
  {
    title: "SmartBridge Testing Project",
    description: "A software testing project developed as part of an internship.",
    link: "https://github.com/Eswaran-IT/SmartBridge_Testing_Project",
    icon: katalonIcon
  }
];

function Projects() {
  return (
    <div className="h-screen bg-white px-4 py-8 overflow-y-scroll">
      <h1 className="text-5xl text-center font-bold mb-12 text-purple-700">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-purple-700 text-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-purple-800">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative flex flex-col h-full group">
              <img
                src={project.icon}
                alt={project.title}
                className="w-24 h-24 mx-auto mt-6 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-semibold text-center mb-4 text-white group-hover:text-white transition duration-300">{project.title}</h2>
                <p className="text-gray-200 text-center">{project.description}</p>
              </div>
              <div className="mb-6 text-center mt-6">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-8 h-8 mx-auto text-white hover:text-gray-300 transition duration-300 group-hover:text-purple-200 cursor-pointer" />
                </a>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React, { useRef } from "react";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
  const scrollRef = useRef(null);

  // Handle dragging
  const dragScroll = (event) => {
    event.preventDefault();
    const slider = scrollRef.current;
    let startX = event.pageX || event.touches[0].pageX;
    let scrollLeft = slider.scrollLeft;

    const mouseMoveHandler = (e) => {
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 2; // Adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const stopDragging = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchmove", mouseMoveHandler);
      document.removeEventListener("touchend", stopDragging);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchmove", mouseMoveHandler);
    document.addEventListener("touchend", stopDragging);
  };

  // Handle left & right arrow clicks
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="h-[calc(100vh-64px)] bg-purple-700 px-6 py-6 relative flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-6">My Projects</h1>

      {/* Left Arrow */}
      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition" onClick={scrollLeft}>
        <FaArrowLeft className="text-purple-700 w-6 h-6" />
      </button>

      {/* Project Cards Container */}
      <div
        ref={scrollRef}
        onMouseDown={dragScroll}
        onTouchStart={dragScroll}
        className="flex flex-nowrap space-x-6 w-full overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing px-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow-lg w-80 h-[calc(100vh-64px)] flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-between p-6 h-full">
              <img src={project.icon} alt={project.title} className="w-20 h-20 mb-4" />
              <h2 className="text-xl font-semibold text-purple-700 text-center mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm text-center mb-4">{project.description}</p>
              <FaGithub className="w-8 h-8 text-purple-700 hover:text-purple-900 transition duration-300" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition" onClick={scrollRight}>
        <FaArrowRight className="text-purple-700 w-6 h-6" />
      </button>
    </div>
  );
}

export default Projects;

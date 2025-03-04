import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import images from src/assets
import javaIcon from "./assets/java.jpg";
import awsIcon from "./assets/aws.svg";
import katalonIcon from "./assets/katalon.png";
import pythonIcon from "./assets/python.svg";
import reactIcon from "../assets/react.png"; // Updated to PNG
import codeIcon from "../assets/code.svg";
import springIcon from "../assets/spring.png"; // Using the same image for both Spring and Spring Boot

const iconMap = {
  java: <img src={javaIcon} alt="Java" width={40} height={40} />,
  aws: <img src={awsIcon} alt="AWS" width={40} height={40} />,
  katalon: <img src={katalonIcon} alt="Katalon" width={40} height={40} />,
  python: <img src={pythonIcon} alt="Python" width={40} height={40} />,
  react: <img src={reactIcon} alt="React" width={40} height={40} />,
  code: <img src={codeIcon} alt="Code" width={40} height={40} />,
  spring: <img src={springIcon} alt="Spring/Spring Boot" width={40} height={40} /> // Both Spring and Spring Boot use this image
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/gitproject.json") // Fetch JSON from public folder
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div id="projects" className="w-full min-h-screen bg-white text-gray-900 overflow-y-auto scroll-snap-type-y mandatory">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-purple-600">My Projects</h2>
        <div className="flex flex-col items-center gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 min-h-[110vh] w-11/12 flex flex-col justify-center items-center scroll-snap-align-start"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center bg-gray-200 py-6 w-full">
                {iconMap[project.icon] || <img src={codeIcon} alt="Code" width={40} height={40} />}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-purple-500 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

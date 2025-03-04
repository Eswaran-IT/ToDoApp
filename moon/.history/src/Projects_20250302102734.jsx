import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { SiAmazonaws, SiSpringboot, SiKatalon, SiReact, SiArtificialintelligence } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const iconMap = {
  java: <FaJava size={40} color="#E76F00" />,
  aws: <SiAmazonaws size={40} color="#FF9900" />,
  springboot: <SiSpringboot size={40} color="#6DB33F" />,
  katalon: <SiKatalon size={40} color="#563D7C" />,
  react: <SiReact size={40} color="#61DAFB" />,
  ai: <SiArtificialintelligence size={40} color="#FF3366" />,
  code: <FaCode size={40} color="#555" />
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(".//gitproject.json")
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
                {iconMap[project.icon] || <FaCode size={40} color="#333" />}
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

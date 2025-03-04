import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faJava, 
  faPython 
} from '@fortawesome/free-brands-svg-icons';
import { FaGit } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-purple-600 mb-8">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
        {/* HTML */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faHtml5} size="4x" className="text-[#E34F26]" />
        </li>
        {/* CSS */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" className="text-[#1572B6]" />
        </li>
        {/* JavaScript */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faJs} size="4x" className="text-[#F7DF1E]" />
        </li>
        {/* React */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faReact} size="4x" className="text-[#61DBFB]" />
        </li>
        {/* Java */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faJava} size="4x" className="text-[#007396]" />
        </li>
        {/* Python */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faPython} size="4x" className="text-[#306998]" />
        </li>
        {/* AWS (Custom Image) */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/aws-icon.png" 
            alt="AWS" 
            className="w-24 h-24 mb-2"
          />
        </li>
        {/* Spring (Custom Image) */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/spring-icon.png" 
            alt="Spring" 
            className="w-24 h-24 mb-2"
          />
        </li>
        {/* Git */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <FaGit size="4em" className="text-[#F1502F]" />
        </li>
        {/* Postman (Custom Image) */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/postman-icon.png" 
            alt="Postman" 
            className="w-24 h-24 mb-2"
          />
        </li>
        {/* Selenium (Custom Image) */}
        <li className="flex justify-center items-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/selenium-icon.png" 
            alt="Selenium" 
            className="w-24 h-24 mb-2"
          />
        </li>
      </ul>
    </div>
  );
};

export default Skills;

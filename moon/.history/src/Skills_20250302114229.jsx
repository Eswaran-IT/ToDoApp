import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faJava, 
  faPython, 
  faAws 
} from '@fortawesome/free-brands-svg-icons';
import { FaGit } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl p-6">
        <h2 className="text-5xl font-semibold text-center text-purple-600 mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 justify-center">
          {/* HTML */}
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faHtml5} size="5x" className="text-[#E34F26] hover:text-[#FF5722] transition-colors duration-300" />
          </div>
          {/* CSS */}
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faCss3Alt} size="5x" className="text-[#1572B6] hover:text-[#03A9F4] transition-colors duration-300" />
          </div>
          {/* JavaScript */}
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faJs} size="5x" className="text-[#F7DF1E] hover:text-[#FFEB3B] transition-colors duration-300" />
          </div>
          {/* React */}
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faReact} size="5x" className="text-[#61DBFB] hover:text-[#3F51B5] transition-colors duration-300" />
          </div>
          {/* Java */}
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faJava} size="5x" className="text-[#007396] hover:text-[#FF5722] transition-colors duration-300" />
          </div>
          {/* Python */}
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faPython} size="5x" className="text-[#306998] hover:text-[#FF4081] transition-colors duration-300" />
          </div>
          {/* AWS */}
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faAws} size="5x" className="text-[#FF9900] hover:text-[#FF5722] transition-colors duration-300" />
          </div>
          {/* Git */}
          <div className="flex justify-center items-center">
            <FaGit size="5em" className="text-[#F1502F] hover:text-[#FF5722] transition-colors duration-300" />
          </div>
          {/* Spring (Custom Image) */}
          <div className="flex justify-center items-center">
            <img 
              src="/assets/skills/spring-icon.png" 
              alt="Spring" 
              className="w-24 h-24 hover:scale-110 transition duration-300 transform" 
            />
          </div>
          {/* Postman (Custom Image) */}
          <div className="flex justify-center items-center">
            <img 
              src="/assets/skills/postman-icon.png" 
              alt="Postman" 
              className="w-24 h-24 hover:scale-110 transition duration-300 transform" 
            />
          </div>
          {/* Selenium (Custom Image) */}
          <div className="flex justify-center items-center">
            <img 
              src="/assets/skills/selenium-icon.png" 
              alt="Selenium" 
              className="w-24 h-24 hover:scale-110 transition duration-300 transform" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

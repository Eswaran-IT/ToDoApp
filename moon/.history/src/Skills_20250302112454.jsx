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
import { FaGit, FaDocker, FaPostman } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-purple-600 mb-8">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* HTML */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faHtml5} size="4x" className="text-[#E34F26] mb-2" />
          <p className="text-purple-600">HTML</p>
        </li>
        {/* CSS */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" className="text-[#1572B6] mb-2" />
          <p className="text-purple-600">CSS</p>
        </li>
        {/* JavaScript */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faJs} size="4x" className="text-[#F7DF1E] mb-2" />
          <p className="text-purple-600">JavaScript</p>
        </li>
        {/* React */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faReact} size="4x" className="text-[#61DBFB] mb-2" />
          <p className="text-purple-600">React</p>
        </li>
        {/* Java */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faJava} size="4x" className="text-[#007396] mb-2" />
          <p className="text-purple-600">Java</p>
        </li>
        {/* Python */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faPython} size="4x" className="text-[#306998] mb-2" />
          <p className="text-purple-600">Python</p>
        </li>
        {/* AWS */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FontAwesomeIcon icon={faAws} size="4x" className="text-[#FF9900] mb-2" />
          <p className="text-purple-600">AWS</p>
        </li>
        {/* Git */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FaGit size="4em" className="text-[#F1502F] mb-2" />
          <p className="text-purple-600">Git</p>
        </li>
        {/* Docker */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FaDocker size="4em" className="text-[#2496ED] mb-2" />
          <p className="text-purple-600">Docker</p>
        </li>
        {/* Postman */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <FaPostman size="4em" className="text-[#FF6C37] mb-2" />
          <p className="text-purple-600">Postman</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;

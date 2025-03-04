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

// Custom imports for the other icons
import { FaGit, FaDocker, FaMysql, FaGitAlt, FaPostman } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-purple-600 mb-8">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* HTML */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FontAwesomeIcon icon={faHtml5} size="3x" className="text-[#E34F26] mb-2" />
          <p className="text-purple-600">HTML</p>
        </li>
        {/* CSS */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-[#1572B6] mb-2" />
          <p className="text-purple-600">CSS</p>
        </li>
        {/* JavaScript */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FontAwesomeIcon icon={faJs} size="3x" className="text-[#F7DF1E] mb-2" />
          <p className="text-purple-600">JavaScript</p>
        </li>
        {/* React */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FontAwesomeIcon icon={faReact} size="3x" className="text-[#61DBFB] mb-2" />
          <p className="text-purple-600">React</p>
        </li>
        {/* Java */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FontAwesomeIcon icon={faJava} size="3x" className="text-[#007396] mb-2" />
          <p className="text-purple-600">Java</p>
        </li>
        {/* Python */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FontAwesomeIcon icon={faPython} size="3x" className="text-[#306998] mb-2" />
          <p className="text-purple-600">Python</p>
        </li>
        {/* AWS */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FontAwesomeIcon icon={faAws} size="3x" className="text-[#FF9900] mb-2" />
          <p className="text-purple-600">AWS</p>
        </li>
        {/* Git */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FaGit size="3em" className="text-[#F1502F] mb-2" />
          <p className="text-purple-600">Git</p>
        </li>
        {/* Docker */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FaDocker size="3em" className="text-[#2496ED] mb-2" />
          <p className="text-purple-600">Docker</p>
        </li>
        {/* MySQL */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FaMysql size="3em" className="text-[#00758F] mb-2" />
          <p className="text-purple-600">MySQL</p>
        </li>
        {/* Spring */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Spring_Framework_Logo_2018.svg" alt="Spring" className="w-12 mx-auto mb-2" />
          <p className="text-purple-600">Spring</p>
        </li>
        {/* Flutter */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/LogoFlutter.svg" alt="Flutter" className="w-12 mx-auto mb-2" />
          <p className="text-purple-600">Flutter</p>
        </li>
        {/* C */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" className="w-12 mx-auto mb-2" />
          <p className="text-purple-600">C</p>
        </li>
        {/* C++ */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C++" className="w-12 mx-auto mb-2" />
          <p className="text-purple-600">C++</p>
        </li>
        {/* Postman */}
        <li className="text-center hover:scale-105 transition duration-300 transform">
          <FaPostman size="3em" className="text-[#FF6C37] mb-2" />
          <p className="text-purple-600">Postman</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faJava, faPython, faAws } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <li className="text-center">
          <FontAwesomeIcon icon={faHtml5} size="3x" className="text-purple-500 mb-2" />
          <p className="text-purple-500">HTML</p>
        </li>
        <li className="text-center">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-purple-500 mb-2" />
          <p className="text-purple-500">CSS</p>
        </li>
        <li className="text-center">
          <FontAwesomeIcon icon={faJs} size="3x" className="text-purple-500 mb-2" />
          <p className="text-purple-500">JavaScript</p>
        </li>
        <li className="text-center">
          <FontAwesomeIcon icon={faReact} size="3x" className="text-purple-500 mb-2" />
          <p className="text-purple-500">React</p>
        </li>
        <li className="text-center">
          <FontAwesomeIcon icon={faJava} size="3x" className="text-purple-500 mb-2" />
          <p className="text-purple-500">Java</p>
        </li>
        <li className="text-center">
          <FontAwesomeIcon icon={faPython} size="3x" className="text-purple-500 mb-2" />
          <p className="text-purple-500">Python</p>
        </li>
        <li className="text-center">
          <FontAwesomeIcon icon={faAws} size="3x" className="text-purple-500 mb-2" />
          <p className="text-purple-500">AWS</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;

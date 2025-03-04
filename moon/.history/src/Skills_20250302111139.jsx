import React from 'react';

const Skills = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6 animate__animated animate__fadeIn">Skills</h2>
      
      <ul className="space-y-4">
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-1s">Java</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-2s">Python</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-3s">JavaScript</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-4s">React</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-5s">Spring Boot</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-6s">Docker</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-7s">AWS</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-8s">MySQL</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-9s">MongoDB</li>
        <li className="text-xl text-purple-500 hover:text-purple-700 animate__animated animate__fadeIn animate__delay-10s">REST API</li>
      </ul>
    </div>
  );
}

export default Skills;

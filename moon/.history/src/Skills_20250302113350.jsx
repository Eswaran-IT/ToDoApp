import React from 'react';

const Skills = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-purple-600 mb-8">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Docker */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/docker-icon.png" 
            alt="Docker" 
            className="w-24 h-24 mb-2 mx-auto"
          />
          <p className="text-purple-600">Docker</p>
        </li>
        {/* Git */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/git-icon.png" 
            alt="Git" 
            className="w-24 h-24 mb-2 mx-auto"
          />
          <p className="text-purple-600">Git</p>
        </li>
        {/* Java */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/java-icon.png" 
            alt="Java" 
            className="w-24 h-24 mb-2 mx-auto"
          />
          <p className="text-purple-600">Java</p>
        </li>
        {/* MySQL */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/mysql-icon.png" 
            alt="MySQL" 
            className="w-24 h-24 mb-2 mx-auto"
          />
          <p className="text-purple-600">MySQL</p>
        </li>
        {/* Spring */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/spring-icon.png" 
            alt="Spring" 
            className="w-24 h-24 mb-2 mx-auto"
          />
          <p className="text-purple-600">Spring</p>
        </li>
        {/* Postman */}
        <li className="text-center hover:scale-110 transition duration-300 transform">
          <img 
            src="/assets/skills/postman-icon.png" 
            alt="Postman" 
            className="w-24 h-24 mb-2 mx-auto"
          />
          <p className="text-purple-600">Postman</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;

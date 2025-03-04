import React from 'react';
import { FaJava, FaPython, FaReact, FaDatabase, FaCloud } from 'react-icons/fa'; // Importing icons

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-purple-600">My Skills</h2>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Programming Languages */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <FaJava className="text-6xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Java</h3>
            <p className="text-gray-500">Expert</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <FaPython className="text-6xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Python</h3>
            <p className="text-gray-500">Intermediate</p>
          </div>

          {/* Frameworks */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <FaReact className="text-6xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">React</h3>
            <p className="text-gray-500">Advanced</p>
          </div>

          {/* Databases */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <FaDatabase className="text-6xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">MySQL</h3>
            <p className="text-gray-500">Intermediate</p>
          </div>

          {/* Cloud Platforms */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <FaCloud className="text-6xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">AWS</h3>
            <p className="text-gray-500">Intermediate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

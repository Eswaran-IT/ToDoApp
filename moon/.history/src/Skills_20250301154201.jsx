import React from 'react';
import Lottie from 'react-lottie';
import * as javaAnimation from './lottie/java.json'; // Example Lottie JSON file for Java
import * as pythonAnimation from './lottie/python.json'; // Example Lottie JSON file for Python
import * as reactAnimation from './lottie/react.json'; // Example Lottie JSON file for React

const Skills = () => {
  const defaultOptions = {
    loop: true,  // Set to false if you don't want the animation to loop
    autoplay: true, // Start animation immediately
    animationData: null, // Will be dynamically set
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-purple-600">My Skills</h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Java */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <Lottie options={{ ...defaultOptions, animationData: javaAnimation }} height={100} width={100} />
            <h3 className="text-xl font-semibold text-gray-700">Java</h3>
            <p className="text-gray-500">Expert</p>
          </div>

          {/* Python */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <Lottie options={{ ...defaultOptions, animationData: pythonAnimation }} height={100} width={100} />
            <h3 className="text-xl font-semibold text-gray-700">Python</h3>
            <p className="text-gray-500">Intermediate</p>
          </div>

          {/* React */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <Lottie options={{ ...defaultOptions, animationData: reactAnimation }} height={100} width={100} />
            <h3 className="text-xl font-semibold text-gray-700">React</h3>
            <p className="text-gray-500">Advanced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
npm install react-lottie

import React from 'react';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 flex items-center justify-center">
      <div className="w-full max-w-6xl p-6">
        <h2 className="text-5xl font-semibold text-center text-white mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 justify-center">
          {/* AWS */}
          <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
                alt="AWS" 
                width="60" 
                height="60" 
                className="transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
          {/* Bootstrap */}
          <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" 
                alt="Bootstrap" 
                width="60" 
                height="60" 
                className="transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
          {/* C */}
          <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" 
                alt="C" 
                width="60" 
                height="60" 
                className="transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
          {/* Add more icons as in your original code */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

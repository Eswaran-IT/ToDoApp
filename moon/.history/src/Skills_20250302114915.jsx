import React from 'react';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-6xl p-6">
        <h2 className="text-5xl font-semibold text-center text-purple-600 mb-10">My Skills</h2>

        {/* Frontend Section */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-center text-indigo-500 mb-6">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 justify-center">
            {/* HTML */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" 
                  alt="HTML5" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
            {/* CSS */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" 
                  alt="CSS" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
            {/* JavaScript */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
                  alt="JavaScript" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
            {/* React */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
                  alt="React" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-center text-indigo-500 mb-6">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 justify-center">
            {/* Java */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://www.java.com" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" 
                  alt="Java" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
            {/* Spring */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://spring.io/" target="_blank" rel="noreferrer">
                <img 
                  src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" 
                  alt="Spring" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
            {/* NodeJS */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
                  alt="NodeJS" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
            {/* Docker */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" 
                  alt="Docker" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Database Section */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-center text-indigo-500 mb-6">Database</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 justify-center">
            {/* MongoDB */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" 
                  alt="MongoDB" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
            {/* MySQL */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" 
                  alt="MySQL" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Cloud Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center text-indigo-500 mb-6">Cloud</h3>
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
            {/* Firebase */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                <img 
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" 
                  alt="Firebase" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
            {/* Docker */}
            <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                <img 
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" 
                  alt="Docker" 
                  width="60" 
                  height="60" 
                  className="transition duration-300 transform hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

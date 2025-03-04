import React from 'react';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
      <div className="w-full max-w-6xl p-6">
        <h2 className="text-5xl font-semibold text-center text-white mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 justify-center">
          {/* AWS */}
          <div className="flex justify-center items-center p-6 bg-yellow-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          <div className="flex justify-center items-center p-6 bg-indigo-600 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          <div className="flex justify-center items-center p-6 bg-red-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          {/* C++ */}
          <div className="flex justify-center items-center p-6 bg-green-600 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" 
                alt="C++" 
                width="60" 
                height="60" 
                className="transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
          {/* CSS */}
          <div className="flex justify-center items-center p-6 bg-pink-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          {/* Docker */}
          <div className="flex justify-center items-center p-6 bg-gray-800 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          {/* Figma */}
          <div className="flex justify-center items-center p-6 bg-purple-600 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img 
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" 
                alt="Figma" 
                width="60" 
                height="60" 
                className="transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
          {/* Flutter */}
          <div className="flex justify-center items-center p-6 bg-teal-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <a href="https://flutter.dev" target="_blank" rel="noreferrer">
              <img 
                src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" 
                alt="Flutter" 
                width="60" 
                height="60" 
                className="transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
          {/* Git */}
          <div className="flex justify-center items-center p-6 bg-orange-600 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img 
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" 
                alt="Git" 
                width="60" 
                height="60" 
                className="transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
          {/* HTML */}
          <div className="flex justify-center items-center p-6 bg-blue-700 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          {/* Java */}
          <div className="flex justify-center items-center p-6 bg-brown-600 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          {/* JavaScript */}
          <div className="flex justify-center items-center p-6 bg-yellow-600 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          {/* Jenkins */}
          <div className="flex justify-center items-center p-6 bg-blue-900 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <a href="https://www.jenkins.io" target="_blank" rel="noreferrer">
              <img 
                src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" 
                alt="Jenkins" 
                width="60" 
                height="60" 
                className="transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
          {/* MongoDB */}
          <div className="flex justify-center items-center p-6 bg-green-700 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
          <div className="flex justify-center items-center p-6 bg-blue-800 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
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
    </div>
  );
}

export default Skills;

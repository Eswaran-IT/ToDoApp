import React from 'react';

const skills = [
  {
    name: 'AWS',
    link: 'https://aws.amazon.com/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  },
  {
    name: 'Bootstrap',
    link: 'https://getbootstrap.com',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
  },
  {
    name: 'C',
    link: 'https://www.cprogramming.com/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg'
  },
  {
    name: 'C++',
    link: 'https://www.w3schools.com/cpp/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'
  },
  {
    name: 'CSS',
    link: 'https://www.w3schools.com/css/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
  },
  {
    name: 'Docker',
    link: 'https://www.docker.com/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg'
  },
  {
    name: 'Figma',
    link: 'https://www.figma.com/',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
  },
  {
    name: 'Flutter',
    link: 'https://flutter.dev',
    icon: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg'
  },
  {
    name: 'Git',
    link: 'https://git-scm.com/',
    icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
  },
  {
    name: 'HTML5',
    link: 'https://www.w3.org/html/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
  },
  {
    name: 'Java',
    link: 'https://www.java.com',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
  },
  {
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Jenkins',
    link: 'https://www.jenkins.io',
    icon: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg'
  },
  {
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
  },
  {
    name: 'MySQL',
    link: 'https://www.mysql.com/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center py-12">
      <div className="w-full max-w-6xl px-6">
        <h2 className="text-5xl font-semibold text-center text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-center">
          {skills.map(skill => (
            <div key={skill.name} className="flex justify-center items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <a href={skill.link} target="_blank" rel="noreferrer" className="flex justify-center items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width="50"
                  height="50"
                  className="transition duration-300 ease-in-out transform hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

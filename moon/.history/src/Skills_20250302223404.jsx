import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'CSS3', link: 'https://www.w3schools.com/css/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg' },
  { name: 'Dart', link: 'https://dart.dev/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg' },
  { name: 'Figma', link: 'https://www.figma.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/figma-icon.svg' },
  { name: 'Flutter', link: 'https://flutter.dev/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg' },
  { name: 'HTML5', link: 'https://en.wikipedia.org/wiki/HTML5', imgSrc: 'https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg' },
  { name: 'JavaScript', link: 'https://www.javascript.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/javascript-original.svg' },
  { name: 'Java', link: 'https://www.java.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg' },
  { name: 'React', link: 'https://reactjs.org/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg' },
  { name: 'Tailwind CSS', link: 'https://www.tailwindcss.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/tailwindcss.svg' },
  { name: 'MongoDB', link: 'https://www.mongodb.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg' },
  { name: 'MySQL', link: 'https://www.mysql.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg' },
  { name: 'Python', link: 'https://www.python.org/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/python-original.svg' },
  { name: 'Redux', link: 'https://redux.js.org/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/redux-original.svg' },
  { name: 'AWS', link: 'https://aws.amazon.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', link: 'https://www.docker.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg' },
  { name: 'Jenkins', link: 'https://www.jenkins.io/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/jenkins-icon.svg' },
];

const Skills = () => (
  <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-10 py-12">
    <motion.h2 
      className="text-4xl font-bold text-purple-700 mb-8 text-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      My Skill Set
    </motion.h2>

    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 w-full max-w-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
    >
      {skills.sort((a, b) => a.name.localeCompare(b.name)).map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center items-center bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-transform"
        >
          <a href={skill.link} target="_blank" rel="noopener noreferrer">
            <img src={skill.imgSrc} alt={skill.name} className="w-24 h-24" />
          </a>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Skills;

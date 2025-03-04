import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "CSS3", imgSrc: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
  { name: "Dart", imgSrc: "https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg" },
  { name: "Figma", imgSrc: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg" },
  { name: "Flutter", imgSrc: "https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg" },
  { name: "HTML5", imgSrc: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
  { name: "JavaScript", imgSrc: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
  { name: "Java", imgSrc: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" },
  { name: "React", imgSrc: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
  { name: "Tailwind", imgSrc: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" },
  { name: "MongoDB", imgSrc: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
  { name: "MySQL", imgSrc: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" },
  { name: "Python", imgSrc: "https://profilinator.rishav.dev/skills-assets/python-original.svg" },
  { name: "Redux", imgSrc: "https://profilinator.rishav.dev/skills-assets/redux-original.svg" },
  { name: "AWS", imgSrc: "https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", imgSrc: "https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" },
  { name: "Jenkins", imgSrc: "https://profilinator.rishav.dev/skills-assets/jenkins-icon.svg" },
  { name: "Node.js", imgSrc: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" },
  { name: "Express.js", imgSrc: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" },
  { name: "Git", imgSrc: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
  { name: "Firebase", imgSrc: "https://profilinator.rishav.dev/skills-assets/firebase.png" },
  { name: "GraphQL", imgSrc: "https://profilinator.rishav.dev/skills-assets/graphql.png" },
  { name: "TypeScript", imgSrc: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg" },
  { name: "Bootstrap", imgSrc: "https://profilinator.rishav.dev/skills-assets/bootstrap-plain-wordmark.svg" },
  { name: "Next.js", imgSrc: "https://profilinator.rishav.dev/skills-assets/nextjs-original.svg" },
  { name: "Kubernetes", imgSrc: "https://profilinator.rishav.dev/skills-assets/kubernetes-icon.svg" },
  { name: "Linux", imgSrc: "https://profilinator.rishav.dev/skills-assets/linux-original.svg" },
  { name: "C++", imgSrc: "https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" },
  { name: "PostgreSQL", imgSrc: "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" },
];

const Skills = () => (
  <div className="w-full min-h-screen bg-white px-4 sm:px-10 flex flex-col items-center">
    <motion.h2 
      className="text-4xl font-bold text-purple-700 mb-6 text-center w-full"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      My Skill Set
    </motion.h2>

    <motion.div 
      className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 gap-6 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <img src={skill.imgSrc} alt={skill.name} className="w-20 h-20 sm:w-24 sm:h-24" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Skills;

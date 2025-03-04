import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML5", link: "https://en.wikipedia.org/wiki/HTML5", imgSrc: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
  { name: "CSS3", link: "https://www.w3schools.com/css/", imgSrc: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
  { name: "JavaScript", link: "https://www.javascript.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
  { name: "React", link: "https://reactjs.org/", imgSrc: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
  { name: "Redux", link: "https://redux.js.org/", imgSrc: "https://profilinator.rishav.dev/skills-assets/redux-original.svg" },
  { name: "Tailwind CSS", link: "https://www.tailwindcss.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" },
  { name: "Figma", link: "https://www.figma.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg" },
  { name: "Dart", link: "https://dart.dev/", imgSrc: "https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg" },
  { name: "Flutter", link: "https://flutter.dev/", imgSrc: "https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg" },
  { name: "Java", link: "https://www.java.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" },
  { name: "Spring", link: "https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html", imgSrc: "https://profilinator.rishav.dev/skills-assets/springio-icon.svg" },
  { name: "Python", link: "https://www.python.org/", imgSrc: "https://profilinator.rishav.dev/skills-assets/python-original.svg" },
  { name: "PHP", link: "https://www.php.net/", imgSrc: "https://profilinator.rishav.dev/skills-assets/php-original.svg" },
  { name: "MongoDB", link: "https://www.mongodb.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
  { name: "MySQL", link: "https://www.mysql.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" },
  { name: "Git", link: "https://github.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
  { name: "Linux", link: "https://www.linux.org/", imgSrc: "https://profilinator.rishav.dev/skills-assets/linux-original.svg" },
  { name: "AWS", link: "https://aws.amazon.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", link: "https://www.docker.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" },
  { name: "Jenkins", link: "https://www.jenkins.io/", imgSrc: "https://profilinator.rishav.dev/skills-assets/jenkins-icon.svg" }
];

const Skills = () => (
  <div className="w-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
    <h2 className="text-5xl font-bold text-purple-700 mb-6 text-center">My Skill Set</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-full max-w-7xl">
      {skills.map((skill) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

        return (
          <motion.div
            key={skill.name}
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
            >
              <img src={skill.imgSrc} alt={skill.name} className="h-20 w-20" />
            </a>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default Skills;

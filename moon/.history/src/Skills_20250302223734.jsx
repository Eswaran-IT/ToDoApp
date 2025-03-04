import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "CSS3", link: "https://www.w3schools.com/css/", imgSrc: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
  { name: "Dart", link: "https://dart.dev/", imgSrc: "https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg" },
  { name: "Figma", link: "https://www.figma.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg" },
  { name: "Flutter", link: "https://flutter.dev/", imgSrc: "https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg" },
  { name: "HTML5", link: "https://en.wikipedia.org/wiki/HTML5", imgSrc: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
  { name: "JavaScript", link: "https://www.javascript.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
  { name: "Java", link: "https://www.java.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" },
  { name: "Power BI", link: "https://powerbi.microsoft.com/en-us/", imgSrc: "https://profilinator.rishav.dev/skills-assets/powerbi.png" },
  { name: "React", link: "https://reactjs.org/", imgSrc: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
  { name: "Tailwind CSS", link: "https://www.tailwindcss.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" },
  { name: "C", link: "https://www.cprogramming.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/c-original.svg" },
  { name: "C++", link: "https://www.cplusplus.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" },
  { name: "C#", link: "https://docs.microsoft.com/en-us/dotnet/csharp/", imgSrc: "https://profilinator.rishav.dev/skills-assets/csharp-original.svg" },
  { name: "Git", link: "https://github.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
  { name: "Linux", link: "https://www.linux.org/", imgSrc: "https://profilinator.rishav.dev/skills-assets/linux-original.svg" },
  { name: "MongoDB", link: "https://www.mongodb.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
  { name: "MySQL", link: "https://www.mysql.com/", imgSrc: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" },
];

const Skills = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center py-12 px-6">
    <h2 className="text-5xl font-bold text-purple-700 mb-10 text-center">My Skill Set</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 p-6 w-full max-w-7xl">
      {skills.sort((a, b) => a.name.localeCompare(b.name)).map((skill) => {
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

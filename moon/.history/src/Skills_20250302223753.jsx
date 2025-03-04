import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Skills = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 shadow-lg rounded-lg mx-4">
    <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">My Skill Set</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 p-4">
      {skills.sort((a, b) => a.name.localeCompare(b.name)).map((skill, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true, // Trigger animation only once
          threshold: 0.3, // When 30% of the element is in view
        });

        return (
          <motion.div
            key={skill.name}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
            >
              <img src={skill.imgSrc} alt={skill.name} className="h-16 w-16" />
            </a>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default Skills;

import React from 'react';

const skills = {
  frontend: [
    { name: 'JavaScript', rating: 4 },
    { name: 'HTML', rating: 5 },
    { name: 'CSS', rating: 4 },
    { name: 'React', rating: 4 },
  ],
  backend: [
    { name: 'Java', rating: 4 },
    { name: 'Spring Boot', rating: 5 },
    { name: 'Python', rating: 3 },
  ],
  database: [
    { name: 'MySQL', rating: 4 },
    { name: 'MongoDB', rating: 3 },
  ],
  tools: [
    { name: 'GitHub', rating: 5 },
    { name: 'AWS', rating: 4 },
    { name: 'Docker', rating: 4 },
    { name: 'Jenkins', rating: 3 },
  ],
};

const Skills = () => (
  <section className="h-screen py-16 px-6 bg-gray-100 overflow-y-scroll">
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-4xl font-semibold text-purple-600 mb-6">Skills</h2>
      {['frontend', 'backend', 'database', 'tools'].map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills[category].map((skill, index) => (
              <div key={index} className="p-6 bg-blue-500 text-white text-center rounded-lg">
                <h3 className="text-2xl mb-4">{skill.name}</h3>
                <div className="flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-xl ${i < skill.rating ? 'text-yellow-400' : 'text-gray-400'}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

import React from 'react';

const skills = [
  { name: 'Java', color: 'bg-blue-500' },
  { name: 'Python', color: 'bg-yellow-400' },
  { name: 'JavaScript', color: 'bg-green-500' },
  { name: 'HTML', color: 'bg-red-500' },
  { name: 'CSS', color: 'bg-indigo-500' },
  { name: 'Spring Boot', color: 'bg-gray-800' },
  { name: 'AWS', color: 'bg-orange-500' },
  { name: 'MySQL', color: 'bg-blue-700' },
  { name: 'MongoDB', color: 'bg-green-700' },
  { name: 'GitHub', color: 'bg-black' }
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Skills</h2>
        <p className="text-xl text-gray-600 mb-12">Here are the skills I have acquired and continue to improve.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}
            >
              <h3 className="text-2xl font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

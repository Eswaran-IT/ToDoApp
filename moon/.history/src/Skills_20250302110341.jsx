import React from 'react';

const skills = {
  frontend: [
    { name: 'JavaScript', color: 'bg-blue-500' },
    { name: 'HTML', color: 'bg-red-500' },
    { name: 'CSS', color: 'bg-indigo-500' },
    { name: 'React', color: 'bg-cyan-500' },
  ],
  backend: [
    { name: 'Java', color: 'bg-orange-500' },
    { name: 'Spring Boot', color: 'bg-gray-800' },
    { name: 'Python', color: 'bg-yellow-400' },
  ],
  database: [
    { name: 'MySQL', color: 'bg-blue-700' },
    { name: 'MongoDB', color: 'bg-green-700' },
  ],
  tools: [
    { name: 'GitHub', color: 'bg-black' },
    { name: 'AWS', color: 'bg-orange-600' },
    { name: 'Docker', color: 'bg-teal-600' },
    { name: 'Jenkins', color: 'bg-gray-600' },
  ],
};

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-purple-600 mb-6">Skills</h2>
        <p className="text-xl text-gray-600 mb-12">Here are the skills I have acquired and continue to improve.</p>

        {/* Frontend */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">Frontend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.frontend.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}
              >
                <h3 className="text-2xl font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">Backend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.backend.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}
              >
                <h3 className="text-2xl font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">Database</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.database.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}
              >
                <h3 className="text-2xl font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.tools.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}
              >
                <h3 className="text-2xl font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

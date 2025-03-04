import React from 'react';

// Skills data with ratings (1-5)
const skills = {
  frontend: [
    { name: 'JavaScript', rating: 4, color: 'bg-blue-500' },
    { name: 'HTML', rating: 5, color: 'bg-red-500' },
    { name: 'CSS', rating: 4, color: 'bg-indigo-500' },
    { name: 'React', rating: 4, color: 'bg-cyan-500' },
  ],
  backend: [
    { name: 'Java', rating: 4, color: 'bg-orange-500' },
    { name: 'Spring Boot', rating: 5, color: 'bg-gray-800' },
    { name: 'Python', rating: 3, color: 'bg-yellow-400' },
  ],
  database: [
    { name: 'MySQL', rating: 4, color: 'bg-blue-700' },
    { name: 'MongoDB', rating: 3, color: 'bg-green-700' },
  ],
  tools: [
    { name: 'GitHub', rating: 5, color: 'bg-black' },
    { name: 'AWS', rating: 4, color: 'bg-orange-600' },
    { name: 'Docker', rating: 4, color: 'bg-teal-600' },
    { name: 'Jenkins', rating: 3, color: 'bg-gray-600' },
  ],
};

const Skills = () => {
  return (
    <section className="h-screen py-16 px-6 bg-gray-100 overflow-y-scroll">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-purple-600 mb-6">Skills</h2>
        <p className="text-xl text-gray-600 mb-12">Here are the skills I have acquired and continue to improve.</p>

        {/* Frontend */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">Frontend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.frontend.map((skill, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <div className="flex justify-center items-center">
                  {/* Rating as Stars */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${i < skill.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">Backend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.backend.map((skill, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <div className="flex justify-center items-center">
                  {/* Rating as Stars */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${i < skill.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">Database</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.database.map((skill, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <div className="flex justify-center items-center">
                  {/* Rating as Stars */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${i < skill.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-3xl font-semibold text-purple-600 mb-4">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.tools.map((skill, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${skill.color} text-white text-center`}>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <div className="flex justify-center items-center">
                  {/* Rating as Stars */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${i < skill.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

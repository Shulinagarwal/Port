import React, { useState } from 'react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skills = [
    {
      category: 'Frontend Development',
      list: [
        { name: 'HTML', proficiency: 90 },
        { name: 'CSS', proficiency: 85 },
        { name: 'JavaScript', proficiency: 80 },
        { name: 'React.js', proficiency: 85 },
      ],
    },
    {
      category: 'Backend Development',
      list: [
        { name: 'Node.js', proficiency: 85 },
        { name: 'Express.js', proficiency: 80 },
      ],
    },
    {
      category: 'Database Management',
      list: [
        { name: 'MySQL', proficiency: 80 },
        { name: 'MongoDB', proficiency: 75 },
      ],
    },
    {
      category: 'Other Skills',
      list: [
        { name: 'Git', proficiency: 90 },
        { name: 'RESTful APIs', proficiency: 85 },
        { name: 'Responsive Design', proficiency: 80 },
        {name: 'Java',proficiency:90},
        { name:'C',proficiency:75},
      ],
    },
  ];

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <>
    <section id="skills" className="py-12 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-300">Skills</h2>
          <p className="mt-4 text-lg text-gray-300 dark:text-gray-300">
            Here are some of the technologies and tools I'm proficient in.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <div key={index} className="  shadow-lg p-6 bg-brown-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-300 dark:text-white">{skillCategory.category}</h3>
              <ul className="mt-4 space-y-2">
                {skillCategory.list.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center"
                    onMouseEnter={() => handleMouseEnter(skillCategory.category)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className="text-gray-300 dark:text-white">{skill.name}</span>
                    <div className={`flex items-center ${hoveredCategory === skillCategory.category ? 'visible' : 'invisible'}`}>
                      <div className="w-32 bg-gray-300 rounded">
                        <div
                          className="h-2 bg-yellow-300 rounded"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-gray-300 dark:text-gray-300">{skill.proficiency}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    <hr className='h-1 w-full bg-yellow-300 '/>
</>
  );
};

export default Skills;

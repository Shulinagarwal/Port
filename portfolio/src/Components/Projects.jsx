import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Chat App",
      description: 'This chat application allows users to communicate in real-time through text messages. It features a user-friendly interface, instant messaging, and robust backend support to handle multiple users simultaneously. The application supports private chats ensuring a seamless communication experience.',
      features: [
        'Real-time messaging',
        'User-friendly interface',
        'Private chats',
        'Scalable backend support'
      ],
      technologies: ['React', 'Tailwind CSS', 'Socket.io', 'MongoDB', 'Node.js'],
      codelink: 'https://github.com/Shulinagarwal/chat'
    },
    {
      title: "NewsPanda",
      description: 'The News Application provides users with the latest news articles from various sources. It features a clean and intuitive interface, allowing users to browse news by categories, search for specific topics, and view detailed articles. The application is designed to deliver a seamless reading experience on both desktop and mobile devices.',
      features: [
        'Latest news articles',
        'Browse by categories',
        'Search functionality',
        'Responsive design'
      ],
      technologies: ['React', 'BootStrap', 'Node.js', 'NewsAPI.org'],
      codelink: 'https://github.com/Shulinagarwal/NewsPanda'
    },
    {
        title:'WeatherApp',
        description:'The Weather Application provides users with real-time weather information for their location and any city worldwide. It offers a visually appealing interface with intuitive controls for checking current weather conditions, hourly forecasts, and extended weather forecasts for up to 4 days. ',
        features: [
            'Current Weather','Daily Forecast','Responsive Design'
        ],
        technologies: ['React','CSS','WeatherAPI'],
        codelink: 'https://github.com/Shulinagarwal/Weatherapp'
    }
  ];

  return (
    <div className=''>
      <section id="projects" className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-300 dark:text-white">Projects</h2>
            <p className="mt-4 text-lg text-gray-400 dark:text-gray-300">
              Here are some of the projects I have worked on recently.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="shadow-lg p-6 bg-brown-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-800">
                <h3 className="text-xl font-bold text-gray-300 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300 dark:text-gray-300">{project.description}</p>
                {project.features && (
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-gray-300 dark:text-white">Key Features:</span>
                    <ul className="list-disc list-inside text-gray-300 dark:text-gray-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4">
                  <span className="text-sm font-semibold text-gray-300 dark:text-white">Technologies:</span>
                  <ul className="list-disc list-inside text-gray-400 dark:text-gray-300">
                    {project.technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.codelink}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-300 dark:text-white">About Me</h2>
          <p className="mt-4 text-lg text-gray-300 dark:text-gray-300">
            I'm a passionate developer with experience in building web applications. I love creating websites. 
            I like Competituve Programming.
            <br />
             I am currently learning Advanced DSA in Java Language.
            <br />
            I use Java as my primary Language and also have a intermediate knowlegde of DSA.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-300 dark:text-white">Background</h3>
            <p className="mt-4 text-gray-300 dark:text-gray-300">
              I have a background in computer science . My journey in tech started with learning the basics of HTML, CSS, and JavaScript, and it has since grown to include various modern frameworks and libraries.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 items-center">
                 <h3 className="text-2xl font-bold text-gray-300 dark:text-white">Skills</h3>
                 <p className="mt-4 text-gray-300 dark:text-gray-300">
                Java,HTML,CSS,JavaScript,Node.js,MongoDB,React.js,C
            </p>
            <h3 className="text-2xl mt-3 font-bold text-gray-300 dark:text-white">Platforms</h3>
            <p className="mt-4 text-gray-300 dark:text-gray-300">
                Git,GitHub,Leetcode
            </p>
            </div>
           
        </div>
      </div>
    </section>
  )
}

export default About
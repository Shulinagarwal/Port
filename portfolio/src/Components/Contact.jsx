import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact" className="py-12 lg:py-20 bg-gray-800 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-300 dark:text-white">Contact Me</h2>
          <p className="mt-4 text-lg text-gray-300 dark:text-gray-300">
            Feel free to reach out to me using the following channels:
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:gap-8 lg:grid-cols-2">
          <div className="bg-gray-800 dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-300 dark:text-white">GitHub</h3>
            <a
              href="https://github.com/Shulinagarwal"
              className="mt-2 block text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Shulinagarwal
            </a>
          </div>
          <div className="bg-gray-800 dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-300 dark:text-white">LeetCode</h3>
            <a
              href="https://leetcode.com/trizalshulin"
              className="mt-2 block text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              leetcode.com/trizalshulin
            </a>
          </div>

          <div className="bg-gray-800 dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-300 dark:text-white">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/shulinagarwal/"
              className="mt-2 block text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/shulinagarwal
            </a>
          </div>

          <div className="bg-gray-800 dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-300 dark:text-white">Email</h3>
            <p className="mt-2 text-gray-300 dark:text-gray-300">shulinagarwal22@gmail.com</p>
          </div>
          <div className="bg-gray-800 dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-300 dark:text-white">Mobile Number</h3>
            <p className="mt-2 text-gray-300 dark:text-gray-300">+91 9528522540</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

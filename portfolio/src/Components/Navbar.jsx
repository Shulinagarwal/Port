import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full z-50 top-0 left-0'>
        <div className="h-full w-full bg-brown-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <nav className=" border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">Shulin's Portfolio</span>
          </a>
          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-lg text-white md:p-0  md:hover:text-yellow-300">Home</a>
              </li>
              <li>
                <a href="#skills" className="block py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Skills</a>
              </li>
              <li>
                <a href="#projects" className="block py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Projects</a>
              </li>

              

              <li>
                <a href="#about" className="block py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">About</a>
              </li>

              <li>
                <a href="#contact" className="block py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
    
  )
}

export default Navbar
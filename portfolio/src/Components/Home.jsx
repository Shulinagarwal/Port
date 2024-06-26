import React from 'react';
import logo from '../assets/c.png';

const Home = () => {
  return (
    <>
    
    <div className="min-h-screen flex">
      <section className="firstSection flex flex-col md:flex-row justify-center items-center py-8 px-4 mr-24">
        <div className="leftSection text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-6xl text-gray-300 font-bold">
            Hi, My name is   <span className="text-yellow-200">Shulin Agarwal    </span>
          </h1><br />

          <h3 className="text-4xl text-gray-300 font-bold"> I am a passionate Java Developer and a Web Designer</h3>
          <div className="mt-2 text-2xl text-white"></div>
          <div id="element" className="my-2"></div>
          {/* <div className="buttons mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button className="btn bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-900">Download Resume</button>
            <button className="btn bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-900">Github</button>
          </div> */}
        </div>
        
        <div className="rightSection flex justify-center items-center ml-12 mb-10" >
          <img src={logo} alt="Profile" className=" w-80 h-full object-cover rounded-lg shadow-lg" style={{width:'500px'}} />
        </div>
      </section>

    </div>
    <hr className='h-1 w-full bg-yellow-300 '/>
</>
  );
}

export default Home;

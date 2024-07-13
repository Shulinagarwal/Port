import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div className=''>
      
       <div className=''>
       <Navbar/>
       </div>
      <Home/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
    
    </div>
  )
}

export default App

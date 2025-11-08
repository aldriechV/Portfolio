import React, { use, useState } from 'react'
import './index.css'
// Component Imports
import Navbar from './components/Navbar/Navbar'
import Card from './components/ProjectCards/Card'
import { projects } from './components/ProjectCards/Projects'
import Contact from './components/ContactMe/Contact'
import Landing from './components/Landing/Landing'

const App = () => {
  return (
    // Components for NavBar, Projects, and Contacts are over here 
    <div className={`container`}>
      <Navbar/>
      <div className='home' id='home'>
         <Landing/>
      </div>
      <h1 className='projects' align='center' id='projects'>Projects</h1>
      <div className='projects-grid'>
        {projects.map((projects, index) => {
            return <Card key={index} experience={projects}/>;
        })}
      </div>
      <h1 className='contact' align='center' id='contact'>Contact Me</h1>
      <Contact/>

    </div>
  )
}

export default App
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Exprience from './components/Experience'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Aos, { AOS } from "aos";
import "aos/dist/aos.css"
import { FaFirstAid } from 'react-icons/fa'


const App = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Home/>
      <Exprience/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>

    </>
  )
}

export default App

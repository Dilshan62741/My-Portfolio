import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/project'
import Contact from './sections/contact'

function App() {
 

  return (
    <>
   
    <Header />
    <Home />
    <About  />
    <Skills />
    <Projects />
    <Contact />
    <Footer />  
      
     
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Skills from './components/Skills'
import Project from './components/Project'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-red-600 bg-yellow-300'>
      <Navbar />
      <Hero />
      <Aboutus />
      <Skills />
      <Project />
      <Experience/>
      <Contactus />
      <Footer/>

  </div>
      
  )
}

export default App

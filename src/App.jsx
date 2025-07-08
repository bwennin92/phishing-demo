import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import PhishingDemo from './PhishingDemo';
=======
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
>>>>>>> 5016cfbfc551dbe39c4cddadf78e660f397b7c46

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD

      <><h1>Can you detect the Phish?</h1><PhishingDemo /></>
=======
    <div className="portfolio-container">
      <header>
        <h1>Brandon's Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
>>>>>>> 5016cfbfc551dbe39c4cddadf78e660f397b7c46
  )
}

export default App

import './App.css';
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      home: homeRef,
      about: aboutRef,
      projects: projectRef,
      contact: contactRef,
    };
    sections[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">    
      <Navbar scrollToSection={scrollToSection} />

      <div style={{ marginTop: '100px' }}></div>

      <div ref={homeRef}> <Home scrollToSection={scrollToSection}/>
        
      </div>

      <div style={{ marginTop: '100px' }} ref={aboutRef}> <About /></div>
      <div ref={projectRef}> <Project /></div>
      <div ref={contactRef}><Contact /> </div>
    </div>
  );
}

  


export default App;


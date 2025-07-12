import React, { useState } from 'react'; 
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Define state

  const handleToggle = () => {
    setMenuOpen(!menuOpen); // ✅ Toggle menu
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false); // ✅ Close menu after click
  };

  return (
    <div className='Navbar'>
      <div className='leftside'>
        <h2>Portfolio</h2>
      </div>

     
      <div className='hamburger' onClick={handleToggle}>
        <GiHamburgerMenu />
      </div>

      <div className={`rightside ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => handleNavClick('home')}>Home</button>
        <button onClick={() => handleNavClick('about')}>About Me</button>
        <button onClick={() => handleNavClick('projects')}>Projects</button>
        <button onClick={() => handleNavClick('contact')}>Contact</button>
      </div>
    </div>
  );
}

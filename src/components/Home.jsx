import React from 'react'
import './home.css'


export default function Home({scrollToSection}) {
  return (
    <div className='home-content'>
      <div className="content">
          <h1>Hi! I am Tanisha </h1>
          <h2> Welcome to my Portfolio</h2> 
          <p> I'm a frontend developer with strong skills in HTML, CSS, JavaScript, and React.
       </p>
        <button onClick={() => scrollToSection('about')}>Explore</button>


          
        </div>
        <div className='content-right'>
            <img src = "images/me.jpg"  alt= 'profile'/> 
        </div>
    </div>
  )
}

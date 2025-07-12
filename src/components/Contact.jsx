import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <h2>Lets build something amazing together!</h2>  
        <div className='contact-right'>
            <h1>Contact Me</h1>
             <form  action ='https://formspree.io/f/xanjrzgp' id='contact-form' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter your name' name='name' required />
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter your email' name='email' required />
                <label htmlFor='message'>Message</label>
                <textarea rows={4} placeholder='Enter your message' name='message' required></textarea>
                <button className='button' type='submit'>Send message</button>
                </form>

            
            </div>    
    </div>
  )
}

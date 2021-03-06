import React from 'react'
import './contact.scss'


const Contact = () => {
  const path = typeof window !== 'undefined'  ? window.location.pathname : ''

  return (
    <div id = 'contact' className = 'contact-container'>
      { path === '/' ?
        <h1>Thanks for visiting</h1>
        : <h1>Contact me</h1>
      }
      <div className = 'contact-links-container'>
        <div className = 'contact-link'>
          <a href = 'mailto:hello@angiespears.com' target = '_blank' rel='noreferrer'>Email</a>
        </div>
        <div className = 'contact-link'>
          <a href = 'https://www.linkedin.com/in/angiespears/' target = '_blank' rel='noreferrer'>LinkedIn</a>
        </div>
        <div className = 'contact-link'>
          <a href = 'https://github.com/amspears' target = '_blank' rel='noreferrer'>Github</a>
        </div>
        <div className = 'contact-link'>
          <a href = 'https://www.instagram.com/angiespears_/' target = '_blank' rel='noreferrer'>Instagram</a>
        </div>
        <div className = 'contact-link'>
          <a href = 'https://twitter.com/AngieSpears_' target = '_blank' rel='noreferrer'>Twitter</a>
        </div>
      </div>

    </div>
  )
}

export default Contact

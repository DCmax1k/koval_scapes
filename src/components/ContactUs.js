import React from 'react'
import Header from './widgets/Header'

export default function ContactUs() {
  return (
    <div className='ContactUs'>
        <Header />
        <div className='landingHeader'>
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <form name="contact" netlify>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Subject <input type="subject" name="subject" /></label>
          </p>
          <p>
            <label>Message <textarea type="message" name="message" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
  )
}

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

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Subject <input type="text" name="subject" /></label>
          </p>
          <p>
            <label>Message <textarea name="message"></textarea></label>
          </p>

          <div data-netlify-recaptcha="true"></div>

          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
  )
}

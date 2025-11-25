import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
          {/* Left logo */}
          <Link to='/'>
              <img src='./images/longLogo.png' alt='Koval Scapes Logo' className='headerLogo' />
          </Link>
          {/* Links */}
          <div className='headerLinks'>
              <Link to='/'>Home</Link>
              <Link to='/aboutus'>About Us</Link>
              <Link to='/services'>Services</Link>
              <Link to='/photos'>Photos</Link>
          </div>
          {/* Right contact us */}
          <div>
              <Link to='/aboutus' className='contactUsButton'>Contact Us</Link>
          </div>
          {/* Hamburger menu */}
          <div className='hamburgerMenu' onClick={() => setMenuOpen(true)}>
              <img src='./images/hamburger.png' alt='Menu' className='hamburger'/>
          </div>
      </header>

      {/* Side bar */}
        <div className={`sideBar ${menuOpen ? 'active' : ''}`}>
            <div className='closeButton' onClick={() => setMenuOpen(false)}>

                <img src='./images/close.png' alt='Close Menu' />
            </div>
            <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to='/aboutus' onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to='/services' onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to='/photos' onClick={() => setMenuOpen(false)}>Photos</Link>
        </div>
    </>
    
  )
}

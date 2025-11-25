import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
        setScrolled(window.scrollY > 50); // threshold
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
          {/* Left logo */}
          <Link to='/' style={{outline: "none"}}>
              <img src='./images/longLogo.png' alt='Koval Scapes Logo' className='headerLogo' />
          </Link>
          {/* Links */}
          <div className='headerLinks'>
              <Link to='/'>Home</Link>
              <HashLink to='/#aboutus'>About Us</HashLink>
              <HashLink to='/#services'>Services</HashLink>
              <HashLink to='/#photos'>Photos</HashLink>
          </div>
          {/* Right contact us */}
          <div>
              <Link to='/contactus' className='contactUsButton'>Contact Us</Link>
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
            <HashLink to='/#aboutus' onClick={() => setMenuOpen(false)}>About Us</HashLink>
            <HashLink to='/#services' onClick={() => setMenuOpen(false)}>Services</HashLink>
            <HashLink to='/#photos' onClick={() => setMenuOpen(false)}>Photos</HashLink>
            <Link to='/contactus' className='button'>Contact Us</Link>
            <div>
              
          </div>
        </div>
    </>
    
  )
}

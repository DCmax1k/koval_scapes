import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        {/* Left logo */}
        <Link to='/'>
            <img src='./images/longLogo.png' alt='Koval Scapes Logo' className='headerLogo' />
        </Link>
        {/* Links */}
        <div className='headerLinks'>
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/aboutus'>Services</Link>
            <Link to='/aboutus'>Photos</Link>
        </div>
        {/* Right contact us */}
        <div>
            <Link to='/aboutus' className='contactUsButton'>Contact Us</Link>
        </div>
        {/* Hamburger menu */}
    </header>
  )
}

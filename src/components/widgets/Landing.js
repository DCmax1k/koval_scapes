import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'

export default function Landing() {
  return (
    <div className='Landing'>
        <div className='landingHeader'>
            <h1>Welcome to Koval Scapes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
        </div>

        {/* Two buttons */}
        <div className='landingButtons'>
            <div>
                <Link to='/services' className='button'>Services</Link>
            </div>
            <div>
                <Link to='/contactus' className='button hollow'>Contact Us</Link>
            </div>
        </div>

        {/* Images */}
        <div className='landingImages'> 
            <Image />
            <Image />
            <Image />
            <Image />
        </div>

        <p className='estimate'>Schedule your free estimate today!</p>
        
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='topBlock'>
                <p className='call'>Call us Today! (123)-ANYTIME</p>
                <p className='twentyFour'>24/7 Emergency Services</p>
            </div>

            <nav className='nav'>
                <Link className='navLinks' to='/'>Home</Link>
                <Link className='navLinks' to='/about'>About</Link>
                <Link className='navLinks' to='/contact'>Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar
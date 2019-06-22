import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftNav'>
                <h3 className='navbarh3'>Start Bootstrap</h3>
            </div>
            <div className='rightNav'>
                <h4 className='navbarh4'>HOME</h4>
                <h4 className='navbarh4'>ABOUT</h4>
                <h4 className='navbarh4'>SAMPLE POST</h4>
                <h4 className='navbarh4'>CONTACT</h4>
            </div>
        </div>
    )
}

export default Navbar;
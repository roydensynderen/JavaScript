import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='overlay'></div>
            <div className='headerText'>
                <h1 className='headerh1'>Clean Blog</h1>
                <h5 className='headerh5'>A Blog Theme by Start Bootstrap</h5>
            </div>
        </header>
    )
}

export default Header;
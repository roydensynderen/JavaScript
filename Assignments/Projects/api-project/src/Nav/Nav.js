import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <div className='navbar'>
            <Link to="/">PLAYER</Link>
            <Link to="/matches">RECENT MATCHES</Link>
            <Link to="/heroes">HEROES</Link>
        </div>
    )
}

export default Nav
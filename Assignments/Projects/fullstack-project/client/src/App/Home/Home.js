import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <header className='home'>
            <div className='headerText'>
                <h5 className='firstLine'>Certified & Professional</h5>
                <h5 className='secondLine'>TECHNICIANS</h5>
                <p className='thirdLine'>We are a full-service contractor specializing in both residential and commercial services.</p>
                <button id='btn'><a href='../Contact/Contact.js'>CONTACT US NOW</a></button>
            </div>
        </header>
    )
}

export default Home

import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className='mainImage'>
                <h1 className='aboutUs'>ABOUT US</h1>
            </div>

            <div className='aboutText'>
                <h5 className='aboutLeft'>AFFORDABLE & QUALITY PLUMBING</h5>
                <p className='aboutRight'>We are your "go-to" affordable plumber that is available 24 hours dedicated to providing the
                    absolute highest quality service at the best prices. We don't over bid, we don't under bid
                    with the idea of tacking on hidden fees. We simply give honest prices with honest answers.
                </p>
            </div>
        </div>
    )
}

export default About

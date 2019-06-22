import React from 'react'
import './Hero.css'

const Hero = props => {
    return (
        <div className='heroStats'>
            <p className='heroP'>{ props.localized_name }</p>
            <p className='heroP2'>{ props.primary_attr }</p>
            <p className='heroP'>{ props.attack_type }</p>
            <p className='heroP4'>{ props.roles }</p>
        </div>
    )
}

export default Hero
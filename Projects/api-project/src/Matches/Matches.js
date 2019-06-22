import React from 'react'
import Match from './Match'
import './Matches.css'
import { connect } from 'react-redux'

const Matches = props => {
    return (
        <div>
            <div className='matchesHeader'>
                <h1 className='matchesHeading'>Recent 20 Matches</h1>
            </div>

            <div className='matchesInfo'>
            { props.matches.map(match => {
                return (<Match {...match} />)
            })}
            </div>
        </div>
    )
}

export default connect(state => state, {})(Matches)
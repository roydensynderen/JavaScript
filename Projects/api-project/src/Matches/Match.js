import React from 'react'
import './Match.css'

const Match = props => {
    return (
        <div className='matchTable'>
            <h1 className='matchOutcome'>{ props.player_slot < 128 ? "RADIANT" : "DIRE" } : { (props.player_slot < 128 && props.radiant_win === true) ? "WON MATCH" : "LOST MATCH" }</h1>
        </div>
    )
}

export default Match

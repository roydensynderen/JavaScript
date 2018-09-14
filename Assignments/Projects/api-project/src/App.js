import React from 'react'

import Nav from './Nav/Nav'
import Heroes from './Heroes/Heroes.js'
import Player from './Player/Player'
import Matches from './Matches/Matches.js'

import { Switch, Route } from "react-router-dom"

const App = props => {
    return (
        <div>
            <Nav />
            {/* <h1>pro: 137272985</h1>
            <h1>me: 100626377</h1> */}
            <Switch>
                <Route exact path="/" component={ Player } />
                <Route path="/matches" component={ Matches } />
                <Route path="/heroes" component={ Heroes } />
            </Switch>            
        </div>
    )
}

export default App
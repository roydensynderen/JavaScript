import React from 'react'
import Home from './Home/Home.js'
import About from './About/About.js'
import Navbar from './Navbar/Navbar.js'
import Contact from './Contact/Contact.js'
import Footer from './Footer/Footer.js'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/about' component={ About } />
                <Route path='/contact' component={ Contact } />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
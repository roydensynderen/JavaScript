import React from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';
import BlogList from './BlogList.js';
import Footer from './Footer.js';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Header />
                    <Navbar />
                <BlogList />
                <Footer />
            </div>
        )
    }
}

export default App;
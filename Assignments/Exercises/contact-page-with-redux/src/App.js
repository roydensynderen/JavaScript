import React from 'react'
import { connect } from 'react-redux'
import { addContact } from './redux/index.js'
import './App.css'
import ContactList from './ContactList'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addContact( this.state )
    }

    render() {
        console.log(this.props)
        return (
            <div id='wrapper'>
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        type='text' 
                        name='name'
                        placeholder='Full Name' 
                        onChange={ this.handleChange }
                        value={ this.state.name }
                        required />

                    <input 
                        type='number' 
                        name='phone'
                        placeholder='Phone Number' 
                        onChange={ this.handleChange }
                        value={ this.state.phone } />

                    <input 
                        type='email' 
                        name='email'
                        placeholder='E-mail Address' 
                        onChange={ this.handleChange }
                        value={ this.state.email }
                        required />
                    
                    <button>Submit</button>
                    <ContactList data={this.props.contacts}/>
                </form>
            </div>
        )
    }
}

export default connect(state => state, { addContact })(App);
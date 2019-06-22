import React from 'react'
import NamesDisplay from './NamesDisplay.js'

class OrderedList extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        const value = e.target.value;
        this.setState({input: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState(prevState => ({
            names: [ ...prevState.names, this.state.input ],
            input: ''
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type='text' placeholder='Enter Name' value={this.state.input} onChange={this.handleChange} name='input' />
                    <button>Submit</button>
                </form>
                <NamesDisplay input={this.state.input} names={this.state.names} />
            </div>
        )
    }
}

export default OrderedList
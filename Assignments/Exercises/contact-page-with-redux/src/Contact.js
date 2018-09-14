import React from 'react'
import { connect } from 'react-redux'
import { delContact } from './redux/index.js'
import './redux/index'

function Contact(props) {

    return (
        <div className='contact'>
            <h3>Name: {props.name} </h3>
            <h3>Phone: {props.phone} </h3>
            <h3>E-mail: {props.email} </h3>
            <button>Delete</button>
        </div>
    )
}

export default connect(state => state, { delContact })(Contact);
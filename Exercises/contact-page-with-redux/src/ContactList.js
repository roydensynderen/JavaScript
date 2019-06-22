import React from 'react'
import Contact from './Contact'

function ContactList(props) {
    const contactList = props.data.map((obj, index) => {
        return (
            <Contact key={index} {...obj}/>
            );
        });
    return (
        <div className='contactList'>
            {contactList}
        </div>
    )
}

export default ContactList;
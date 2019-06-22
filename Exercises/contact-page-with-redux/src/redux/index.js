import { createStore } from 'redux'

export const addContact = (contact) => {
    return {
        type: "ADD_CONTACT", 
        contact
    }
}

export const delContact = () => {
    return {
        type: "DELETE_CONTACT"
    }
}

const initialState = {
    contacts: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "DELETE_CONTACT":
            return {
            }
        default:
            return state;
    }
}

export default createStore(reducer)
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

export const getBounties = () => {
    return dispatch => {
        axios.get('/bounties').then(response => {
            dispatch({
                type: 'GET_BOUNTIES',
                bounties: response.data
            })
        })
    }
}

export const addBounty = inputs => {
    return dispatch => {
        //you need to provide the object that represents the bounty being added
        axios.post('/bounties', inputs).then(response => {
            dispatch({
                type: 'ADD_BOUNTY',
                bounty: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const editBounty = (id, inputs) => {
    return dispatch => {
        axios.put(('/bounties/' + id), inputs).then(response => {
            dispatch({
                type: 'EDIT_BOUNTY',
                bounty: response.data,
                id
            })
        })
    }
}

export const delBounty = id => {
    return dispatch => {
        axios.delete('/bounties/' + id).then(response => {
            dispatch({
                type: 'DELETE_BOUNTY',
                id
            })
        })
    }
}

const initialState = {
    bounties: []
}

//REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_BOUNTIES':
            return {
                ...state,
                bounties: action.bounties
            }
        case 'ADD_BOUNTY':
            return {
                ...state,
                //instead of replacing the array, you need to add the bounty to it
                bounties: [...state.bounties, action.bounty] 
            }
        case 'EDIT_BOUNTY':
            return {
                ...state,
                bounties: state.bounties.map(bounty => bounty._id === action.id ? action.bounty : bounty)
            }
        case 'DELETE_BOUNTY':
            return {
                ...state,
                bounties: state.bounties.filter(bounty => bounty._id !== action.id)
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

export default store
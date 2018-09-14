import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

//ACTION CREATE
export const addInquiry = inquiry => {
    return dispatch => {
        dispatch({type: "LOADING"});
        axios.post('/inquiries', inquiry).then(response => {
            dispatch({
                type: 'ADD_INQUIRY',
                inquiry: response.data,
                loading: false
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

//REDUCER
const initiateState = {
    inquiries: [],
    loading: false,
    data: null,
    err: null
}

const reducer = (state = initiateState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'ADD_INQUIRY':
            return {
                ...state,
                loading: false,
                inquiries: [...state.inquiries, action.inquiry]
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

export default store

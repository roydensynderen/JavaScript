import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const getMatches = playerId => {
    return axios.get(`https://api.opendota.com/api/players/${playerId}/recentMatches`)
}
const getRankings = playerId => {
    return axios.get(`https://api.opendota.com/api/players/${playerId}/rankings`) 
}
// const getHeroes = () => {
//     return axios.get(`https://api.opendota.com/api/heroes`)
// }

export const getPlayer = playerId => {
    return dispatch => {
        dispatch({type: "START_LOADING"});
        axios.get(`https://api.opendota.com/api/players/${playerId}`).then(response => {
            dispatch({
                type: "GET_PLAYER",
                player: response.data
            });
            return getMatches(playerId)
        })
        .then(response => {
            dispatch({
                type: "GET_MATCHES",
                matches: response.data
            });
            return getRankings(playerId)
        })
        .then(response => {
            dispatch({
                type: "GET_RANKINGS",
                rankings: response.data
            });
        })
        // .then(response => {
        //     dispatch({
        //         type: "GET_HEROES",
        //         heroes: response.data
        //     })
        // })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getHeroes = () => {
    return dispatch => {
        axios.get(`https://api.opendota.com/api/heroes`).then(response => {
            dispatch({
                type: "GET_HEROES",
                heroes: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

const initialState = {
        matches: [],
        player: null,
        rankings: [],
        heroes: [],
        loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "START_LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_PLAYER":
            return {
                ...state,
                player: action.player,
                loading: false
            }
        case "GET_MATCHES": 
            return {
                ...state,
                matches: action.matches,
                loading: false
            }
        case "GET_RANKINGS":
            return {
                ...state,
                rankings: action.rankings,
                loading: false
            }
        case "GET_HEROES":
            return {
                ...state,
                heroes: action.heroes,
                loading:false
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()));

export default store
import { auto } from 'async';
import { combineReducers } from 'redux';
import { GET_LISTS, DELETE_LIST, POST_LIST, UPDATE_LIST, UPDATE_CARD, GET_CARDS, POST_CARD, DELETE_CARD } from '../actions/index.js';

export const initialState = {
    lists: [],
    cards: []
}

export function getReducers (state = initialState, action) {
    switch (action.type){
        case GET_LISTS: 
            console.log(action.payload, 'line 1432432')
            return {
                ...state,
                lists: action.payload
            };
        case GET_CARDS:
            console.log(action.payload, 'line 14')
            return {
                ...state,
                cards: action.payload
            }

        default: return state;
    }
}

export function changeReducers (state = initialState, action) {
    switch (action.type){
        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list !== action.payload)
            };

        case POST_LIST:
            return {
                ...state,
                lists: state.lists
            };
        
        case UPDATE_LIST:
            return {
                ...state,
                lists: state.lists
            };
        
        case POST_CARD:
            return {
                ...state,
                cards: state.cards
            }
        
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card !== action.payload)
            }

        case UPDATE_CARD:
            return {
                ...state,
                cards: state.cards
            }

        default: return state;
    }
}


export default combineReducers({
    getReducers, changeReducers
})


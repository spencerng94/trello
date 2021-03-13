import { auto } from 'async';
import { combineReducers } from 'redux';
import { GET_LISTS, DELETE_LIST } from '../actions/index.js';

export const initialState = {
    lists: [],
    cards: []
}

export function getReducers (state = initialState, action) {
    switch (action.type){
        case GET_LISTS: 
            console.log(action.payload, 'line 14')
            return {
                ...state,
                lists: action.payload
            };

        default: return state;
    }
}

export function changeReducers (state = initialState, action) {
    switch (action.type){
        case DELETE_LIST:
            let stateBeforeDelete = Object.assign({}, state);
            console.log(action.payload, 'line 27')
            return {
                ...state,
                lists: state.lists.filter(list => list !== action.payload)
            };

        default: return state;
    }
}


export default combineReducers({
    getReducers, changeReducers
})


import { combineReducers } from 'redux';
import dummyReducer from './dummyReducer.js';

// import {

// } from '../actions/index.js';

// import { changeReducers } from './changeReducers.js';
// import { getReducers } from './getReducers.js';

export const initialState = {
    board: [],
    lists: [],
    cards: []
}

export default combineReducers({
    dummyReducer
})

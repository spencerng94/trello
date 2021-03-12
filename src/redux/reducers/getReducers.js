import {
    GET_LISTS
} from '../actions/index.js';

import initialState from './index.js';

export function getReducers (state = initialState, action){
    const { past, present, future } = state;
  
    switch(action.type){
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload
            };

        default: return state;
    }
  }
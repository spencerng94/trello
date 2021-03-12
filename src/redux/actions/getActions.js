import axios from 'axios';
import { GET_LISTS } from './index.js';

export const getLists = () => dispatch => {
    console.log('getLists line 5')
    axios.get(`/api/lists/`)
        .then(res => 
            dispatch({
                type: GET_LISTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_LISTS,
                payload: {}
            })
        );
}
import axios from 'axios';
import { DELETE_LIST } from './index.js';
import { getLists } from './getActions.js';
import { GET_ERRORS } from './index.js';

export const deleteList = (listId) => dispatch => {
    console.log(listId, 'line 7')
    let data = ({
        listId: listId
    })
    // axios({method: 'delete', url: `http://127.0.0.1:3001/api/lists`, data: listId})
    axios.delete(`http://127.0.0.1:3001/api/lists/${listId}`, { params: data })
        .then(data => {
            console.log(data, 'deleteList line 7');
            dispatch({
                type: DELETE_LIST,
                payload: listId
            })
            dispatch(getLists());
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}



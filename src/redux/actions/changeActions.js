import axios from 'axios';
import { DELETE_LIST, POST_LIST, UPDATE_LIST } from './index.js';
import { getLists } from './getActions.js';
import { GET_ERRORS } from './index.js';

export const deleteList = (listId) => dispatch => {
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


export const addList = (newListId) => dispatch => {
    console.log(newListId, 'line 7')
    let data = ({
        listId: newListId
    })
    // axios({method: 'delete', url: `http://127.0.0.1:3001/api/lists`, data: listId})
    axios.post(`http://127.0.0.1:3001/api/lists/${newListId}`, { params: data })
        .then(data => {
            console.log(data, 'addList line 7');
            dispatch({
                type: POST_LIST,
                payload: newListId
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

export const editList = (listId, newName) => dispatch => {
    console.log(listId, newName, 'line 53');
    let data = ({
        listId: listId,
        listTitle: newName
    })

    axios.patch(`http://127.0.0.1:3001/api/lists/${listId}`, data)
    .then(data => {
        console.log(data, 'editList line 7');
        dispatch({
            type: UPDATE_LIST,
            payload: data
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
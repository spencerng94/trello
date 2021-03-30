// import axios from 'axios';
import axios from '../../axiosConfig.js';
import { DELETE_LIST, POST_LIST, UPDATE_LIST, POST_CARD, DELETE_CARD, UPDATE_CARD } from './index.js';
import { getLists, getCards } from './getActions.js';
import { GET_ERRORS } from './index.js';

export const deleteList = (listId) => dispatch => {
    let data = ({
        list_id: listId
    })
    axios.delete(`/api/lists/${listId}`, { params: data })
        .then(data => {
            dispatch({
                type: DELETE_LIST,
                payload: listId
            })
            dispatch(getLists());
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );
}


export const addList = (newListId) => dispatch => {
    let data = ({
        listId: newListId
    })
    axios.post(`/api/lists/${newListId}`, { params: data })
        .then(data => {
            dispatch({
                type: POST_LIST,
                payload: newListId
            })
            dispatch(getLists());
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );
}

export const editList = (listId, newName) => dispatch => {
    let data = ({
        listId: listId,
        listTitle: newName
    })

    axios.patch(`/api/lists/${listId}`, data)
    .then(data => {
        dispatch({
            type: UPDATE_LIST,
            payload: data
        })
        dispatch(getLists());
    })
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    );

}

export const addCard = (listId, lastCardId, lastPosition, newCardName) => dispatch => {
    let data = ({
        cardId: lastCardId + 1,
        listId: listId, 
        cardName: newCardName,
        position: lastPosition + 1
    })
    console.log(data, 'line 85')
    // axios({method: 'delete', url: `http://localhost:3001/api/lists`, data: listId})
    axios.post(`/api/cards/${listId}`, { params: data })
        .then(data => {
            dispatch({
                type: POST_CARD,
                payload: data
            })
            dispatch(getCards());
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );
}

export const deleteCard = (cardId, listId) => dispatch => {
    let data = ({
        listId: listId,
        cardId: cardId
    })
    console.log(data, 'line 109')
    axios.delete(`/api/cards/${cardId}`, { params: data })
        .then(data => {
            console.log(data, 'deleteCard line 112');
            dispatch({
                type: DELETE_CARD,
                payload: cardId
            })
            dispatch(getCards());
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );

}

export const editCard = (cardId, listId, newCardTitle) => dispatch => {
    console.log(cardId, listId, newCardTitle, 'line 53');
    let data = ({
        cardId: cardId,
        listId: listId,
        cardTitle: newCardTitle
    })

    axios.patch(`/api/cards/${cardId}`, data)
    .then(data => {
        console.log(data, 'editCard line 137');
        dispatch({
            type: UPDATE_CARD,
            payload: data
        })
        dispatch(getCards());
    })
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    );

}
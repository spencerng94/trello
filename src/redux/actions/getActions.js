import axios from 'axios';
import { GET_LISTS, GET_CARDS, GET_ERRORS } from './index.js';
import store from '../store/index.js';

export const getLists = () => dispatch => {
    axios.get(`http://127.0.0.1:3001/api/lists`)
        .then((res) => {
            console.log('line 9 getLists', res.data); // object
            let listsArray = [];
            for (let i = 0; i < res.data.length; i++) {
                let currentObject = {};
                currentObject.list_id = res.data[i].list_id;
                currentObject.list_name = res.data[i].list_name;
                currentObject.position = res.data[i].position;
                listsArray.push(currentObject);
            }
            console.log(listsArray, 'line 17')
            dispatch({
                type: GET_LISTS,
                payload: listsArray
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );
}

export const getCards = () => dispatch => {
    axios.get(`http://127.0.0.1:3001/api/cards/`)
        .then(res => {
            console.log('res from getCards:', res.data);
            let cardsArray = [];
            // iterate through each list
            for (let i = 0; i < res.data.length; i++) {
                let currentCardGroup = [];
                let currentCards = res.data[i]._cards;
                console.log(currentCards, 'line 41111');
                currentCardGroup.push(currentCards);
                cardsArray.push(currentCardGroup);
            }
            console.log(cardsArray, 'line 45')
            dispatch({
                type: GET_CARDS,
                payload: cardsArray
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );
}

// import axios from 'axios';
import { GET_LISTS, GET_CARDS, GET_ERRORS } from './index.js';
import store from '../store/index.js';
import axios from '../../server/axiosConfig.js';

export const getLists = () => dispatch => {
    axios.get(`/lists`)
        .then((res) => {
            let listsArray = [];
            for (let i = 0; i < res.data.length; i++) {
                let currentObject = {};
                currentObject.list_id = res.data[i].list_id;
                currentObject.list_name = res.data[i].list_name;
                currentObject.position = res.data[i].position;
                listsArray.push(currentObject);
            }
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
    axios.get(`/cards`)
        .then(res => {
            console.log('res from getCards:', res.data);
            let cardsArray = [];
            for (let i = 0; i < res.data.length; i++) {
                let currentCardGroup = [];
                let currentCards = res.data[i]._cards;
                currentCardGroup.push(currentCards);
                cardsArray.push(currentCardGroup);
            }
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

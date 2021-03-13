import axios from 'axios';
import { GET_LISTS } from './index.js';

export const getLists = () => dispatch => {
    console.log('getLists');
    axios.get(`http://127.0.0.1:3001/api/lists`)
        .then((res) => {
            console.log('line 9', res.data); // object
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
                type: GET_LISTS,
                payload: {}
            })
        );
}



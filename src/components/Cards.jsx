import { last } from 'lodash';
import store from '../redux/store/index.js';
import Card from './Card.jsx';

const Cards = (props) => {
    console.log(store.getState().getReducers.cards, 'line 4')
    let {listId, handleAddCard} = props;
    let currentCardState = store.getState().getReducers.cards;

    let currentCardStack = [];

    for (let i = 0; i < currentCardState.length; i++) {
        if (currentCardState[i][0].list_id === listId) {
            currentCardStack.push(currentCardState[i]);
        } 
    }
    console.log(currentCardStack, 'line 15')

    let lastPosition = 0;
    let lastCardId = 0;

    if (currentCardStack.length > 0) {
        lastPosition = currentCardStack[currentCardStack.length - 1].position;
        lastCardId = currentCardStack[currentCardStack.length - 1]._id;
    }

    let handleAnotherCard = (e) => {
        console.log('made it to 21')
        console.log(lastPosition, 'lastPosition')
        console.log(e.target.value, 'line 277777')
        let newCardName = e.target.value;
        handleAddCard(listId, lastCardId, lastPosition, newCardName);
    }
    
    return (
        <div>
            <div>
                {
                    currentCardStack.map((card) => {
                        return <Card cardName={card[0].card_name}/>
                    })
                }
            </div>
            <div onClick={handleAnotherCard}>
                Add another card:
                <input type="text" />
            </div>
        </div>
    )
}

export default Cards;
import { last } from 'lodash';
import store from '../redux/store/index.js';
import Card from './Card.jsx';
import AddCard from './addCard.jsx';

const Cards = (props) => {
    let {listId, handleAddCard, handleDeleteCard, handleEditCard, showEditCard, editingCard, showAddCard, addingCard, currentAddList, currentNewCardName, handleCardChange, currentEditCardList, currentEditCard} = props;
    let currentCardState = store.getState().getReducers.cards;

    let currentCardStack = [];

    for (let i = 0; i < currentCardState.length; i++) {
        if (currentCardState[i][0].list_id === listId) {
            currentCardStack.push(currentCardState[i]);
        } 
    }

    let lastPosition = 0;
    let lastCardId = 0;

    if (currentCardStack.length > 0) {
        lastPosition = currentCardStack[currentCardStack.length - 1][0].position;
        lastCardId = currentCardStack[currentCardStack.length - 1][0].card_id;
    }
    
    return (
        <div>
            <div>
                {
                    currentCardStack.map((card) => {
                        return <Card cardId={card[0].card_id} originalCardId={card[0]._id} cardName={card[0].card_name} listId={listId} handleDeleteCard={handleDeleteCard} handleEditCard={handleEditCard} showEditCard={showEditCard} editingCard={editingCard} handleCardChange={handleCardChange} currentNewCardName={currentNewCardName} currentEditCardList={currentEditCardList} currentEditCard={currentEditCard}/>
                    })
                }
            </div>
            <div>
                <AddCard showAddCard={showAddCard} addingCard={addingCard} handleAddCard={handleAddCard} listId={listId} lastCardId={lastCardId} lastPosition={lastPosition} currentAddList={currentAddList} currentNewCardName={currentNewCardName} handleCardChange={handleCardChange}/>
            </div>
        </div>
    )
}

export default Cards;
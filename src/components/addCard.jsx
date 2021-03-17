const AddCard = (props) => {

    let {showAddCard, addingCard, handleAddCard, listId, lastCardId, lastPosition, currentAddList, currentNewCardName, handleCardChange} = props;

    let handleAnotherCard = (e) => {
        let newCardName = currentNewCardName;
        handleAddCard(listId, lastCardId, lastPosition, newCardName);
        showAddCard(listId)
    }

    let addCardHandler = () => {
        showAddCard(listId);
    }
    
    
    return (
        <div>
            {
                addingCard && (currentAddList === listId)?
                <div className="submit-container-add-card">
                    <input className="submit-input" type="text" onChange={handleCardChange}/>
                    <button class="submit-btn btn" onClick={handleAnotherCard}>Submit</button>
                </div>
                    :
                <button class="add-card-btn btn" onClick={addCardHandler}>Add a card</button>
            }
        </div>
    )
}

export default AddCard;
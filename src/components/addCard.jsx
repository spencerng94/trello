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
                <div>

                    <input type="text" onChange={handleCardChange}/>
                    <button type="button" class="btn btn-success" onClick={handleAnotherCard}>Submit</button>
                </div>
                    :
                <div onClick={addCardHandler}>
                    Add another card:
                </div>
            }
        </div>
    )
}

export default AddCard;
const Card = (props) => {
    let {cardName, cardId, listId, handleDeleteCard, originalCardId, handleEditCard, showEditCard, editingCard, currentNewCardName, handleCardChange, currentEditCardList, currentEditCard} = props;

    let deleteClickHandler = (currentCardId, currentListId) => {
        handleDeleteCard(cardId, listId);
    }

    let editCardSubmitter = (e) => {
        e.preventDefault();
        console.log('Card Name was selected');
        let newCardTitle = currentNewCardName;
        handleEditCard(cardId, listId, newCardTitle);
        showEditCard(listId, cardId)
    }

    let editCardHandler = () => {
        showEditCard(listId, cardId);
    }

    return (
        <div className="single-card">
            {
                editingCard && (currentEditCardList === listId) && (currentEditCard === cardId)? 
                <div>
                    <input type="text" onChange={handleCardChange}/>
                    <button type="button" class="btn btn-success" onClick={editCardSubmitter}>Submit</button>
                </div>
                    :
                    <div onClick={editCardHandler}>
                        {cardName}
                    <button type="button" class="btn-close float-end" aria-label="Close" onClick={deleteClickHandler}></button>
                    </div>
            }
        </div>
    )
}

export default Card;

{/* <div onClick={editCardHandler}>
{cardName}
<input type="text" onChange={handleCardChange}/>
<button type="button" class="btn btn-success" onClick={editCardSubmitter}>Submit</button>
</div>
<button type="button" class="btn-close float-end" aria-label="Close" onClick={deleteClickHandler}></button> */}
const Card = (props) => {
    let {cardName, cardId, listId, handleDeleteCard, originalCardId, handleEditCard} = props;

    let onClickHandler = (currentCardId, currentListId) => {
        handleDeleteCard(cardId, listId);
    }

    let handleClickEdit = (e) => {
        e.preventDefault();
        console.log('Card Name was selected');
        let newCardTitle = e.target.value;
        handleEditCard(cardId, listId, newCardTitle);
    }

    return (
        <div>
            <div onClick={handleClickEdit}>
                {cardName}
                <input type="text" onClick={handleClickEdit}/>
            </div>
            <button type="button" class="btn-close float-end" aria-label="Close" onClick={onClickHandler}></button>
        </div>
    )
}

export default Card;
const Card = (props) => {
    let {cardName, cardId, listId, handleDeleteCard, originalCardId} = props;

    console.log(cardId, 'line 43543543')

    let onClickHandler = (currentCardId, currentListId) => {
        console.log(cardId, listId, 'line 7');
        handleDeleteCard(cardId, listId);
    }

    return (
        <div>
            <div>
                {cardName}
            </div>
            <button type="button" class="btn-close float-end" aria-label="Close" onClick={onClickHandler}></button>
        </div>
    )
}

export default Card;
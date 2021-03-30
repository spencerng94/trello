import ListTitle from './ListTitle.jsx';
import Cards from './Cards.jsx';

const List = (props) => {
    let {listName, listId, listPosition, handleDeleteList, handleEditList, handleAddCard, handleDeleteCard, handleEditCard, editingList, showEditList, showEditCard, editingCard, showAddCard, addingCard, currentAddList, currentNewCardName, handleCardChange, currentEditList, handleListChange, currentNewListName, currentEditCardList, currentEditCard} = props;

    let currentListId = listId;

    let onClickHandler = (listId) => {
        handleDeleteList(currentListId);
    }

    return (
        <div className="single-list">
            <div class="container">
                <div class="row">
                    <header>
                        <div>
                            <div class="float-start">
                                <ListTitle listName={listName} editingList={editingList} handleEditList={handleEditList} listId={listId} currentEditList={currentEditList} showEditList={showEditList} handleListChange={handleListChange} currentNewListName={currentNewListName}/>
                            </div>
                            <button type="button" class="btn-close float-end" aria-label="Close" onClick={onClickHandler}></button>
                        </div>
                    </header>
                </div>
            </div>
            <Cards listId={listId} handleAddCard={handleAddCard} handleDeleteCard={handleDeleteCard} handleEditCard={handleEditCard} showEditCard={showEditCard} editingCard={editingCard} showAddCard={showAddCard} addingCard={addingCard} currentAddList={currentAddList} currentNewCardName={currentNewCardName} handleCardChange={handleCardChange} currentEditCardList={currentEditCardList} currentEditCard={currentEditCard}/>
        </div>
    )
}

export default List;
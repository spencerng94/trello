import ListTitle from './ListTitle.jsx';
import Cards from './Cards.jsx';

const List = (props) => {
    let {listName, listId, listPosition, handleDeleteList, handleEditList, handleAddCard, handleDeleteCard, handleEditCard} = props;

    let currentListId = listId;

    let onClickHandler = (listId) => {
        handleDeleteList(currentListId);
    }

    let handleClickEdit = (e) => {
        e.preventDefault();
        console.log('List Name was selected');
        let newTitle = e.target.value;
        handleEditList(listId, newTitle);
    }


    return (
        <div className="single-list">
            <div class="container">
                <div class="row">
                    <header>
                        <div>
                            <div class="float-start">
                                <ListTitle listName={listName}/>
                                <input type="text" onClick={handleClickEdit} />
                            </div>
                            <button type="button" class="btn-close float-end" aria-label="Close" onClick={onClickHandler}></button>
                        </div>
                    </header>
                </div>
            </div>
            <Cards listId={listId} handleAddCard={handleAddCard} handleDeleteCard={handleDeleteCard} handleEditCard={handleEditCard}/>
        </div>
    )
}

export default List;
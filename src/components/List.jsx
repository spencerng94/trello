import ListTitle from './ListTitle.jsx';

const List = (props) => {
    let {listName, listId, listPosition, handleDeleteList, handleEditList} = props;

    let currentListId = listId;


    let onClickHandler = (listId) => {
        handleDeleteList(currentListId);
    }

    function handleClickEdit(e) {
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
                            <div class="float-start" onClick={handleClickEdit}>
                                <ListTitle listName={listName}/>
                                <input type="text" onClick={handleClickEdit} />
                            </div>
                            <button type="button" class="btn-close float-end" aria-label="Close" onClick={onClickHandler}></button>
                        </div>
                    </header>
                </div>
            </div>
            <div>
                Card 1
            </div>
            <footer>
                Add another card
            </footer>
        </div>
    )
}

export default List;
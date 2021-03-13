const List = (props) => {
    let {listName, listId, listPosition, handleDeleteList} = props;

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
                                {listName}
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
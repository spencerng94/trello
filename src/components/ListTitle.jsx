const ListTitle = (props) => {

    let {listName, editingList, handleEditList, listId, showEditList, currentEditList, handleListChange, currentNewListName} = props;

    let handleClickEdit = (e) => {
        e.preventDefault();
        console.log('List Name was selected');
        let newTitle = currentNewListName;
        handleEditList(listId, newTitle);
        showEditList(listId);
    }

    let editListHandler = () => {
        console.log(listId, 'line 13')
        showEditList(listId)
    }


    return (
        <div>
            {
                editingList && (currentEditList === listId)?
                <div className="submit-container">
                    <input className="submit-input" type="text" onChange={handleListChange} />
                    <button class="submit-btn btn" onClick={handleClickEdit}>Submit</button>
                </div>
                    :
                <div className="list-title" onClick={editListHandler}>
                   {listName}
                </div>
            }
        </div>
    )
}

export default ListTitle;


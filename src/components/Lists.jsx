import react from 'react';
import List from './List.jsx';
import store from '../redux/store/index.js';

const Lists = (props) => {
    let { lists, handleDeleteList, handleAddList, handleEditList, handleAddCard, handleDeleteCard} = props;
    console.log(store.getState().getReducers.lists, 'line 9')
    let currentLists = store.getState().getReducers.lists;

    if (currentLists.length > 0) {
        lists = store.getState().getReducers.lists;
    }

    let newListId;

    if (lists.length === 0) {
        newListId = 1;
    } else {
        newListId = lists[lists.length - 1]["list_id"] + 1;
    }

    if (lists.length > 0) {
        let listIds = [];
        lists.forEach(list => {
            listIds.push(list.list_id);
        })
    }

    let onClickHandler = (listId) => {
        handleAddList(newListId);
    }


    return (
        <div>
            <ul>
                <div className="flex-container">
                    {
                        lists.map((listElement) => {
                            return <List listName={listElement.list_name} listId={listElement.list_id} listPosition={listElement.list_position} handleDeleteList={handleDeleteList} handleEditList={handleEditList} handleAddCard={handleAddCard} handleDeleteCard={handleDeleteCard}/>
                        })
                    }
                    <div className ="single-list" onClick={onClickHandler}>
                        Add Another List
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Lists;
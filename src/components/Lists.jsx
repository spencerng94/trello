import react from 'react';
import List from './List.jsx';
import store from '../redux/store/index.js';

const Lists = (props) => {
    let { lists, handleDeleteList, handleAddList, handleEditList } = props;
    console.log(lists, 'line 6');

    let newListId;

    if (lists.length === 0) {
        newListId = 1;
    } else {
        newListId = lists[lists.length - 1]["list_id"] + 1;
    }

    let onClickHandler = (listId) => {
        handleAddList(newListId);
    }


    let dummyLists = ['to-do', 'in progress', 'finished'];

    return (
        <div>
            <ul>
                <div className="flex-container">
                    {
                        lists.map((listElement) => {
                            return <List listName={listElement.list_name} listId={listElement.list_id} listPosition={listElement.list_position} handleDeleteList={handleDeleteList} handleEditList={handleEditList}/>
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
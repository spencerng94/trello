import react from 'react';
import List from './List.jsx';
import store from '../redux/store/index.js';

const Lists = (props) => {
    let { lists, handleDeleteList } = props;
    console.log(lists, 'line 6');


    let dummyLists = ['to-do', 'in progress', 'finished'];

    return (
        <div>
            <ul>
                <div className="flex-container">
                    {
                        lists.map((listElement) => {
                            return <List listName={listElement.list_name} listId={listElement.list_id} listPosition={listElement.list_position} handleDeleteList={handleDeleteList}/>
                        })
                    }
                    <div className ="single-list">
                        Add Another List
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Lists;
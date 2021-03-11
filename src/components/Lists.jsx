import react from 'react';
import List from './List.jsx';

const Lists = () => {

    let dummyLists = ['to-do', 'in progress', 'finished'];

    return (
        <div>
            <ul>
                <div className="flex-container">
                    {
                        dummyLists.map((listName) => {
                            return <List listName={listName}/>
                        })
                    }
                </div>
            </ul>
        </div>
    )
}

export default Lists;
const List = (props) => {
    let {listName} = props;

    return (
        <div className="single-list">
            <div>
                {listName}
            </div>
            <div>
                Card 1
            </div>
            <div>
                Add another card
            </div>
        </div>
    )
}

export default List;
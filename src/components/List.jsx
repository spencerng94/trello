const List = (props) => {
    let {listName} = props;

    return (
        <div>
            <div>
                {listName}
            </div>
            <div>
                Card 1
            </div>
        </div>
    )
}

export default List;
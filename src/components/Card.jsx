const Card = (props) => {
    let {cardName} = props;

    console.log(cardName, 'line 43543543')

    return (
        <div>
            {cardName}
        </div>
    )
}

export default Card;
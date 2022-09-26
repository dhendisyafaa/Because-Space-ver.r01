const Card = (props) => {
    return(
        <div className="card-component">
            <img src={props.imgCard} alt=""/>
            <div className="card-body">
                <p className="title">{props.titleCard}</p>
                <small>photo by .....</small>
                <p>Moon is a moon is a moon is a moon is a Moon is a Moon is a Moon is a Moon is a Moon is aMoon is aMoon is a  v Moon is a Moon is a Moon is a Moon is aMoon is av v Moon is a v Moon is a Moon is a Moon is a</p>
            </div>
        </div>
    )
}

export default Card;
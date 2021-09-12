
const PokemonCard = ({name, img, id, type, values}) => {
    return (
        <div className="root">
            <div className="pokemonCard">
                <div className="cardFront">
                    <div className="wrap front">
                        <div className="pokemon <-- Type Pokemon -->">
                            <div className="values">
                                <div className="count top">{values.top}</div>
                                <div className="count right">{values.right}</div>
                                <div className="count bottom">{values.bottom}</div>
                                <div className="count left">{values.left}</div>
                            </div>
                            <div className="imgContainer">
                                <img src="<-- Pokemon Picture -->" alt="<-- Name Pokemon -->" />
                            </div>
                            <div className="info">
                                <span className="number">#{id}</span>
                                <h3 className="name">{name}</h3>
                                <small className="type">Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cardBack">
                    <div className="wrap back">
                        <img src="<-- Card Backed Picture -->" alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard
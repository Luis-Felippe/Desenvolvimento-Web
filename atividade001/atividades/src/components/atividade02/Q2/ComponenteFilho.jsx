import Neto from "./ComponenteNeto"

import { useContext } from "react";
import Contador from "./PokeContext";

const Filho = () => {
    const {cont} = useContext(Contador)

    return (
        <div>
            <h2>Pokemon Filho: {cont+1}</h2>
            <Contador.Provider value={ cont }>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cont+1}.png`}
                    alt="Pokemons"
                    width={350}
                />
                <Neto />
            </Contador.Provider>
        </div>
    );
}

export default Filho
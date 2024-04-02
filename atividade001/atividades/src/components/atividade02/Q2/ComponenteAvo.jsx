import Filho from "./ComponenteFilho"
import Decrement from "./Decrement";
import Increment from "./Increment";

import { useState } from "react";
import Contador from "./PokeContext";

const Avo = () => {
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [cont, setCont] = useState(1)

    return (
        <div>
            <h2>Pokemon Avo: {cont}</h2>
            <Contador.Provider value={{cont, setCont}}>
                <img
                    src={url+cont+".png"}
                    alt="Pokemons"
                    width={300}
                />
                <Filho value={ cont } />

                <Increment/>
                <Decrement/>
            </Contador.Provider>

        </div>
    );
}

export default Avo
import { useContext } from "react";
import Contador from "./PokeContext";

const Neto = () => {
    const cont = useContext(Contador)

    return (
        <div>
            <h2>Pokemon Filho: {cont+2}</h2>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cont+2}.png`}
                alt="Pokemons"
                width={300}
            />
        </div>
    );
}

export default Neto
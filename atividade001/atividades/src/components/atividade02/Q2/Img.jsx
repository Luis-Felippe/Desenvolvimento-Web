import Decrement from "./Decrement";
import Increment from "./Increment";

import { useContext } from "react";
import Contador from "./PokeContext";

const Img = () => {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const {cont} = useContext(Contador)

    function Proximo() {
        cont = cont + 1;
    }

    return (
        <div>
            <img
                src={url+cont+".png"}
                alt="Pokemons"
                width={300}
            />
            <Increment/>
            <Decrement/>
        </div>
    );
}

export default Img
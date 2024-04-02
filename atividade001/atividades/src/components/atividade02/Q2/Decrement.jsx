import { useContext } from "react";
import Contador from "./PokeContext";

const Decrement = () => {
    const {setCont} = useContext(Contador)

    return (
        <div>
            <button
                onClick={
                    () => {
                        setCont(valor => valor - 1)
                    }
                }
            >Anterior</button>
        </div>
    );
}

export default Decrement
import { useContext } from "react";
import Contador from "./PokeContext";

const Increment = () => {
    const {setCont} = useContext(Contador)

    return (
        <div>
            <button
                onClick={
                    () => {
                        setCont(valor => valor + 1)
                    }
                }
            >Proximo</button>
        </div>
    );
}

export default Increment
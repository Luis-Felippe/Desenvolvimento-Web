import React from "react"
import Filho from "./01Filho"

const Pai = () => {
    return(
        <div>
            <h3>meu filho pesa</h3> <Filho altura = {1.8} peso = {90}/>
        </div>
    )
}

export default Pai
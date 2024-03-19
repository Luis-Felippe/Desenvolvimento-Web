import React from "react"

const PlacaMae = ({nome ,preco}) =>{
    return(
        <div>
            <h3>Placa mãe</h3>
            <p>Nome: {nome} </p>
            <p>Preço: {preco}</p>
        </div>
    )
}

const Memoria = ({nome, preco}) =>{
    return(
        <div>
            <h3>Memória Ram</h3>
            <p>Nome: {nome} </p>
            <p>Preço: {preco}</p>
        </div>
    )
}

const PlacaDeVideo = ({nome, preco}) =>{
    return(
        <div>
            <h3>Placa de Vídeo</h3>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
        </div>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo}
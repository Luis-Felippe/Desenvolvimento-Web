import React from "react";

const Hero = ({nome, imag}) =>{
    return (
        <div>
            <p>Nome: {nome}</p>
            <img src = {imag} alt="herói" style={{ maxWidth: '100px'}} />
        </div>
    )
}

const Enemy = ({nome, imag}) =>{
    return (
        <div>
            <p>Nome: {nome}</p>
            <img src = {imag} alt="Vilão" style={{ maxWidth: '100px'}} />
        </div>
    )
}

const Arena = ({children, nome}) =>{
    return (
        <div>
            <h3>Arena : {nome}</h3>
            {children}
        </div>
    )
}

const World = ({children}) =>{
    return(
        <div>
            {children}
        </div>
    )
}

export {Hero, Enemy, Arena, World}
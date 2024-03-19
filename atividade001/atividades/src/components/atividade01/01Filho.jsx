const Filho = ({peso, altura}) =>{

    const imc = peso /  Math.pow(altura, 2)

    const mensagem =  () => {
        if(imc > 25) return <h3>Acima do peso</h3>
        if(imc < 18) return <h3>Abaixo do peso</h3>
        if(imc >= 18 && imc <=25) return <h3>Peso ideal</h3>
    }

    return(
        <div>
            <h3>{imc.toFixed(2)} {mensagem()} </h3>
        </div>
    )


}

export default Filho
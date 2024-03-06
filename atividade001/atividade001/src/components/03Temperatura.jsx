const Temperatura = ({grau}) => {
    let fahrenheit
    let celsius

    function celsiusParaFahrenheit(grau){
        fahrenheit = (grau * 1.8) + 32 
        return fahrenheit 
    }

    function fahrenheitparaCelsius(grau){
        celsius = (grau / 1.8) - 32 
        return celsius 
    }

    function kelvin(grau){
        return (
            <div>
                <h3>celsius = {grau - 273} </h3>
                <h3>fahrenheit = {celsiusParaFahrenheit(grau - 273)}</h3>
            </div>
        )
    }

    return(
        <div>
            <h1>Temperatura se a entrada for em celsius:</h1>
            <h3>Celsius = {grau}</h3>
            <h3>Fahrenheit = {celsiusParaFahrenheit(grau)}</h3>
            <h1>Temperatura se a entrada for em Fahrenheit:</h1>
            <h3>Fahrenheit = {grau}</h3>
            <h3>Celsius = {fahrenheitparaCelsius(grau)}</h3>
            <h1>Temperatura se a entrada for em Kelvin:</h1>
            <h3>Kelvin = {grau}</h3>
            {kelvin(grau)}
            

        </div>
    )
}

export default Temperatura
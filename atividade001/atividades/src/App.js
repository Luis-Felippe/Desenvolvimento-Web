
import React from "react";

import ContextA from "./components/atividade02/Q1/ContextA";
import Avo from "./components/atividade02/Q2/ComponenteAvo";


function App(){
  return(
    <div>
      <center><h1>Atividade 002</h1></center>
      <center><h3>aluno: Luis Felippe Morais de lima</h3></center>
      <h1>Q1</h1>
      <ContextA/>

      <h1>Q2</h1>
      <Avo/>
    </div>
  )
}


/*
function App() {
  return (
    <div className="App">
      <h1>Q1</h1>
      <Pai />
      <h1>Q2</h1>
      <PC.PlacaMae nome = "Asus" preco={800} />
      <PC.Memoria nome={"HyperX"} preco={250} />
      <PC.PlacaDeVideo nome={"Nvidea"} preco={2000} />
      <h1>Q3</h1>
      <Guerra.World>
        <Guerra.Arena nome = "CIRQUE DU SOLEIL">
        <h3>Herói</h3>
        <Guerra.Hero nome = "Patatá" imag="https://i.ytimg.com/vi/3Z1qYvKH30g/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLD4AZ9vsEjLY4YcQ4MaNSC5A4mBjQ" />
        <h1>VS</h1>
        <h3>Vilão</h3>
        <Guerra.Enemy nome = "Patati" imag={"https://http2.mlstatic.com/D_NQ_NP_787375-MLB51178991625_082022-O.webp"}  />
        </Guerra.Arena>
        <Guerra.Arena nome = "Planeta Vegeta">
        <h3>Herói</h3>
        <Guerra.Hero nome = "Monkey D. Luffy" imag="https://i.pinimg.com/736x/ea/04/9b/ea049b4a5e27eaac4463ff5014ee6931.jpg" />
        <h1>VS</h1>
        <h3>Vilão</h3>
        <Guerra.Enemy nome = "Naruto" imag={"https://i.pinimg.com/736x/e8/57/0b/e8570b20fac59df47e0164fafa50bda0.jpg"}  />
        </Guerra.Arena>
        <Guerra.Arena nome = "Palácio do Planalto">
        <h3>Herói</h3>
        <Guerra.Hero nome = "Massa cinzenta" imag="https://b224934ab1.cbaul-cdnwnd.com/d6b48000ec05738b90795d5f246b89b1/system_preview_detail_200000015-c3b3ac4ae7-public/3-Massa%20Cinzenta%20ben10.png" />
        <h1>VS</h1>
        <h3>Vilão</h3>
        <Guerra.Enemy nome = "Ultra T" imag={"https://i.pinimg.com/550x/ed/cf/f3/edcff30d6e8beacdadaf82b836306c75.jpg"}  />
        </Guerra.Arena>
      </Guerra.World>
    </div>
    
  );
}
*/
export default App;





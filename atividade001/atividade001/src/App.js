import Meusdados2 from "./components/02Meusdados";
import Temperatura from "./components/03Temperatura";

function App() {
  return (
    <div className="App">
      <Meusdados2 nome = "Luis Felippe Morais de lima" curso = "Engenharia de Software" universidade = "Universidade Federal do Ceará" />
      <h1>
        ____________________________________________________
      </h1>
      <Temperatura grau = "32" />
    </div>
    
  );
}

export default App;




